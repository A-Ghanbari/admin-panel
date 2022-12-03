import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { getItem } from 'store/actions/manualOrder'
import Tabs from 'components/utils/tabs'
import { MANUAL_ORDER as entity } from "tools/utils/entities"
import MainFactor from 'components/manualOrder/list/actions/detail/MainFactor'
import Description from 'components/manualOrder/list/actions/detail/Description'
import Barcode from 'components/manualOrder/list/actions/detail/Barcode'
import Button from 'components/utils/field/button'
import ActionButton from 'components/utils/actionsButton'
import Skeleton from 'components/utils/skeleton'

export default function Detail() {
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getItem({ manualOrderID: ID })
    }, [ID])

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    const tabs = [
        {
            title: "فاکتور کالاهای اصلی",
            render: <MainFactor dataSource='items' entity={entity} />
        }, {
            title: "توضیحات",
            render: <Description dataSource='adminMessage' entity={entity} />
        }, {
            title: "بارکد",
            render: <Barcode dataSource='barcodes' entity={entity} />
        }
    ]

    return (
        <div className='section-card'>
            <h1>جزییات سفارش اپراتوری "{ID}"</h1>
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