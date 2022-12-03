import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getRoleSettingUsers } from 'store/actions/role'
import { ROLE_SETTING_USER as entity } from 'tools/utils/entities'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Skeleton from 'components/utils/skeleton'

export default function Users() {
    const { ID } = useParams()
    const { state } = useLocation()
    const navigate = useNavigate()

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getRoleSettingUsers({ ID })
    }, [])

    return (
        <div className='section-card'>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>کاربران دارای نقش {state.name}</h1>
                <div className='other-ranking-wrapper'>
                    {dataList.map(user => (
                        <div className='user-card' key={user.userName}>
                            <img src={user.photo} />
                            <h4>{user.fullName}</h4>
                            <h4>{user.firstName} {user.lastName}</h4>
                            <h4>نام کاربری : {user.userName}</h4>
                        </div>
                    ))}
                </div>
            </Skeleton>
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="بازگشت"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}
