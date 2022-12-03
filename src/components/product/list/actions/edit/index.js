import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { editProduct, getGroupAttribute, getGroupColors, getProductCart, getProducts } from 'store/actions/product'
import { clearFormStep } from 'store/actions/public'
import { checkPermission, formatQuillValue, getIds, getMediaFiles, getPhotoAlbum, removeAdditionalFields, setAttributesData, setInitialAttributes } from 'tools/utils'
import { PRODUCT as entity } from "tools/utils/entities"
import Info from 'components/product/list/actions/edit/Info'
import Specifications from 'components/product/list/actions/edit/Specifications'
import Attribute from 'components/product/list/actions/edit/Attribute'
import Colors from 'components/product/list/actions/edit/Colors'
import Review from 'components/product/list/actions/edit/Review'
import SEO from 'components/product/list/actions/edit/SEO'
import PhotoAlbum from 'components/product/list/actions/edit/PhotoAlbum'
import Cart from 'components/product/list/actions/edit/Cart'
import Card from 'components/utils/card'
import FormStep from 'components/utils/form/FormStep'

export default function Edit() {
    const { ID } = useParams()
    const [fileType, setFileType] = useState(1)
    const [files, setFiles] = useState([])
    const navigate = useNavigate()

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const { permissions } = useSelector(
        (s) => s.user
    )

    useEffect(() => {
        clearFormStep()
        getProducts({ ID })
        getGroupAttribute({ ID: dataList[0]?.categoryID })
        getGroupColors({ ID: dataList[0]?.categoryID })
        getProductCart({ ProductID: ID })
    }, [ID])

    const items = [
        {
            title: "اطلاعات محصول",
            content: dataList[0] && <Info data={dataList[0]} />,
            permission: "policyProductOverview"
        },
        {
            title: "مشخصات",
            content: <Specifications />,
            permission: "policyProductOverview"
        },
        {
            title: "ویژگی ها",
            content: <Attribute data={dataList[0]} />,
            permission: "policyProductAttribute"
        },
        {
            title: "رنگ ها",
            content: <Colors data={dataList[0]?.colors} />,
            permission: "policyProductColor"
        },
        {
            title: "نقد و بررسی",
            content: <Review />,
            permission: "policyProductDescription"
        },
        {
            title: "بهینه سازی موتور جستجو",
            content: <SEO />,
            permission: "policyProductSearch"
        },
        {
            title: "آلبوم تصاویر",
            content: <PhotoAlbum fileType={fileType} files={files} setFiles={setFiles} data={dataList[0]?.mediaFiles} />,
            permission: "policyProductAlbum"
        },
        {
            title: "سقف سبد خرید",
            content: <Cart />,
            permission: "policyBasketLimit",
            withoutForm: true
        }
    ]

    const formStep = useSelector(
        (s) => s.formStep
    )

    const onFinish = () => {
        const fields = {
            ...formStep,
            ID,
            categoryID: formStep.categoryID[formStep.categoryID.length - 1],
            attributeModels: setAttributesData(formStep),
            piclinkMediaFiles: getMediaFiles(formStep?.piclinkMediaFiles[0]),
            mediaFiles: getPhotoAlbum(files),
            colors: [],
            FilePath: undefined,
            FileType: undefined,
            IsActive: undefined,
        }

        formStep.colors?.map(color => (
            fields.colors.push({ ID: color })
        ))

        removeAdditionalFields(fields)
        editProduct(fields)
        navigate(-1)
    }

    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.categoryID !== undefined) {
            getGroupAttribute({ ID: allValues.categoryID[allValues.categoryID.length - 1] })
            getGroupColors({ ID: allValues.categoryID[allValues.categoryID.length - 1] })
        }
        if (changedValues.FileType !== undefined) {
            setFileType(allValues.FileType)
        }
        if (changedValues.FilePath !== undefined) {
            allValues.FilePath[0].response &&
                setFiles(s => [...s, ...getMediaFiles(allValues.FilePath[0], allValues)])
        }
    }

    const initialValues = {
        ...dataList[0],
        moreDescription: formatQuillValue(dataList[0]?.moreDescription),
        categoryID: getIds((dataList[0]?.categoryIDs)),
        ...setInitialAttributes(dataList[0]?.attributes),
        IsDeactive: dataList[0]?.isInactive,
        ...formStep,
        FileType: 1,
        IsActive: true,
        colors: [],
    }

    return (
        <Card
            title={`ویرایش محصول کد ${ID}`}
            loading={loading}
        >
            <FormStep
                items={checkPermission(items, permissions)}
                onFinish={onFinish}
                initialValues={initialValues}
                onValuesChange={onValuesChange}
            />
        </Card>
    )
}
