import { useNavigate } from 'react-router-dom'
import { deleteCommercialDiscountProduct, editCommercialDiscountProduct } from 'store/actions/commercial'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Icon from 'components/utils/field/Icon'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'
import Form from 'components/utils/form'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import Popconfirm from 'components/utils/popconfirm'

export default function Product({ data }) {
    const navigate = useNavigate()

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام محصول",
            key: "productName",
            width: "10%",
        }, {
            title: "تامین کننده",
            key: "supplierName",
            width: "5%",
        }, {
            title: "انبار",
            key: "supplierWarehouseName",
            width: "5%",
        }, {
            title: "درصد",
            key: "percent",
            width: "5%",
        }, {
            title: "تعداد",
            key: "maxCount",
            width: "10%",
        }, {
            title: "ترتیب",
            width: "10%",
            render: (r, f) =>
                <Form
                    className="change-count-form"
                    initialValues={r}
                    onFinish={onFinish}
                >
                    <FormInputNumber
                        className="hidden"
                        name="ID"
                    />
                    <FormInputNumber
                        name="sort"
                        label="ترتیب"
                        max={r.availableCount}
                    />
                    <Button
                        name="submit"
                        label={<Icon key="edit" type="edit" title="ویرایش" />}
                        htmlType="submit"
                    />
                </Form>,
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف محصول کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteCommercialDiscountProduct({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    const onFinish = (values) => {
        editCommercialDiscountProduct(values)
    }
    return (
        <>
            <div className='discount-product-list'>
                <TableWithoutEntity
                    columns={columns}
                    dataSource={data}
                />
            </div>
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="انصراف"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </>
    )
}
