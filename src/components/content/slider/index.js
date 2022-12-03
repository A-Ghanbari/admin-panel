import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { deleteContentSlider, getContentSlider } from "store/actions/content"
import { CONTENT_SLIDER as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, gregorianToJalali } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Card from "components/content/slider/Card"
import Filter from "components/content/slider/Filter"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

export default function Slider() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "عنوان",
            key: "title",
            width: "5%",
        }, {
            title: "نوع",
            key: "typeName",
            width: "5%",
        }, {
            title: "فعال",
            key: "isActive",
            width: "5%",
            render: (f) => f ? <span className="approved" /> : <span className="unapproved" />
        }, {
            title: "تاریخ انتشار ",
            key: "publishDate",
            width: "10%",
        }, {
            title: "تاریخ ایجاد ",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    {r.fromExcel &&
                        <Link to={`./productsExcel/${r.ID}`} state={{ name: r.title }} title="آپلود اکسل"><Icon key="excelExport" type='excelExport' /></Link>
                    }
                    <Link to={`./edit/${r.ID}`} title="ویرایش"><Icon key="edit" type='edit' /></Link>
                    <Popconfirm
                        title={`آیا از حذف اسلایدر "${r.title}" اطمینان دارید؟`}
                        onConfirm={() => deleteContentSlider({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getContentSlider({ ...filter.content.slider })
    }, [filter.content.slider, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            content: {
                ...filter.content,
                slider: checkFilters({
                    ...filter.content.slider,
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
                slider: {
                    ...filter.content.slider,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{
                    ...filter.content.slider,
                    publishDateFrom: gregorianToJalali(filter.content.slider.publishDateFrom),
                    publishDateTo: gregorianToJalali(filter.content.slider.publishDateTo)
                }}
            />
            <ActionButton position="right">
                <Link to='./create'>
                    <Button
                        type="secondary-accent"
                        label="ایجاد اسلایدر"
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