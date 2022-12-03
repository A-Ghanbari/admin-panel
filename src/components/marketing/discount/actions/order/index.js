import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getDiscountOrderList } from 'store/actions/marketing'
import { DISCOUNT_ORDER as entity } from "tools/utils/entities"
import Tabs from 'components/utils/tabs'
import Skeleton from 'components/utils/skeleton'
import List from 'components/marketing/discount/actions/order/List'
import Create from 'components/marketing/discount/actions/order/Create'

export default function DiscountOrder() {
    const { ID } = useParams()
    const { state } = useLocation()

    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getDiscountOrderList({ basicConditionID: ID })
    }, [ID, reload])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "لیست",
            render: <List
                dataList={dataList}
            />
        },
        {
            title: "ایجاد ",
            render: <Create ID={ID} />
        }
    ]


    return (
        <div className='section-card'>
            <h1>تخفیف سفارش با تخفیف پایه <span className='warning'>{state.name}</span></h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Tabs
                    tabs={tabs}
                    position="top"
                />
            </Skeleton>
        </div>
    )
}
