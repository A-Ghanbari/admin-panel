import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { dispatch } from "store"
import { getCustomerList } from "store/actions/customer"
import { setFilter } from "store/actions/filter"
import { createDiscountCustomer } from "store/actions/marketing"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { CUSTOMER as entity } from "tools/utils/entities"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid } from "components/utils/grid"
import Pagination from "components/utils/pagination"
import Table from "components/utils/table"
import ActionButton from "components/utils/actionsButton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const [users, setUsers] = useState([])
    const { ID } = useParams()

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getCustomerList(checkFilters({ ...filter.marketing.customerDiscount }))
    }, [filter.marketing.customerDiscount, reload])

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام کاربری",
            key: "userName",
            width: "30%",
        }, {
            title: "نام",
            key: "firstName",
            width: "30%",
            render: (r, f) => `${r} ${f.lastName}`
        }, {
            title: "جنسیت",
            key: "gender",
            width: "30%",
        }
    ]

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            marketing: {
                ...filter.marketing,
                customerDiscount: {
                    ...filter.marketing.customerDiscount,
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
            marketing: {
                ...filter.marketing,
                customerDiscount: {
                    ...filter.marketing.customerDiscount,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            const rows = []
            selectedRows.map(row => (
                rows.push(row.userName)
            ))
            setUsers(rows)
        }
    }

    return (
        <div>
            <Button
                type="primary-dark"
                label="ایجاد"
                onClick={() => createDiscountCustomer({
                    BasicConditionID: ID,
                    customers: users
                })}
            />
            <Form onFinish={filterChangeHandler}>
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        label="نام کاربری"
                        name="userName"
                    />
                    <ActionButton>
                        <Button
                            htmlType="submit"
                            label="جستجو"
                        />
                        <Button
                            type="secondary-accent"
                            label="همه"
                            onClick={() => getCustomerList({
                                pageIndex: 1,
                                pageSize: PAGE_SIZE
                            })}
                        />
                    </ActionButton>
                </ColumnGrid>
            </Form>
            <Pagination entity={entity} onChange={paginationChangeHandler} />
            <Table
                columns={columns}
                entity={entity}
                rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                }}
            />
            <Pagination entity={entity} onChange={paginationChangeHandler} />
        </div>
    )
}
