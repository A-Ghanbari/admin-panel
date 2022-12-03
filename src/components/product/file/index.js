import { useEffect, useState } from "react"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { useSelector } from "react-redux"
import { PRODUCT_FILE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { deleteFile, getFiles } from "store/actions/product"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Filter from "components/product/file/Filter"
import Card from "components/product/file/Card"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Popconfirm from "components/utils/popconfirm"
import Link from "components/utils/link"

export default function File() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getFiles(checkFilters({ ...filter.product.file }))
    }, [filter.product.file, reload])

    const filterChangeHandler = (values) => {
        dispatch(
            setFilter({
                ...filter,
                product: {
                    ...filter.product,
                    file: {
                        ...filter.product.file,
                        ...values,
                        pageIndex: 1,
                    },
                },
            })
        )
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(
            setFilter({
                ...filter,
                product: {
                    ...filter.product,
                    file: {
                        ...filter.product.file,
                        pageIndex: index,
                        pageSize: size,
                    },
                },
            })
        )
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "نام گروه",
            key: "productsMediaFileName",
            width: "5%",
        },
        {
            title: "کد محصول",
            key: "productID",
            width: "5%",
        },
        {
            title: "نام محصول",
            key: "productName",
            width: "10%",
        },
        {
            title: "نوع فایل",
            key: "fileType",
            width: "5%",
        },
        {
            title: "اولویت",
            key: "sort",
            width: "5%",
        },
        {
            title: "فعال",
            key: "isActive",
            width: "5%",
            render: (f) =>
                f ? (
                    <span className="approved" />
                ) : (
                    <span className="unapproved" />
                ),
        },
        {
            title: "سازنده",
            key: "userCreated",
            width: "10%",
        },
        {
            title: "تاریخ ساخت",
            key: "createdDateTime",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`}>
                        <Icon key="edit" type="edit" title="ویرایش فایل" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف فایل کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteFile({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" title="حذف فایل" />
                    </Popconfirm>
                    <a href={r.filePath} target="blank">
                        <Icon
                            key="download"
                            type="download"
                            title=" دانلود تصاویر"
                        />
                    </a>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.product.file }}
            />
            <ActionButton position="right">
                <Link to="./create">
                    <Button type="secondary-accent" label="ایجاد محتوا جدید" />
                </Link>
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
