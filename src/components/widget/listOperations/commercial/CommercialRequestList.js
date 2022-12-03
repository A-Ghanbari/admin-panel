import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import ACL from 'components/ACL'
import { getSuppliersList, getSuppliersWarehouse } from 'store/actions/commercial'
import { SUPPLIER_LIST as entity, SUPPLIER_WAREHOUSE as warehouseEntity } from "tools/utils/entities"
import { API_BASE_URL } from 'tools/shared/constants'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormSelect from 'components/utils/form/items/FormSelect'
import WidgetCard from 'components/utils/widgetCard'

function CommercialRequestList() {

    useEffect(() => {
        getSuppliersList()
        getSuppliersWarehouse({ pageSize: 10000 })
    }, [])

    const { data, loading } = useSelector(
        s => s[entity.name]
    )
    const { dataList } = useSelector(
        s => s[warehouseEntity.pluralizeName]
    )

    const suppliers = [{ text: "همه", value: " " }]
    if (data.dataList) {
        for (const item of data.dataList) {
            suppliers.push({
                text: item.fullName,
                value: item.ID,
            })
        }
    }

    const warehouse = []
    if (dataList) {
        for (const item of dataList) {
            warehouse.push({
                text: item.title,
                value: item.ID,
            })
        }
    }

    return (
        <WidgetCard
            loading={loading}
            title="لیست درخواست حواله های بازرگانی"
            des={
                <p>برای ایجاد <span className='success'>حواله </span>به صورت <span className='warning'>گروهی </span>،از این قسمت استفاده نمایید. لیست حواله ها باید در قالب یک <span className='warning'>فایل اکسل </span>در ورودی زیر وارد شود. برای دریافت فایل نمونه از لینک زیر استفاده نمایید. </p>
            }
            actions={[
                <ActionButton position="center">
                    <Button
                        type="primary-dark"
                        label="تایید"
                    />
                </ActionButton>
            ]}
        >
            <a href={`${API_BASE_URL}Content/templateExcel/test_addCommerceProductList.xlsx`} target="blank">
                <p className='accent'>دریافت فایل نمونه</p>
            </a>
            {/* Ali , Hossein , fix upload button */}
            <Button
                label="بارگذاری"
            />
            <Form>
                <FormSelect
                    label="تامین کننده"
                    items={suppliers}
                />
                <FormSelect
                    label="لیست انبار"
                    items={warehouse}
                />
            </Form>
        </WidgetCard>
    )
}

export default ACL(CommercialRequestList)
