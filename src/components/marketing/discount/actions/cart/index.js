import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getDiscountCartList } from 'store/actions/marketing'
import { DISCOUNT_CART as entity } from "tools/utils/entities"
import Tabs from 'components/utils/tabs'
import Skeleton from 'components/utils/skeleton'
import List from 'components/marketing/discount/actions/cart/List'
import Create from 'components/marketing/discount/actions/cart/Create'

export default function DiscountCart() {
    const { ID } = useParams()
    const { state } = useLocation()

    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getDiscountCartList({ basicConditionID: ID })
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
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>تخفیف سبد خرید با تخفیف پایه <span className='warning'>{state.name}</span></h1>
                <Tabs
                    tabs={tabs}
                    position="top"
                />
            </Skeleton>
        </div>
    )
}
