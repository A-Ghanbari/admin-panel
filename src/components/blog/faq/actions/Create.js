import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BLOG_CONTENT as contentEntity } from "tools/utils/entities"
import { createBlogFaq, getBlogContent } from 'store/actions/blog'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import { ColumnGrid } from 'components/utils/grid'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import { getSelectItems } from 'tools/utils'
import Skeleton from 'components/utils/skeleton'
const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const { dataList: contentList, loading } = useSelector((s) => s[contentEntity.pluralizeName])
    const contents = getSelectItems(contentList)

    useEffect(() => {
        getBlogContent({ pagesize: 10000 })
    }, [])

    const onFinish = (values) => {
        createBlogFaq(values)
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ایجاد سوال جدید</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                >
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="question"
                            label="سوال"
                            required={true}
                        />
                        <FormInput
                            name="answer"
                            label="پاسخ"
                        />
                        <FormSelectSearch
                            name="contentId"
                            label="محتوا"
                            items={contents}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
