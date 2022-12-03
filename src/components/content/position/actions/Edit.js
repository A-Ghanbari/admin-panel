import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CONTENT_POSITION as entity } from "tools/utils/entities"
import { getContentPosition, editContentPosition } from 'store/actions/content'
import { useNavigate, useParams } from 'react-router-dom'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import { FormInput } from 'components/utils/form/items/FormInput'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

export default function Edit() {
    const { ID } = useParams()
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
    const navigate = useNavigate()
    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    useEffect(() => {
        getContentPosition({ ID })
    }, [ID])

    const onFinish = (values) => {
        let serviceField = {
            ID: ID,
            ...values,
        }
        editContentPosition({ ...serviceField })
        navigate(-1)
    }

    return (
        <div className="section-card">
            <h1>ویرایش جایگاه : "{(data?.title) ? data?.title : '...'}"</h1>
            <Form
                name="EditPositionForm"
                onFinish={onFinish}
                initialValues={data}
                autoComplete="off"
            >
                <Row className="edit-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name='title'
                            label='عنوان'
                            required={true}
                        />
                        <FormSelect
                            name='type'
                            label='نوع'
                            required={true}
                            items={[{
                                text: 'اسلایدر',
                                value: 1
                            }, {
                                text: 'بنر',
                                value: 2
                            }]}
                        />
                        <FormSelect
                            name='isActive'
                            label='وضعیت'
                            required={true}
                            items={[{
                                text: 'فعال',
                                value: true
                            }, {
                                text: 'غیر فعال',
                                value: false
                            }]}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm loading={loading} />
                </Row>
            </Form>
        </div>
    )
}