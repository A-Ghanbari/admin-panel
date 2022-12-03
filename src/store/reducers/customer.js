import { createReducer } from "@reduxjs/toolkit"

export const customers = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CUSTOMERS: (state, { payload }) => payload }
)

export const customer = createReducer(
    { data: {} },
    { CUSTOMER: (state, { payload }) => payload }
)

export const customerWalletTransactions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CUSTOMER_WALLET_TRANSACTIONS: (state, { payload }) => payload }
)

export const walletsTransactions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { WALLETS_TRANSACTIONS: (state, { payload }) => payload }
)