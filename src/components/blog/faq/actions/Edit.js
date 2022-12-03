import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BLOG_FAQ as entity, BLOG_CONTENT as contentEntity } from "tools/utils/entities"
import { getBlogFaq, editBlogFaq, getBlogContent } from 'store/actions/blog'
import Form from 'components/utils/form'
import { ColumnGrid } from 'components/utils/grid'
import { FormInput } from 'components/utils/form/items/FormInput'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import Skeleton from 'components/utils/skeleton'
import { getSelectItems } from 'tools/utils'

export default function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { dataList: contentList } = useSelector((s) => s[contentEntity.pluralizeName])
    const contents = getSelectItems(contentList)

    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getBlogFaq({ id })
        getBlogContent({ pagesize: 10000 })
    }, [id])

    const onFinish = (values) => {
        editBlogFaq({ id, ...values })
        navigate(-1)
    }

    return (
        <div className="section-card">

            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>ویرایش سوال کد "{dataList[0]?.id}"</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                    autoComplete="off"
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