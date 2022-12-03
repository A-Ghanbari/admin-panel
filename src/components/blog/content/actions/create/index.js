import { useEffect } from 'react'
import Tabs from 'components/utils/tabs'
import Form from 'components/utils/form'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import Content from 'components/blog/content/actions/create/Content'
import Social from 'components/blog/content/actions/create/Social'
import Seo from 'components/blog/content/actions/create/Seo'
import Specifications from 'components/blog/content/actions/create/Specifications'
import { createBlogContent, getBlogAuthor, getBlogGroup, getBlogTag } from 'store/actions/blog'
import { useNavigate } from 'react-router-dom'

function Create() {
    const navigate = useNavigate()

    useEffect(() => {
        getBlogAuthor({ pagesize: 10000 })
        getBlogGroup({ pagesize: 10000 })
        getBlogTag({ pagesize: 10000 })
    }, [])


    const tabs = [
        {
            title: "محتوا",
            render: <Content />
        },
        {
            title: "مشخصات",
            render: <Specifications />
        },
        {
            title: "فضای مجازی",
            render: <Social />
        },
        {
            title: "سئو",
            render: <Seo />
        },
    ]

    const onFinish = (values) => {
        const fileds = {
            ...values,
            picLink: values.picLink[0].response.path,
            picName: values.picLink[0].response.name,
        }
        createBlogContent(fileds)
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ایجاد محتوای جدید </h1>
            <Form
                onFinish={onFinish}
            >
                <Tabs tabs={tabs} position="top" forceRender={true} />
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}

export default Create