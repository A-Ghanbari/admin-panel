import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createGroup } from "store/actions/product"
import Form from "components/utils/form"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Tabs from "components/utils/tabs"
import Info from "components/product/group/actions/create/Info"
import SEO from "components/product/group/actions/create/SEO"

export default function Create() {
    const [groupValue, setGroupValue] = useState(null)
    let navigate = useNavigate()

    const tabs = [
        {
            title: "اطلاعات کلی گروه",
            render: <Info groupValue={groupValue} setGroupValue={setGroupValue} />
        },
        {
            title: "بهینه سازی موتور جستجو ",
            render: <SEO />
        }
    ]

    const onFinish = (values) => {
        createGroup({
            ...values,
            ParentId: groupValue,
            PicLink: values.PicLink[0].response.path,
            BackgroundImage: values.BackgroundImage[0].response.path,
        })
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ایجاد گروه جدید</h1>
            <Form onFinish={onFinish}>
                <Tabs tabs={tabs} position="top" forceRender={true} />
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}
