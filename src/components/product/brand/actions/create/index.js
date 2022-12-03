import { useNavigate } from "react-router-dom"
import { createBrand } from "store/actions/product"
import Form from "components/utils/form"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Tabs from "components/utils/tabs"
import Info from "components/product/brand/actions/create/Info"
import SEO from "components/product/brand/actions/create/SEO"

export default function Create() {
    let navigate = useNavigate()

    const tabs = [
        {
            title: "اطلاعات کلی برند",
            render: <Info />
        },
        {
            title: "بهینه سازی موتور جستجو ",
            render: <SEO />
        }
    ]

    const onFinish = (values) => {
        createBrand({
            ...values,
            picLink: values.picLink[0].response.path
        })
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ایجاد برند جدید</h1>
            <Form onFinish={onFinish}>
                <Tabs tabs={tabs} position="top" forceRender={true} />
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}
