import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createProductAttribute, getProductsAttributeList } from "store/actions/product"
import { PRODUCT_ATTRIBUTE_LIST as entity } from "tools/utils/entities"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import { FormSelect } from "components/utils/form/items/FormSelect"
import FormTextArea from "components/utils/form/items/FormTextArea"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import Skeleton from "components/utils/skeleton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const [parent, setParent] = useState(" ")
    const navigate = useNavigate()

    useEffect(() => {
        getProductsAttributeList()
    }, [])

    const { dataList, loading } = useSelector(
        s => s[entity.pluralizeName]
    )

    const groups = [{ text: "انتخاب کنید", value: " " }]
    for (const item of dataList) {
        groups.push({
            text: item.title,
            value: item.ID
        })
    }

    const initialValues = {
        parentID: parent,
        NecessaryForCommerceRequest: true,
        positionType: " ",
        IsSiteFilter: true,
        IsActive: true,
        SelectType: 1
    }

    const onFinish = (values) => {
        createProductAttribute({
            ...values
        })
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h1>ایجاد ویژگی جدید</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                    initialValues={initialValues}
                >
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="Title"
                            label="عنوان"
                            required={true}
                        />
                        <FormSelect
                            name="parentID"
                            label="گروه بالاسری"
                            required={true}
                            onChange={(value) => setParent(value)}
                            items={groups}
                        />
                        <FormSelect
                            name="NecessaryForCommerceRequest"
                            label="شاخص"
                            required={true}
                            items={[
                                {
                                    text: "بله",
                                    value: true
                                },
                                {
                                    text: "خیر",
                                    value: false
                                },
                            ]}
                        />
                        <FormSelect
                            name="SelectType"
                            label="نوع نمایش"
                            required={true}
                            items={[
                                {
                                    text: "TextBox",
                                    value: 1
                                },
                                {
                                    text: "CheckBox",
                                    value: 5
                                },
                            ]}
                        />
                        <FormSelect
                            name="positionType"
                            label="جایگاه نمایش"
                            required={true}
                            items={[
                                {
                                    text: "انتخاب کنید",
                                    value: " "
                                },
                                {
                                    text: "قسمت رنگ ها",
                                    value: 1
                                },
                                {
                                    text: "قسمت ویژگی های برتر",
                                    value: 2
                                },
                                {
                                    text: "قسمت دیگر ویژگی ها",
                                    value: 3
                                },
                            ]}
                        />
                        <FormSelect
                            name="IsActive"
                            label="وضعیت"
                            required={true}
                            items={[
                                {
                                    text: "فعال",
                                    value: true
                                },
                                {
                                    text: "غیر فعال",
                                    value: false
                                },
                            ]}
                        />
                        <FormInputNumber
                            name="sort"
                            label="ترتیب نمایش"
                            required={true}
                        />
                        {parent === " " &&
                            <FormSelect
                                name="IsSiteFilter"
                                label="قابل فیلتر"
                                required={true}
                                items={[
                                    {
                                        text: "بله",
                                        value: true
                                    },
                                    {
                                        text: "خیر",
                                        value: false
                                    },
                                ]}
                            />
                        }
                    </ColumnGrid>
                    <FormTextArea
                        name="Description"
                        label="توضیح کلی"
                        required={true}
                    />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
