import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BLOG_AUTHOR as entity } from "tools/utils/entities"
import { getBlogAuthor, editBlogAuthor } from 'store/actions/blog'
import { useNavigate, useParams } from 'react-router-dom'
import Form from 'components/utils/form'
import { ColumnGrid } from 'components/utils/grid'
import { FormInput } from 'components/utils/form/items/FormInput'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import Skeleton from 'components/utils/skeleton'

export default function Edit() {
    const { id } = useParams()
    const navigate = useNavigate()

    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getBlogAuthor({ id })
    }, [id])

    const onFinish = (values) => {
        editBlogAuthor({ id, ...values })
        navigate(-1)
    }

    return (
        <div className="section-card">
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>ویرایش نویسنده {dataList[0]?.name}</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                    autoComplete="off"
                >
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="name"
                            label="نام"
                        />
                        <FormInput
                            name="latinName"
                            label="نام(لاتین)"
                        />
                        <FormInput
                            name="canonical"
                            label="canonical"
                        />
                        <FormSelect
                            name="isIndex"
                            label="isIndex"
                            required={true}
                            items={[
                                {
                                    text: "فعال",
                                    value: true
                                },
                                {
                                    text: "غیرفعال",
                                    value: false
                                },
                            ]}
                        />
                        <FormSelect
                            name="isFollow"
                            label="isFollow"
                            required={true}
                            items={[
                                {
                                    text: "فعال",
                                    value: true
                                },
                                {
                                    text: "غیرفعال",
                                    value: false
                                },
                            ]}
                        />
                    </ColumnGrid>
                    <FormTextArea
                        name="description"
                        label="توضیح کلی"
                    />
                    <FormTextArea
                        name="address"
                        label="آدرس"
                    />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}