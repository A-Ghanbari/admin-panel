import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editUser, getRoleSetting, getRoleUser } from "store/actions/role"
import { ROLE_USER as entity, ROLE_SETTING as roleSettingEntity } from "tools/utils/entities"
import { getSelectItems } from "tools/utils"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid, Row } from "components/utils/grid"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import FormSelect from "components/utils/form/items/FormSelect"
import Skeleton from "components/utils/skeleton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Edit() {
    const navigate = useNavigate()
    const { ID } = useParams()

    const { dataList: roles } = useSelector(
        (s) => s[roleSettingEntity.pluralizeName]
    )

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getRoleSetting({ pageSize: 10000 })
        getRoleUser({ ID })
    }, [])

    const onFinish = (values) => {
        editUser({
            ID,
            ...values
        })
        navigate(-1)
    }

    return (
        <div className="form-card">
            <Skeleton
                loading={loading}
                avatar
                active
            >
                <h1>ویرایش کاربر {dataList[0]?.userName}</h1>
                <img src={dataList[0]?.photo} width={150} style={{ borderRadius: "50%" }} />
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                >
                    <Row className="filter-form">
                        <ColumnGrid col={fieldCol}>
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
            </Skeleton>
        </div>
    )
}
