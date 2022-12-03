import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { editProductsCommerceCount, getProductCommerces } from "store/actions/product"
import { PRODUCT_COMMERCE as entity } from "tools/utils/entities"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Skeleton from "components/utils/skeleton"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelect from "components/utils/form/items/FormSelect"
import FormTextArea from "components/utils/form/items/FormTextArea"
import Icon from "components/utils/field/Icon"
import Form from "components/utils/form"

export default function ChangeCount() {
    const { ID } = useParams()
    let navigate = useNavigate()
    const { state } = useLocation()

    useEffect(() => {
        getProductCommerces({ ProductID: ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1
        },
        {
            title: "کد حواله",
            key: "commerceID",
            width: "5%",
        },
        {
            title: "گروه حواله",
            key: "commerceCategoryName",
            width: "10%",
        },
        {
            title: "تامین کننده",
            key: "supplierName",
            width: "10%",
        },
        {
            title: "تاریخ ایجاد",
            key: "commerceCreatedDateTime",
            width: "10%",
        },
        {
            title: "موجودی",
            key: "availableCount",
            width: "5%",
        },
        {
            title: "ویرایش ",
            render: (r, f) =>
                <Form
                    className="change-count-form"
                    initialValues={{ ...r, type: " " }}
                    onFinish={onFinish}
                >
                    <FormInputNumber
                        className="hidden"
                        name="commerceID"
                    />
                    <FormInputNumber
                        name="changeCount"
                        label="ویرایش موجودی"
                        max={r.availableCount}
                    />
                    <FormSelect
                        name="type"
                        label="علت"
                        items={[
                            {
                                text: 'انتخاب کنید',
                                value: " ",
                            },
                            {
                                text: 'تاریخ انقضا',
                                value: 10,
                            },
                            {
                                text: 'انبار مفقودی',
                                value: 9,
                            },
                            {
                                text: 'انبار ضایعات',
                                value: 3,
                            },
                        ]}
                    />
                    <FormTextArea
                        name="description"
                        label="توضیحات"

                    />
                    <Button
                        name="submit"
                        label={<Icon key="edit" type="edit" title="ویرایش" />}
                        htmlType="submit"
                    />
                </Form>,
            width: "10%",
        },
    ]

    const onFinish = (values) => {
        editProductsCommerceCount(values)
    }

    return (
        <div className="section-card">
            <h1>تغییر موجودی {state.name}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <div className="height-scroll">
                    <TableWithoutEntity
                        dataSource={dataList}
                        columns={columns}
                    />
                </div>
            </Skeleton>
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="انصراف"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}
