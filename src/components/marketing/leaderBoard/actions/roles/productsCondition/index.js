import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getproductsCondition } from 'store/actions/leaderBoard'
import { PRODUCTS_CONDITION as entity } from "tools/utils/entities"
import Tabs from 'components/utils/tabs'
import Skeleton from 'components/utils/skeleton'
import List from 'components/marketing/leaderBoard/actions/roles/productsCondition/List'

export default function ProductsCondition() {
    const { ID } = useParams()
    const { state } = useLocation()
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getproductsCondition({ LeaderBoardID: ID })
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
    ]

    return (
        <div className='section-card'>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>شرط کالایی برای تابلو {state.name}</h1>
                <Tabs
                    tabs={tabs}
                    position="top"
                />
            </Skeleton>
        </div>
    )
}
