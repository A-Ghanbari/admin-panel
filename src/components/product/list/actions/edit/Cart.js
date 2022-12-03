import { useSelector } from "react-redux"
import { PRODUCT_CART as entity } from "tools/utils/entities"
import { setProductMaxCart } from "store/actions/product"
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'
import Button from "components/utils/field/button"
import Icon from "components/utils/field/Icon"
import Form from "components/utils/form"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import Skeleton from "components/utils/skeleton"

export default function Cart() {

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1
        }, {
            title: " کد حواله",
            key: "commerceID",
            width: "5%",
        }, {
            title: "گروه حواله",
            key: "commerceCategoryName",
            width: "10%",
        }, {
            title: "تامین کننده",
            key: "supplierName",
            width: "10%",
        }, {
            title: "تاریخ ایجاد",
            key: "commerceCreatedDateTime",
            width: "10%",
        }, {
            title: "موجودی",
            key: "availableCount",
            width: "5%",
        }, {
            title: "سقف سبد خرید",
            key: "maxCountInBasket",
            width: "10%",
            render: (r, f) =>
                <Form className="change-count-form" onFinish={onFinish} initialValues={f}>
                    <FormInputNumber
                        name="MaxCountInBasket"
                        label="سقف سبد خرید"
                        max={f.availableCount}
                    />
                    <FormInputNumber
                        className="hidden"
                        name="commerceID"
                    />
                    <Button
                        name="submit"
                        label={<Icon key="edit" type="edit" title="ویرایش" />}
                        htmlType="submit"
                    />
                </Form>,
        },
    ]

    const onFinish = (values) => {
        setProductMaxCart(values)
    }

    return (
        <Skeleton
            avatar
            active
            loading={loading}
        >
            <h1>سقف سبد خرید</h1>
            <TableWithoutEntity
                columns={columns}
                dataSource={dataList}
            />
        </Skeleton>
    )
}
