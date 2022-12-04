import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { USER as entity } from "tools/utils/entities"
import { login } from "store/actions/user"
import Form from "components/utils/form"
import Button from "components/utils/field/button"
import useAuth from "hooks/useAuth"
import Panel from "components/panel"
import FormInput from "components/utils/form/items/FormInput"
import FormInputPassword from "components/utils/form/items/FormInputPassword"
import "components/login/login.scss"

export function Login() {
    const isAuth = useAuth()
    // const navigate = useNavigate()

    // const { isLoading } = useSelector(
    //     (s) => s[entity.name]
    // )

    // useEffect(() => {
    //     navigate("/")
    // }, [])

    const onFinish = (values) => {
        login()
    }

    return (
        <>
            {isAuth ? (
                <Panel />
            ) : (
                <div className="login-page">
                    <div className="login-form-card">
                        <div className="login-form-logo" />
                        <Form
                            className="login-form"
                            name="LoginForm"
                            onFinish={onFinish}
                            autoComplete="off"
                            initialValues={{
                                username: "admin",
                                password: "12345678",
                            }}
                        >
                            <FormInput
                                name="username"
                                label="نام کاربری"
                                allowClear={false}
                            />
                            <FormInputPassword
                                name="password"
                                label="رمز عبور"
                            />
                            <Button
                                name="submit"
                                label="ورود"
                                // loading={isLoading}
                                htmlType="submit"
                            />
                        </Form>
                    </div>
                </div>
            )}
        </>
    )
}
