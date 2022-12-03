import { useEffect, useState } from "react"
import { CONTACT_US_MESSAGE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import { getContactUsMessages } from "store/actions/content"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Detail from "components/content/contactUs/actions/Detail"
import Card from "components/content/contactUs/Card"
import Filter from "components/content/contactUs/Filter"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"

export default function ContactUs() {
    const [detailVisible, setDetailVisible] = useState(false)
    const [detailData, setDetailData] = useState({})

    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const filter = useSelector(
        (s) => s.filter
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "نام",
            key: "fullName",
            width: "5%",
        },
        {
            title: "ایمیل",
            key: "email",
            width: "5%",
        },
        {
            title: "شماره همراه",
            key: "cell",
            width: "5%",
        },
        {
            title: "عنوان",
            key: "title",
            width: "10%",
        },
        {
            title: "تاریخ ارسال ",
            key: "createdDateTime",
            width: "10%",
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon title="جزییات" key="eye" type='eye'
                        onClick={() => {
                            setDetailVisible(!detailVisible)
                            setDetailData({ ID: r.ID })
                        }} />
                </div>
            ),
        },
    ]

    useEffect(() => {
        getContactUsMessages({ ...filter.content.contactUs })
    }, [filter.content.contactUs])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            content: {
                ...filter.content,
                contactUs: checkFilters({
                    ...filter.content.contactUs,
                    ...values,
                    pageIndex: 1
                })
            }
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            content: {
                ...filter.content,
                contactUs: {
                    ...filter.content.contactUs,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    return (
        <div>
            {detailVisible && <Detail show={detailVisible} change={setDetailVisible} ID={detailData.ID} />}
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.content.contactUs,
                    createdDateFrom: gregorianToJalali(filter.content.contactUs.createdDateFrom),
                    createdDateTo: gregorianToJalali(filter.content.contactUs.createdDateTo)
                }}
            />
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}