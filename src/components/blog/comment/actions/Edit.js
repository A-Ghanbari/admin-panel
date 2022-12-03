import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { BLOG_COMMENT as entity } from "tools/utils/entities"
import { getBlogComment, editBlogComment } from 'store/actions/blog'
import Form from 'components/utils/form'
import Skeleton from 'components/utils/skeleton'
import { ColumnGrid } from 'components/utils/grid'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

export default function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()

    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getBlogComment({ id })
    }, [id])

    const onFinish = (values) => {
        editBlogComment({ id, ...values })
        navigate(-1)
    }

    return (
        <div className="section-card">
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>ویرایش وضعیت {dataList[0]?.name}</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                    autoComplete="off"
                >
                    <ColumnGrid col={fieldCol}>
                        <FormSelect
                            name="status"
                            label="وضعیت"
                            required={true}
                            items={[
                                {
                                    text: "در انتظار تایید",
                                    value: 0
                                },
                                {
                                    text: "تایید شده",
                                    value: 1
                                },
                                {
                                    text: "تایید نشده",
                                    value: 2
                                },
                            ]}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}