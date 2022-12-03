import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getOrderConditionList } from 'store/actions/leaderBoard'
import { ORDER_CONDITION as entity } from "tools/utils/entities"
import Tabs from 'components/utils/tabs'
import Skeleton from 'components/utils/skeleton'
import List from 'components/marketing/leaderBoard/actions/roles/orderCondition/List'
import Create from 'components/marketing/leaderBoard/actions/roles/orderCondition/Create'
import Edit from 'components/marketing/leaderBoard/actions/roles/orderCondition/Edit'

export default function OrderCondition() {
    const [activeKey, setActiveKey] = useState("0")
    const [type, setType] = useState("create")
    const [initialValue, setInitialValue] = useState()
    const { ID } = useParams()
    const { state } = useLocation()
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getOrderConditionList({ LeaderBoardID: ID })
    }, [ID, reload])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "لیست",
            render: <List
                dataList={dataList}
                setActiveKey={setActiveKey}
                setType={setType}
                setInitialValue={setInitialValue}
            />
        },
        type === "create" ?
            {
                title: "ایجاد ",
                render: <Create ID={ID} />
            }
            :
            {
                title: "ویرایش ",
                render: <Edit setType={setType} initialValue={initialValue} ID={ID} />
            }

    ]

    const onChange = (activeKey) => {
        setActiveKey(activeKey)
    }

    return (
        <div className='section-card'>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>شرط تعداد سفارش برای تابلو {state.name}</h1>
                <Tabs
                    tabs={tabs}
                    position="top"
                    activeKey={activeKey}
                    onChange={onChange}
                />
            </Skeleton>
        </div>
    )
}
