import { useEffect } from "react"
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { getPagesRole } from "store/actions/role"
import { checkPageRoles, rolesAccess } from "tools/utils"
import { ROLE_SETTING_PAGE as entity } from "tools/utils/entities"
import Form from 'components/utils/form'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import Skeleton from 'components/utils/skeleton'
import FormSettingRole from 'components/utils/form/items/FormSettingRole'

export default function Edit() {
    const { ID } = useParams()
    const { state } = useLocation()

    useEffect(() => {
        getPagesRole({ roleID: ID })
    }, [ID])

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    const pageRoles = checkPageRoles(data?.rolePagesListModels)
    const pageAccess = rolesAccess(pageRoles)

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <div className='section-card setting-role'>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>تغییر جزییات نقش <span className="accent">{state.name}</span></h1>
                <Form
                    onFinish={onFinish}
                    initialValues={{ pageIDs: pageAccess }}
                >
                    {pageRoles &&
                        <FormSettingRole
                            name="pageIDs"
                            items={pageRoles}
                        />
                    }
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
