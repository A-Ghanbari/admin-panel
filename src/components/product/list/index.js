import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { useSelector } from "react-redux"
import { PRODUCT as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import API_SERVICES from "tools/shared/apis"
import { exportTableExcelFile } from "store/actions/export"
import { deleteProduct, getProductPriceInfo, getProducts, productPriceInfo } from "store/actions/product"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/product/list/Filter"
import Card from "components/product/list/Card"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import Notification from "components/utils/notification"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const [productLoading, setProductLoading] = useState(false)
    const [filterData, setFilterData] = useState(null)
    const navigate = useNavigate()

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getProducts(checkFilters({ ...filter.product.list }))
        dispatch(productPriceInfo({}))
    }, [filter.product.list, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                list: {
                    ...filter.product.list,
                    ...values,
                    pageIndex: 1
                }
            }
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            product: {
                ...filter.product,
                list: {
                    ...filter.product.list,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "کد",
            key: "ID",
            width: "5%",
        },
        {
            title: "نام محصول",
            key: "productName",
            width: 100,
            render: (r) => <div className="table-title">{r}</div>
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./preview/${r.ID}`}>
                        <Icon key="global" type="global" title="پیش نمایش" />
                    </Link>
                    <Link to={`./detail/${r.ID}`}>
                        <Icon key="eye" type="eye" title="مشاهده جزئیات" />
                    </Link>
                    <Link to={`./edit/${r.ID}`} permission="editProductPermission">
                        <Icon key="edit" type="edit" title="ویرایش محصول" />
                    </Link>
                    <Link to={`./warehouse/${r.ID}`} permission="policyProductBarcode">
                        <Icon key="warehouse" type="warehouse" title="ویرایش انبار" />
                    </Link>
                    <Link to={`./change-count/${r.ID}`} state={{ name: r.productName }} permission="changeProductCountPermission">
                        <Icon key="inventory" type="inventory" title="ویرایش موجودی" />
                    </Link>
                    <Icon key="price" type="price" title="ویرایش قیمت" onClick={() => changePriceHandler(r.ID)} />
                    <Popconfirm
                        permission="deleteProductPermission"
                        title={`آیا از حذف محصول کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteProduct({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" title="حذف محصول" />
                    </Popconfirm>
                </div>
            ),
        },
        {
            title: "تصویر",
            key: "picLink",
            width: "5%",
            render: (f, r) => (
                <a href={f} target="blank">
                    <img src={f} width="32" height="32" />
                </a>
            ),
        },
        {
            title: "نام برند",
            key: "brandName",
            width: "10%",
        },
        {
            title: "نام گروه",
            key: "categoryName",
            width: "10%",
        },
        {
            title: "موجودی سایت",
            key: "count",
            width: "5%",
        },
        {
            title: "موجودی در انتظار فروش",
            key: "reservedCount",
            width: "5%",
        },
        {
            title: "فعال",
            key: "isInactive",
            width: "5%",
            render: (f) => (
                f ? <span className="unapproved" /> : <span className="approved" />
            ),
        },
        {
            title: "قابل فروش",
            key: "salable",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
    ]

    const changePriceHandler = (ID) => {
        getProductPriceInfo({ ID }).then(
            res => {
                if (res.data.dataList[0]?.salePrices == null) {
                    Notification.warning("هنوز قیمت خریدی برای این کالا تعریف نشده است")
                } else {
                    dispatch(productPriceInfo(res.data.dataList[0]?.salePrices))
                    navigate(`./price/${ID}`)
                }
            }
        )
    }

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={filterData ? filterData : filter.product.list}
                setFilterData={setFilterData}
            />
            <ActionButton position="right">
                <Link to='./create' permission="createProductPermission">
                    <Button
                        type="secondary-accent"
                        label="ایجاد محصول جدید"
                    />
                </Link>
                <Button
                    name="excel"
                    type="secondary-dark"
                    label="ثبت حواله"
                    loading={productLoading}
                    permission="commercialRequestExcelList"
                    onClick={() =>
                        exportTableExcelFile({
                            url: API_SERVICES.product.list.commerceExcel,
                            fileName: 'product-file-for-commerce',
                            data: filterData ? filterData : filter.product.list,
                            loading: setProductLoading
                        })

                    }
                />
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}