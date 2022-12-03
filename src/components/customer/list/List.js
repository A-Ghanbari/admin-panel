import { useEffect, useState } from "react"
import { editCustomerPassword, getCustomerList } from "store/actions/customer"
import { CUSTOMER as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"
import ListComposed from "components/utils/listComposed"
import Card from "components/customer/list/Card"
import Popconfirm from "components/utils/popconfirm"
import Filter from "components/customer/list/Filter"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import "components/customer/customer.scss"

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
            width: "5%",
        }, {
            title: "نام",
            key: "firstName",
            width: "5%",
        }, {
            title: "نام خانوادگی",
            key: "lastName",
            width: "10%",
        }, {
            title: "جنسیت",
            key: "gender",
            width: "10%",
        }, {
            title: "تاریخ عضویت",
            key: "registerDate",
            width: "5%",
        }, {
            title: "وضعیت",
            key: "isActive",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./detail/${r.userName}`} title="جزییات">
                        <Icon key="eye" type="eye" />
                    </Link>
                    <Link
                        to={`./edit/${r.userName}`}
                        title="ویرایش"
                        permission="editMarketer"
                    >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Link
                        to={`./wallet/${r.userName}`}
                        title="کیف پول"
                        permission="customerShowWalletPermission"
                    >
                        <Icon key="wallet" type="wallet" />
                    </Link>
                    <Popconfirm
                        title={`آیا از تغییر کلمه عبور کاربر "${r.userName}" اطمینان دارید؟`}
                        onConfirm={() => editCustomerPassword({ userName: r.userName })}
                        permission="changeMarketerPassword"
                    >
                        <Icon title="تغییر رمز عبور" key="lock" type='lock' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getCustomerList(checkFilters({ ...filter.customer.user }))
    }, [filter.customer.user, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            customer: {
                ...filter.customer,
                user: {
                    ...filter.customer.user,
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
            customer: {
                ...filter.customer,
                user: {
                    ...filter.customer.user,
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
                initialValues={{ ...filter.customer.user }}
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