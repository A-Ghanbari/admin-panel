import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { LANDING_PAGE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { getLandingPageList, deleteLandingPage } from "store/actions/landingPage"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Card from "components/landingPage/list/Card"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import UploadExcel from "components/landingPage/list/actions/UploadExcel"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const [excelVisible, setExcelVisible] = useState(false);
    const [excelData, setExcelData] = useState();

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "عنوان",
            key: "title",
            width: "5%",
        },
        {
            title: "نام",
            key: "fullName",
            width: "10%",
        },
        {
            title: "گروه",
            key: "categoryName",
            width: "10%",
        },
        {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        },
        {
            title: "تاریخ انتشار",
            key: "publishDate",
            width: "10%",
        },
        {
            title: "توضیحات",
            key: "description",
            width: "10%",
        },
        {
            title: "عنوان فیسبوک",
            key: "facebookTitle",
            width: "10%",
        },
        {
            title: "عنوان توییتر",
            key: "twitterTitle",
            width: "10%",
        },
        {
            title: "وضعیت",
            key: "statusCode",
            width: "5%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon
                        title="آپلود"
                        key="excelExport"
                        type="excelExport"
                        onClick={() => {
                            setExcelVisible(!excelVisible);
                            setExcelData(r.ID);
                        }}
                    />
                    <Link
                        to={`./edit/${r.ID}`}
                        title="ویرایش"
                    >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف لندینگ  "${r.title} "اطمینان دارید؟`}
                        onConfirm={() => {
                            deleteLandingPage({ ID: r.ID })
                            // .then(
                            //     res => res.exceptionID === 0 &&  getLandingPageList(checkFilters({ ...filter.landingPage.list }))//getDeleteListItem(entity.pluralizeName, r.ID)
                            // )
                        }}
                    >
                        <Icon key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getLandingPageList(checkFilters({ ...filter.landingPage.list }))
    }, [filter.landingPage.list, reload])

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            sepidarInvoice: {
                ...filter.landingPage.list,
                pageIndex: index,
                pageSize: size,
            }
        }))
    }

    return (
        <div>
            {excelVisible && (
                <UploadExcel
                    show={excelVisible}
                    change={setExcelVisible}
                    ID={excelData}
                />
            )}
            <ActionButton position="right">
                <Link to="./create">
                    <Button
                        type="secondary-accent"
                        label="ایجاد لندینگ جدید"
                    />
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