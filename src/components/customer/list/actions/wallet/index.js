import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import {
    CUSTOMER as entity,
    CUSTOMER_WALLET_TRANSACTION as walletEntity
} from "tools/utils/entities"
import { getCustomerWalletTransaction, getCustomer } from 'store/actions/customer'
import ChargeWallet from 'components/customer/list/actions/wallet/ChargeWallet'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Collapse from 'components/utils/collapse'
import { addCommaToNumber } from 'tools/utils'
import Table from 'components/utils/table'
import ReportWallet from './ReportWallet'

export default function WalletInfo() {
    const { ID } = useParams()
    let navigate = useNavigate()

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: "نام کاربری",
            key: "userName"
        }, {
            title: "نام",
            key: "customerFullName"
        }, {
            title: "نوع انتقال",
            key: "transactionTypeName"
        }, {
            title: "مقدار انتقال",
            key: "changeBalance",
            render: (r, f) => <span className={r > 0 ? 'success' : 'fail'}>{addCommaToNumber(r / 10)} تومان</span>
        }, {
            title: "موجودی فعلی",
            key: "currentBalance",
            render: (r, f) => `${addCommaToNumber(r / 10)} تومان`
        }, {
            title: "انتقال دهنده",
            key: "adminCharger"
        }, {
            title: "توضیحات",
            key: "description",
        }, {
            title: "وضعیت",
            key: "status",
        }, {
            title: "تاریخ انتقال",
            key: "transactionDateTime",
        }
    ]

    useEffect(() => {
        getCustomer({ userName: ID })
        getCustomerWalletTransaction({ userName: ID })
    }, [ID])

    return (
        <div className="section-card">
            <h1>جزییات کیف پول کاربر "{ID}"</h1>
            <ReportWallet />
            <Collapse title="تراکنش ها">
                <Table
                    entity={walletEntity}
                    columns={columns}
                    rowKey='ID'
                />
            </Collapse>
            <Collapse title="شارژ کیف پول">
                <ChargeWallet ID={data.customerID} permission="customerChargeWalletPermission" />
            </Collapse>
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="بازگشت"
                    loading={loading}
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}