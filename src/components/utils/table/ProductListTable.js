import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getProducts } from "store/actions/product"
import {
    PRODUCT as entity,
    BRAND_LIST as brandListEntity,
    GROUP_LIST as groupListEntity,
} from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { sortList } from "tools/utils"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid } from "components/utils/grid"
import Pagination from "components/utils/pagination"
import Table from "components/utils/table"
import ActionButton from "components/utils/actionsButton"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import Divider from "components/utils/divider"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function ProductListTable({ ...props }) {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const [filter, setFilter] = useState({
        pageIndex: 1,
        pageSize: PAGE_SIZE
    })

    const { dataList: brandList } = useSelector(
        (s) => s[brandListEntity.pluralizeName]
    )
    const { dataList: groupList } = useSelector(
        (s) => s[groupListEntity.pluralizeName]
    )

    const brands = []
    const groups = []

    for (const item of sortList(brandList)) {
        brands.push({
            text: item.name,
            value: item.ID
        })
    }

    for (const item of sortList(groupList)) {
        groups.push({
            text: item.name,
            value: item.ID
        })
    }

    useEffect(() => {
        getProducts({ ...filter })
    }, [filter])

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "کد محصول",
            key: "ID",
            width: "20%",
        }, {
            title: "نام محصول",
            key: "productName",
            width: "70%",
        }
    ]

    const filterChangeHandler = (values) => {
        setFilter({
            ...filter,
            ...values,
            pageIndex: 1
        })
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        setFilter({
            ...filter,
            pageIndex: index,
            pageSize: size,
        })
    }

    return (
        <>
            <Divider>فیلتر</Divider>
            <Form onFinish={filterChangeHandler}>
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="ID"
                        label="کد محصول"
                    />
                    <FormInput
                        name="productName"
                        label="نام محصول"
                    />
                    <FormSelectSearch
                        name="brandID"
                        label="برند"
                        items={brands}
                    />
                    <FormSelectSearch
                        name="categoryID"
                        label="گروه"
                        items={groups}
                    />
                </ColumnGrid>
                <ActionButton position="center">
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </ActionButton>
            </Form>
            <Pagination entity={entity} onChange={paginationChangeHandler} />
            <Table
                columns={columns}
                entity={entity}
                {...props}
            />
            <Pagination entity={entity} onChange={paginationChangeHandler} />
        </>
    )
}
