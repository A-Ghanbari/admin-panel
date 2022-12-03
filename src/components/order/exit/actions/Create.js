import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { createOrderWarehouseExitRecord, orderWarehouseExitLastOrder } from 'store/actions/order'
import { getBrandWithProduct } from 'store/actions/product'
import {
    ORDER_WAREHOUSE_EXIT_LAST_ORDER as lastOrderEntity,
    BRAND_WITH_PRODUCT_LIST as brandWithProductEntity,
} from "tools/utils/entities"
import { checkFilters } from 'tools/utils'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import FormInput from 'components/utils/form/items/FormInput'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import { postList } from 'tools/shared/constants'
import Radio from 'components/utils/field/radio'
import { FormDatePicker } from 'components/utils/form/items/FormDatePicker'
import { FormInputNumber } from 'components/utils/form/items/FormInputNumber'
import MultiSelectProduct from 'components/utils/multiSelectProduct/SelectWithTransfer'
import MultiSelectProvince from 'components/utils/multiSelectProvince/SelectWithTransfer'
import Collapse from 'components/utils/collapse'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

export default function Create() {
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
    const [recordType, setRecordType] = useState(1)
    const [productSelect, setProductSelect] = useState([])
    const [productFilterType, setProductFilterType] = useState(true)

    const [provinceSelect, setProvinceSelect] = useState([])
    const [provinceFilterType, setProvinceFilterType] = useState(true)
    let navigate = useNavigate()

    const { data: lastOrder } = useSelector(
        (s) => s[lastOrderEntity.name]
    )

    const { data: branWithProduct, loading } = useSelector(
        (s) => s[brandWithProductEntity.name]
    )

    useEffect(() => {
        orderWarehouseExitLastOrder()
        if (branWithProduct.length === 0) getBrandWithProduct()
    }, [])

    const onFinish = (values) => {
        let cleanFormat = checkFilters({ ...values })
        let serviceField = {
            ...cleanFormat,
            proFilterWareHouse: {}
        }

        if (productSelect.length) {
            if (productFilterType) {
                serviceField.proFilterWareHouse.onlyThisProductIDs = productSelect
            } else {
                serviceField.proFilterWareHouse.exceptThisProductIDs = productSelect
            }
        }

        if (provinceSelect.length) {
            if (provinceFilterType) {
                serviceField.proFilterWareHouse.onlyThisProvinceIDs = provinceSelect
            } else {
                serviceField.proFilterWareHouse.exceptThisProvinceIDs = provinceSelect
            }
        }
        createOrderWarehouseExitRecord(serviceField)
        navigate(-1)
    }

    return (
        <div className="section-card">
            <h3>برای ورود سفارش‌ها به صف خروج از انبار،<span className='accent bold'> تاریخ </span>و<span className='accent bold'> تعداد سفارش </span>را انتخاب کنید. به تعداد انتخاب‌شده از <span className='warning bold'>قدیمی‌ترین سفارش‌های تایید‌شده</span>، به صف خروج از انبار افزوده خواهد‌شد.</h3>
            {(lastOrder.ID) ?
                <h3>کد آخرین سفارش بارگیری نشده <span className='accent bold'>{lastOrder.ID}</span> و مربوط به <span className='accent bold'>{lastOrder.orderDateTime}</span> است.</h3>
                : <h3>سفارش بارگیری نشده ای یافت نشد.</h3>
            }
            <h2>نوع رکورد :</h2>
            <Radio
                name='recordType'
                label="نوع رکورد"
                onChange={({ target: { value } }) => setRecordType(value)}
                value={recordType}
                options={[
                    {
                        value: 1,
                        label: "براساس تاریخ",
                    }, {
                        value: 2,
                        label: "براساس کد سفارش"
                    }
                ]}
            />
            <Form
                name="EditForm"
                onFinish={onFinish}
                autoComplete="off"
                initialValues={{
                    pageSize: 200,
                    countProductsRecords: 0,
                    postCompanyID: "1"
                }}
            >
                {(recordType === 1) ?
                    <Row className="edit-form">
                        <ColumnGrid col={fieldCol}>
                            <FormSelect
                                name="postCompanyID"
                                label="پست"
                                items={[
                                    ...postList
                                ]}
                                required={true}
                            />
                            <FormDatePicker
                                name="orderDateFrom"
                                label="تاریخ از"
                                required={true}
                            />
                            <FormDatePicker
                                name="orderDateTo"
                                label="تاریخ تا"
                                required={true}
                            />
                            <FormInputNumber
                                name="pageSize"
                                label="تعداد"
                                min={1} max={200}
                            />
                            <FormInputNumber
                                name="countProductsRecords"
                                label="تعداد رکورد اقلام در سفارش"
                                min={0} max={200}
                            />
                        </ColumnGrid>
                        <Collapse title="فیلتر محصول">
                            <Radio
                                name='productFilterType'
                                label="نوع فیلتر کالاها"
                                onChange={({ target: { value } }) => setProductFilterType(value)}
                                value={productFilterType}
                                options={[
                                    {
                                        value: true,
                                        label: "شامل کالاها",
                                    }, {
                                        value: false,
                                        label: "فاقد کالاها"
                                    }
                                ]}
                            />
                            <MultiSelectProduct value={productSelect} onChange={setProductSelect} />
                        </Collapse>
                        <Collapse title="فیلتر استان">
                            <Radio
                                name='productFilterType'
                                label="نوع فیلتر استان"
                                onChange={({ target: { value } }) => setProvinceFilterType(value)}
                                value={provinceFilterType}
                                options={[
                                    {
                                        value: true,
                                        label: "شامل استان",
                                    }, {
                                        value: false,
                                        label: "فاقد استان"
                                    }
                                ]}
                            />
                            <MultiSelectProvince value={provinceSelect} onChange={setProvinceSelect} />
                        </Collapse>

                    </Row>
                    :
                    <Row className="edit-form">
                        <ColumnGrid col={fieldCol}>
                            <FormInput
                                name='orderFrom'
                                label='شماره سفارش'
                                required={true}
                            />
                        </ColumnGrid>
                    </Row>
                }
                <ButtonWithConfirm loading={loading} />
            </Form>
        </div>
    )
}