import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editProductAttribute, getProductsAttributeList, getProductsAttributes } from "store/actions/product"
import { PRODUCT_ATTRIBUTE as entity, PRODUCT_ATTRIBUTE_LIST as listEntity } from "tools/utils/entities"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelect from "components/utils/form/items/FormSelect"
import { FormSelectSearch } from "components/utils/form/items/FormSelectSearch"
import { FormTextArea } from "components/utils/form/items/FormTextArea"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import { ColumnGrid } from "components/utils/grid"
import Skeleton from "components/utils/skeleton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit() {
    const [parent, setParent] = useState(null)
    const { ID } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProductsAttributes({ ID })
        getProductsAttributeList({ pageSize: 10000 })
    }, [ID])

    const { dataList, loading } = useSelector(
        s => s[entity.pluralizeName]
    )

    const { dataList: groupList } = useSelector(
        s => s[listEntity.pluralizeName]
    )

    const groups = [{ text: "انتخاب کنید", value: " " }]
    for (const item of groupList) {
        groups.push({
            text: item.title,
            value: item.ID
        })
    }

    const onFinish = (values) => {
        editProductAttribute({
            ID,
            ...values
        })
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h1>ویرایش ویژگی با کد {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                    initialValues={{
                        ...dataList[0],
                        parentID: parent !== null ? parent : dataList[0].parentID
                    }}
                >
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="title"
                            label="عنوان"
                            required={true}
                        />
                        <FormSelectSearch
                            name="parentID"
                            label="گروه بالاسری"
                            onChange={(value) => setParent(value)}
                            required={true}
                            items={groups}
                        />
                        <FormSelect
                            name="necessaryForCommerceRequest"
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
                            name="selectType"
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
                            name="isActive"
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
                        />
                        {parent === " " &&
                            <FormSelect
                                name="isSiteFilter"
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
                        name="description"
                        label="توضیح کلی"
                    />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
