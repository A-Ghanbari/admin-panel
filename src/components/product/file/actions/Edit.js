import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editFile, getFiles, getProducts } from "store/actions/product"
import {
    PRODUCT_FILE as entity,
    BRAND_LIST as brandListEntity,
    PRODUCT as productEntity
} from "tools/utils/entities"
import Form from "components/utils/form"
import { checkImageUrl, sortList } from "tools/utils"
import Skeleton from "components/utils/skeleton"
import { ColumnGrid } from "components/utils/grid"
import FormUpload from "components/utils/form/items/FormUpload"
import { FormSelect } from "components/utils/form/items/FormSelect"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

export default function Edit() {
    const { ID } = useParams()
    const navigate = useNavigate()

    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const { dataList, loading } = useSelector((s) => s[entity.pluralizeName])

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

    useEffect(() => {
        getFiles({ ID })
        // getProducts({brandID: dataList[0].brandID})
    }, [ID])

    const onFinish = (values) => {
        editFile({
            ID,
            ...values,
            filePath: checkImageUrl(values.filePath),
        })
        navigate(-1)
    }

    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.brandID !== undefined) {
            getProducts({ brandID: allValues.brandID })
        }
    }

    return (
        <div className="section-card">
            <h1>???????????? ???????? ???? {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                    onValuesChange={onValuesChange}
                    initialValues={dataList[0]}
                >
                    <h4>???????????????? ?????????? :</h4>
                    <FormUpload
                        name="filePath"
                        label="??????????"
                        maxCount={1}
                        defaultFileList={[
                            {
                                status: "done",
                                url: dataList[0]?.filePath,
                            },
                        ]}
                    />
                    <ColumnGrid col={fieldCol}>
                        <FormSelectSearch
                            label="???????? "
                            name="brandID"
                            items={brands}
                            required={true}
                        />
                        <FormSelectSearch
                            label="??????????????"
                            name="productID"
                            items={products}
                            required={true}
                        />
                        <FormSelect
                            name="productsMediaFileID"
                            label="???????? ????????"
                            required={true}
                            items={[
                                {
                                    text: "?????????? ???????? ??????????",
                                    value: 3,
                                },
                                {
                                    text: "?????? ??????????",
                                    value: 7,
                                },
                            ]}
                        />
                        <FormSelect
                            name="fileType"
                            label="?????? ????????"
                            required={true}
                            items={[
                                {
                                    text: "??????",
                                    value: 1,
                                },
                                {
                                    text: "????????",
                                    value: 2,
                                },
                                {
                                    text: "????????????????",
                                    value: 3,
                                },
                            ]}
                        />
                        <FormInputNumber
                            name="sort"
                            label="????????????"
                            required={true}
                        />
                        <FormSelect
                            name="isActive"
                            label="??????????"
                            required={true}
                            items={[
                                {
                                    text: "????????",
                                    value: true,
                                },
                                {
                                    text: "??????????????",
                                    value: false,
                                },
                            ]}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm loading={loading} />
                </Form>
            </Skeleton>
        </div>
    )
}
