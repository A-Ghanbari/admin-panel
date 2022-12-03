import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { getPackingOrderItem } from 'store/actions/packing'
import Tabs from 'components/utils/tabs'
import { PACKING_ORDER as entity } from "tools/utils/entities"
import Overview from 'components/packing/orders/actions/details/Overview'
import Invoice from 'components/packing/orders/actions/details/Invoice'
import Button from 'components/utils/field/button'
import ActionButton from 'components/utils/actionsButton'
import Skeleton from 'components/utils/skeleton'

function Detail() {
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getPackingOrderItem({ ID })
    }, [ID])

    const { loading } = useSelector(
        (s) => s[entity.name]
    )

    const tabs = [
        {
            title: "نمای کلی",
            render: <Overview />
        }, {
            title: "فاکتور",
            render: <Invoice dataSource='labelItems' entity={entity} />
        }
    ]

    return (
        <div className='section-card'>
            <h1>جزییات سفارش {ID}</h1>
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