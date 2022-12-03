import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { getCustomer } from 'store/actions/customer'
import Tabs from 'components/utils/tabs'
import { CUSTOMER as entity } from "tools/utils/entities"
import Overview from 'components/customer/list/actions/detail/Overview'
import Address from 'components/customer/list/actions/detail/Address'
import Call from 'components/customer/list/actions/detail/Call'
import ReagentCode from 'components/customer/list/actions/detail/ReagentCode'
import ReagentOrder from 'components/customer/list/actions/detail/ReagentOrder'
import Button from 'components/utils/field/button'
import ActionButton from 'components/utils/actionsButton'
import Skeleton from 'components/utils/skeleton'

function Detail() {
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getCustomer({ userName: ID })
    }, [ID])

    const { loading } = useSelector(
        (s) => s[entity.name]
    )

    const tabs = [
        {
            title: "نمای کلی",
            render: <Overview
                dataSource='customerPersonalInfo'
                entity={entity}
                permission="marketerOverviewPermission"
            />
        }, {
            title: "آدرس",
            render: <Address
                dataSource='customerAddresses'
                entity={entity}
                permission="marketerOverviewPermission"
            />
        }, {
            title: "تماس",
            render: <Call
                dataSource='customerContactInfo'
                entity={entity}
                permission="contactInfoPermission"
            />
        }, {
            title: "ثبت نام کد معرف",
            render: <ReagentCode
                dataSource='discountUsed'
                entity={entity}
                permission="customerCodeReagentPermission"
            />
        }, {
            title: "سفارش کد معرف",
            render: <ReagentOrder
                dataSource='reagentCodeOrders'
                entity={entity}
                permission="customerCodeReagentPermission"
            />
        }
    ]

    return (
        <div className='section-card'>
            <h1>جزییات کاربر {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Tabs tabs={tabs} position="top" />
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

export default Detail