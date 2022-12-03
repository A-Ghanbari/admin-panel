import { useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { MANUAL_ORDER_AWAITING as entity } from "tools/utils/entities"
import { getManualOrderAwaiting } from 'store/actions/manualOrder'
import Tabs from 'components/utils/tabs'
import Button from 'components/utils/field/button'
import ActionButton from 'components/utils/actionsButton'
import Skeleton from 'components/utils/skeleton'
import ProductsList from 'components/manualOrder/awaiting/actions/detail/ProductsList'
import Descriptions from 'components/utils/descriptions'

function Detail() {
    const { ID } = useParams()
    const { state } = useLocation()
    let navigate = useNavigate()

    useEffect(() => {
        getManualOrderAwaiting({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "کالاهای سفارش اصلی",
            render: <ProductsList dataSource={dataList[0]?.originalItems} entity={entity} />
        },
        {
            title: "کالاهای سفارش اپراتوری ",
            render: <ProductsList dataSource={dataList[0]?.manualItems} entity={entity} />
        },
        {
            title: "توضیحات",
            render: <Descriptions data={
                [{
                    label: "توضیحات",
                    text: dataList[0]?.acceptedDescription
                }]
            }
            />
        }
    ]

    return (
        <div className='section-card'>
            <h1>جزییات سفارش اپراتوری {state.manualOrderID}</h1>
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