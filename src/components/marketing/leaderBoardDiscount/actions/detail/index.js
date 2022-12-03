import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getDiscountList } from "store/actions/marketing"
import { DISCOUNT as entity } from "tools/utils/entities"
import Customers from "components/marketing/leaderBoardDiscount/actions/detail/Customers"
import Overview from "components/marketing/leaderBoardDiscount/actions/detail/Overview"
import Skeleton from "components/utils/skeleton"
import Tabs from "components/utils/tabs"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"

export default function Detail() {
    const { ID } = useParams()
    const { state } = useLocation()
    let navigate = useNavigate()

    useEffect(() => {
        getDiscountList({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        s => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "نمای کلی",
            render: <Overview data={dataList[0]} />
        },
        {
            title: "کاربران ",
            render: <Customers data={dataList[0]?.forCustomers} />
        },
    ]

    return (
        <div className="section-card">
            <h1>جزئیات تخفیف {state.name}</h1>
            <Skeleton
                loading={loading}
                avatar
                active
            >
                <Tabs tabs={tabs} position="top" />
            </Skeleton>
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="انصراف"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}
