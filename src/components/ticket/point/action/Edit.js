import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editTicketsPoint, getTicketsPoint } from 'store/actions/ticket'
import { TICKET_POINT as entity } from "tools/utils/entities"
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import FormSelect from 'components/utils/form/items/FormSelect'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import { ColumnGrid } from 'components/utils/grid'
import Skeleton from 'components/utils/skeleton'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit() {
    const { ID } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getTicketsPoint({ ID })
    }, [])


    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const onFinish = (values) => {
        editTicketsPoint({
            ID,
            ...values
        })
        navigate(-1)
    }

    return (
        <div className="form-card">
            <h1>ویرایش امتیاز {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                >
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="title"
                            label="عنوان"
                            required={true}
                        />
                        <FormSelect
                            name="score"
                            label="امتیاز"
                            required={true}
                            items={[
                                {
                                    text: "1",
                                    value: 1
                                },
                                {
                                    text: "2",
                                    value: 2
                                },
                                {
                                    text: "3",
                                    value: 3
                                },
                                {
                                    text: "4",
                                    value: 4
                                },
                                {
                                    text: "5",
                                    value: 5
                                },
                            ]}
                        />
                        <FormInputNumber
                            name="point"
                            label="ارزش امتیاز"
                            required={true}
                        />
                        <FormSelect
                            name="isActive"
                            label="وضعیت"
                            required={true}
                            items={[
                                {
                                    text: "غیر فعال",
                                    value: false
                                },
                                {
                                    text: "فعال",
                                    value: true
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
