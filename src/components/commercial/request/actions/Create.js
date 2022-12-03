import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getSuppliersList, getSuppliersWarehouse } from 'store/actions/commercial'
import { SUPPLIER_LIST as entity, SUPPLIER_WAREHOUSE as warehouseEntity } from "tools/utils/entities"
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'
import Skeleton from 'components/utils/skeleton'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const [delivery, setDelivery] = useState()
    const [clearingPrice, setClearingPrice] = useState({
        clearingPriceType: 0,
        clearingPriceDay: null
    })

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

    const initialValues = {
        ...clearingPrice,
        DeliveryType: " ",
        supplierID: " "
    }

    const supplieHandler = (value) => {
        const supplierInfo = data?.dataList.filter((item) => item.ID === value)
        setClearingPrice({
            clearingPriceType: supplierInfo[0].clearingPriceType,
            clearingPriceDay: supplierInfo[0].clearingPriceDay
        })
    }

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <div className='section-card'>
            <h1>ایجاد درخواست جدید</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                    initialValues={initialValues}
                >
                    <FormUpload />
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="title"
                            label="عنوان"
                        />
                        <FormSelectSearch
                            name="supplierID"
                            label="تامین کننده"
                            items={suppliers}
                            onChange={supplieHandler}
                        />
                        <FormInputNumber
                            name="referenceCode"
                            label="کد مرجع"
                        />
                        <FormInput
                            name="preFactorId"
                            label="پیش فاکتور"
                        />
                        <FormInput
                            name="factorId"
                            label="شماره فاکتور"
                        />
                    </ColumnGrid>
                    <ColumnGrid col={fieldCol}>
                        <FormSelect
                            name="DeliveryType"
                            label="نوع تحویل"
                            onChange={(value) => setDelivery(value)}
                            items={[
                                {
                                    text: "انتخاب کنید",
                                    value: " ",
                                },
                                {
                                    text: "درب انبار",
                                    value: 1,
                                },
                                {
                                    text: "نفیس اکسپرس",
                                    value: 2,
                                },
                            ]}
                        />
                        {delivery === 1 &&
                            <FormSelect
                                name="supplierWarehouseID"
                                label="انبار"
                                items={warehouse}
                            />
                        }
                    </ColumnGrid>
                    <ColumnGrid col={fieldCol}>
                        <FormSelect
                            name="clearingPriceType"
                            label="نوع تسویه"
                            items={[
                                {
                                    text: "نقدی",
                                    value: 0,
                                },
                                {
                                    text: "اعتباری",
                                    value: 1,
                                },
                                {
                                    text: "امانی",
                                    value: 2,
                                },
                            ]}
                        />
                        <FormInput
                            name="clearingPriceDay"
                            label="مدت تسویه"
                        />
                    </ColumnGrid>
                    <FormTextArea
                        name="Description"
                        label="توضیح کلی"
                    />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
