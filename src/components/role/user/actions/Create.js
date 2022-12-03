import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createUser, getRoleSetting } from "store/actions/role"
import { ROLE_SETTING as roleSettingEntity } from "tools/utils/entities"
import { getSelectItems } from "tools/utils"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import FormInputPassword from "components/utils/form/items/FormInputPassword"
import FormSelect from "components/utils/form/items/FormSelect"
import Notification from "components/utils/notification"


const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Create() {
    const navigate = useNavigate()

    const { dataList: roles } = useSelector(
        (s) => s[roleSettingEntity.pluralizeName]
    )

    useEffect(() => {
        getRoleSetting({ pageSize: 10000 })
    }, [])

    const onFinish = (values) => {
        if (values.password === values.repeatPassword) {
            createUser(values)
            navigate(-1)
        } else {
            Notification.error("کلمه عبور و تکرار آن یکسان نیستند")
        }
    }
    const initialValues = {
        status: true
    }

    return (
        <div className="form-card">
            <Form
                onFinish={onFinish}
                initialValues={initialValues}
            >
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="userName"
                            label="نام کاربری"
                            required={true}
                        />
                        <FormInput
                            name="firstName"
                            label="نام"
                            required={true}
                        />
                        <FormInput
                            name="lastName"
                            label="نام خانوادگی"
                            required={true}
                        />
                        <FormInput
                            name="cell"
                            label="شماره موبایل"
                            required={true}
                        />
                        <FormInput
                            name="Email"
                            label="ایمیل"
                        />
                        <FormSelect
                            name="status"
                            label="وضعیت"
                            items={[
                                {
                                    text: "فعال",
                                    value: true,
                                }, {
                                    text: "غیرفعال",
                                    value: false,
                                }
                            ]}
                        />
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
                        <FormSelect
                            name='roleIDs'
                            label='نقش'
                            required={true}
                            allowClear
                            mode="multiple"
                            items={[...getSelectItems(roles)]}
                        />
                    </ColumnGrid>
                    <ButtonWithConfirm />
                </Row>
            </Form>
        </div>
    )
}
