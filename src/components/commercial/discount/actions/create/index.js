import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProducts } from 'store/actions/product'
import { clearDiscountDraftData, getCommercialDiscountDrafts } from 'store/actions/commercial'
import Tabs from 'components/utils/tabs'
import Form from 'components/utils/form'
import { checkFilters } from 'tools/utils'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import ProductTab from 'components/commercial/discount/actions/create/ProductTab'
import OverviewTab from 'components/commercial/discount/actions/create/OverviewTab'

function Create() {

    useEffect(() => {
        clearDiscountDraftData()
    }, [])

    const draftData = useSelector(
        (s) => s.discountDraftData
    )

    const tabs = [
        {
            title: "تنظیمات",
            render: <OverviewTab />
        },
        {
            title: "محصولات ",
            render: <ProductTab />
        },
    ]

    const onFinish = (values) => {
        const serviceModel = {
            ...checkFilters({
                ...values,
                BackGroundImage: values.BackGroundImage[0].response.path,
                brandId: undefined,
                productSelect: undefined,
            }),
            Requests: [],
        }
        draftData.map((item) => serviceModel.Requests.push({ RequestID: item.requestID, Percent: item.Percent, MaxCount: item.MaxCount }))
        console.log(serviceModel)
    }

    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.brandId === allValues.brandId) {
            getProducts({ brandID: allValues.brandId })
        }
        if (changedValues.productSelect === allValues.productSelect) {
            getCommercialDiscountDrafts({ ProductID: allValues.productSelect })
        }
    }

    return (
        <div className='section-card'>
            <h1>ایجاد تخفیف جدید </h1>
            <Form
                onFinish={onFinish}
                onValuesChange={onValuesChange}
                initialValues={{
                    IsActive: true,
                    Type: 1,
                    reCharge: 0
                }}
            >
                <Tabs tabs={tabs} position="top" />
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}

export default Create