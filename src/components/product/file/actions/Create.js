import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { getProducts, createFile } from "store/actions/product"
import { BRAND_LIST as brandListEntity, PRODUCT as productEntity } from "tools/utils/entities"
import { sortList } from "tools/utils"
import Form from "components/utils/form"
import { ColumnGrid } from "components/utils/grid"
import FormSelect from "components/utils/form/items/FormSelect"
import FormUpload from "components/utils/form/items/FormUpload"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8 }
export default function Create() {
    const navigate = useNavigate()

    const { dataList: brandList } = useSelector(
        (s) => s[brandListEntity.pluralizeName]
    )

    const { dataList: productList } = useSelector(
        (s) => s[productEntity.pluralizeName]
    )

    const brands = []
    for (const item of sortList(brandList)) {
        brands.push({
            text: item.name,
            value: item.ID,
        })
    }

    const products = []
    for (const item of productList) {
        products.push({
            text: item.productName,
            value: item.ID,
        })
    }

    const onFinish = (values) => {
        createFile({
            ...values,
            FilePath: values.FilePath[0].response.path,
        })
        navigate(-1)
    }

    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.brandID !== undefined) {
            getProducts({ brandID: allValues.brandID })
        }
    }

    const initialValues = {
        FileType: 1,
        IsActive: true,
        ProductsMediaFileID: 3,
    }

    return (
        <div className="form-card">
            <h1>ایجاد محتوا جدید</h1>
            <Form onFinish={onFinish} initialValues={initialValues} onValuesChange={onValuesChange} >
                <h4>بارگذاری تصویر :</h4>
                <FormUpload
                    name="FilePath"
                    label="تصویر"
                    maxCount={1}
                    required={true}
                />
                <ColumnGrid col={fieldCol}>
                    <FormSelectSearch
                        label="برند "
                        name="brandID"
                        items={brands}
                        required={true}
                    />
                    <FormSelectSearch
                        label="محصولات"
                        name="ProductID"
                        items={products}
                        required={true}
                    />
                    <FormSelect
                        name="ProductsMediaFileID"
                        label="گروه فایل"
                        required={true}
                        items={[
                            {
                                text: "تصویر اصلی محصول",
                                value: 3,
                            },
                            {
                                text: "عکس محصول",
                                value: 7,
                            },
                        ]}
                    />
                    <FormSelect
                        name="FileType"
                        label="نوع فایل"
                        required={true}
                        items={[
                            {
                                text: "عکس",
                                value: 1,
                            },
                            {
                                text: "فیلم",
                                value: 2,
                            },
                            {
                                text: "داکیومنت",
                                value: 3,
                            },
                        ]}
                    />
                    <FormInputNumber
                        name="Sort"
                        label="اولویت"
                        required={true}
                    />
                    <FormSelect
                        name="IsActive"
                        label="وضعیت"
                        required={true}
                        items={[
                            {
                                text: "فعال",
                                value: true,
                            },
                            {
                                text: "غیرفعال",
                                value: false,
                            },
                        ]}
                    />
                </ColumnGrid>
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}
