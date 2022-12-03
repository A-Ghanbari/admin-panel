import { useEffect, useState } from "react"
import { ROLE_USER as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { getRoleUser } from "store/actions/role"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Filter from "components/role/user/Filter"
import Card from "components/role/user/Card"
import Link from "components/utils/link"

export default function List() {
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
            title: "نام کاربری",
            key: "userName",
            width: "10%",
        }, {
            title: "عکس",
            key: "photo",
            width: "5%",
            render: (f, r) => (
                <img src={f} width="32" height="32" />
            ),
        }, {
            title: "نام",
            key: "firstName",
            width: "10%",
        }, {
            title: "نام خانوادگی",
            key: "lastName",
            width: "10%",
        }, {
            title: "نقش",
            key: "roleName",
            width: "10%",
        }, {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./detail/${r.ID}`} title="جزئیات کاربر" >
                        <Icon key="eye" type="eye" />
                    </Link>
                    <Link to={`./edit/${r.ID}`} title="ویرایش کاربر" >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Link to={`./change-password/${r.userName}`} title="تغییر کلمه عبور" >
                        <Icon key="lock" type="lock" />
                    </Link>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getRoleUser(checkFilters({ ...filter.role.user }))
    }, [filter.role.user, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            role: {
                ...filter.role,
                user: {
                    ...filter.role.user,
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
            role: {
                ...filter.role,
                user: {
                    ...filter.role.user,
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
                initialValues={{ ...filter.role.user }}
            />
            <ActionButton position="right">
                <Link to="./create/">
                    <Button
                        type="secondary-accent"
                        label="ایجاد کاربر جدید"
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