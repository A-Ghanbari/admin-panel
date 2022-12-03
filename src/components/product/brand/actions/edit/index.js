import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editBrand, getBrands } from "store/actions/product"
import { BRAND as entity } from "tools/utils/entities"
import { checkImageUrl } from "tools/utils"
import Form from "components/utils/form"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Tabs from "components/utils/tabs"
import Info from "components/product/brand/actions/edit/Info"
import SEO from "components/product/brand/actions/edit/SEO"
import Skeleton from "components/utils/skeleton"

export default function Edit() {
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getBrands({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "اطلاعات کلی برند",
            render: <Info data={dataList[0]} />
        },
        {
            title: "بهینه سازی موتور جستجو ",
            render: <SEO />
        }
    ]

    const onFinish = (values) => {
        editBrand({
            ID,
            ...values,
            picLink: checkImageUrl(values.picLink),
        })
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ویرایش برند کد {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form onFinish={onFinish} initialValues={dataList[0]} >
                    <Tabs tabs={tabs} position="top" forceRender={true} />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
