import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { deletePostCompanies, getPostCompanies } from "store/actions/post"
import { POST_COMPANY as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters, } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Card from "components/post/company/Card"
import Filter from "components/post/company/Filter"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const [province, setProvince] = useState({
        provinceID: " ",
        cityID: " ",
    })

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام استان",
            key: "provinceName",
            width: "5%",
        }, {
            title: "نام شهر",
            key: "cityName",
            width: "5%",
        }, {
            title: "کد استان",
            key: "provinceCode",
            width: "10%",
        }, {
            title: "کد شهر",
            key: "cityCode",
            width: "10%",
        }, {
            title: "نوع پست",
            key: "postOfficeName",
            width: "10%",
        }, {
            title: "فعال",
            key: "isActive",
            width: "5%",
            render: (f, r) => (
                f ? <span className="approved" title="تایید شده" /> : <span className="unapproved" title="در انتظار تایید" />
            )
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link
                        to={`./edit/${r.ID}`}
                        title="ویرایش"
                    >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف شهر کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deletePostCompanies({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getPostCompanies(checkFilters({ ...filter.post.company }))
    }, [filter.post.company, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            post: {
                ...filter.post,
                company: {
                    ...filter.post.company,
                    ...province,
                    ...values,
                    provinceAndCity: undefined,
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
            post: {
                ...filter.post,
                company: {
                    ...filter.post.company,
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
                initialValues={{ ...filter.post.company }}
                province={province}
                setProvince={setProvince}
            />
            <ActionButton position="right">
                <Link to={'./create'}>
                    <Button
                        type="secondary-accent"
                        label="شهر جدید"
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