import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { PRODUCT as entity } from "tools/utils/entities"
import { editProductWarehouse, getProducts } from 'store/actions/product'
import Skeleton from 'components/utils/skeleton'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import Form from 'components/utils/form'
import Divider from 'components/utils/divider'
import BarcodeForm from 'components/product/list/actions/warehouse/BarcodeForm'
import WarehoiuseForm from 'components/product/list/actions/warehouse/WarehoiuseForm'

function Warehouse() {
    const { ID } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProducts({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const onFinish = (values) => {
        editProductWarehouse({ ...values, ID })
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ویرایش محصول کد {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    initialValues={{
                        barcodes: dataList[0]?.barcodes,
                        ServiceGarrantyOption: dataList[0]?.ServiceGarrantyOption
                    }}
                    onFinish={onFinish}
                >
                    <Divider permission="policyProductWarehouseService">انبار خدمات</Divider>
                    <WarehoiuseForm />
                    <Divider permission="policyProductBarcode">بارکد</Divider>
                    <BarcodeForm />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}

export default Warehouse