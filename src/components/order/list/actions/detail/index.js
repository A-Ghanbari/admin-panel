import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { getItem } from 'store/actions/order'
import Tabs from 'components/utils/tabs'
import { ORDER as entity } from "tools/utils/entities"
import Overview from 'components/order/list/actions/detail/Overview'
import Discount from 'components/order/list/actions/detail/Discount'
import Payment from 'components/order/list/actions/detail/Payment'
import Receiver from 'components/order/list/actions/detail/Receiver'
import UserInfo from 'components/order/list/actions/detail/UserInfo'
import Barcode from 'components/order/list/actions/detail/Barcode'
import Invoice from 'components/order/list/actions/detail/Invoice'
import Button from 'components/utils/field/button'
import ActionButton from 'components/utils/actionsButton'
import Skeleton from 'components/utils/skeleton'

function Detail() {
    // const { ID } = useParams()
    let navigate = useNavigate()

    // useEffect(() => {
    //     getItem({ ID })
    // }, [ID])

    // const { loading } = useSelector(
    //     (s) => s[entity.name]
    // )

    const tabs = [
        {
            title: "نمای کلی",
            render: <Overview dataSource='orderProductsTotal' entity={entity} />
        },
        {
            title: "مشخصات مشتری ",
            render: <UserInfo dataSource='orderDetailReceiver' entity={entity} />
        },
        {
            title: "اطلاعات پرداخت",
            render: <Payment dataSource='paymentDetails' entity={entity} />
        },
        {
            title: "تخفیف ها ",
            render: <Discount dataSource='discountUsed' entity={entity} />
        },
        {
            title: " دریافت کننده",
            render: <Receiver dataSource='orderDetailReceiver' entity={entity} />
        },
        // {
        //     title: "بارکد ",
        //     render: <Barcode dataSource={{ transaction: 'transactionLogs', barcode: 'barcodes' }} entity={entity} />
        // },
        {
            title: "فاکتور ",
            render: <Invoice dataSource='orderProducts' entity={entity} />
        },
    ]

    return (
        <div className='section-card'>
            <h1>جزییات سفارش </h1>
            {/* <Skeleton
                avatar
                active
                loading={loading}
            > */}
                <Tabs tabs={tabs} position="top" />
            {/* </Skeleton> */}
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