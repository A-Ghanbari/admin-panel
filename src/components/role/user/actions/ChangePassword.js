import { useNavigate, useParams } from 'react-router-dom'
import Form from 'components/utils/form'
import FormInputPassword from 'components/utils/form/items/FormInputPassword'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import { ColumnGrid, Row } from 'components/utils/grid'
import { changeUserPassword } from 'store/actions/role'
import Notification from 'components/utils/notification'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function ChangePassword() {
    const { userName } = useParams()
    const navigate = useNavigate()

    const onFinish = (values) => {
        if (values.password === values.repeatPassword) {
            changeUserPassword({
                userName,
                newPassword: values.password
            })
            navigate(-1)
        } else {
            Notification.error("کلمه عبور و تکرار آن یکسان نیستند")
        }
    }

    return (
        <div className="form-card">
            <h1>تغییر کلمه عبور برای کاربر {userName}</h1>
            <Form
                onFinish={onFinish}
            >
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInputPassword
                            name="password"
                            label="کلمه عبور"
                            required={true}
                        />
                        <FormInputPassword
                            name="repeatPassword"
                            label="تکرار کلمه عبور"
                            required={true}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
