import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BLOG_CONTENT as entity } from "tools/utils/entities"
import { editBlogContent, getBlogAuthor, getBlogContent, getBlogGroup, getBlogTag } from 'store/actions/blog'
import Tabs from 'components/utils/tabs'
import Form from 'components/utils/form'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import Content from 'components/blog/content/actions/edit/Content'
import Social from 'components/blog/content/actions/edit/Social'
import Seo from 'components/blog/content/actions/edit/Seo'
import Specifications from 'components/blog/content/actions/edit/Specifications'
import Skeleton from 'components/utils/skeleton'


function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getBlogAuthor({ pagesize: 10000 })
        getBlogGroup({ pagesize: 10000 })
        getBlogTag({ pagesize: 10000 })
        getBlogContent({ id })
    }, [id])

    const tabs = [
        {
            title: "محتوا",
            render: <Content />
        },
        {
            title: "مشخصات",
            render: dataList[0] && <Specifications dataList={dataList[0]} />
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
            id,
            ...values,
            labelIds: values.labels,
            picLink: (typeof values.picLink === 'string') ? values.picLink : values.picLink[0].response.path,
        }
        editBlogContent(fileds)
        navigate(-1)
    }
    const initialValues = () => {
        const values = {
            ...dataList[0],
            labels: []
        }
        dataList[0]?.labels.map((item) => values.labels.push(item.id))
        return values
    }

    return (
        <div className='section-card'>
            <h1>ایجاد محتوای جدید </h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                    initialValues={initialValues()}
                    autoComplete="off"
                >
                    <Tabs tabs={tabs} position="top" forceRender={true} />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}

export default Edit