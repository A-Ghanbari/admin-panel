import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createProduct, getGroupAttribute, getGroupColors } from 'store/actions/product'
import { clearFormStep } from 'store/actions/public'
import { checkPermission, getMediaFiles, removeAdditionalFields, setAttributesData } from 'tools/utils'
import Info from 'components/product/list/actions/create/Info'
import Specifications from 'components/product/list/actions/create/Specifications'
import Card from 'components/utils/card'
import FormStep from 'components/utils/form/FormStep'
import Colors from 'components/product/list/actions/create/Colors'
import PhotoAlbum from 'components/product/list/actions/create/PhotoAlbum'
import Attribute from 'components/product/list/actions/create/Attribute'
import Review from 'components/product/list/actions/create/Review'
import SEO from 'components/product/list/actions/create/SEO'

export default function Create() {
    const [fileType, setFileType] = useState(1)
    const [files, setFiles] = useState([])
    const navigate = useNavigate()

    const { permissions } = useSelector(
        (s) => s.user
    )

    useEffect(() => {
        clearFormStep()
    }, [])

    const items = [
        {
            title: "اطلاعات محصول",
            content: <Info />,
            permission: "policyProductOverview"
        },
        {
            title: "مشخصات",
            content: <Specifications />,
            permission: "policyProductOverview"
        },
        {
            title: "ویژگی ها",
            content: <Attribute />,
            permission: "policyProductAttribute"
        },
        {
            title: "رنگ ها",
            content: <Colors />,
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
            content: <PhotoAlbum fileType={fileType} files={files} setFiles={setFiles} />,
            permission: "policyProductAlbum"
        },
    ]

    const formStep = useSelector(
        (s) => s.formStep
    )

    const onFinish = () => {
        const fields = {
            ...formStep,
            categoryID: formStep.categoryID[formStep.categoryID.length - 1],
            attributeModels: setAttributesData(formStep),
            mediaFiles: [],
            piclinkMediaFiles: getMediaFiles(formStep.piclinkMediaFiles[0]),
            colors: [],
            FilePath: undefined,
            FileType: undefined,
            IsActive: undefined
        }

        files.map((file, index) => fields.mediaFiles.push({ ...file, sort: index }))
        formStep.colors?.map(color => (
            fields.colors.push({ ID: color })
        ))

        removeAdditionalFields(fields)
        createProduct(fields)
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

    return (
        <Card
            title={"ایجاد محصول جدید"}
        >
            <FormStep
                items={checkPermission(items, permissions)}
                onFinish={onFinish}
                onValuesChange={onValuesChange}
            />
        </Card>
    )
}
