import { createReducer } from "@reduxjs/toolkit"

export const reagentCodes = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { REAGENT_CODES: (state, { payload }) => payload }
)

export const discounts = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { DISCOUNTS: (state, { payload }) => payload }
)

export const discountProducts = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { DISCOUNT_PRODUCTS: (state, { payload }) => payload }
)

export const discountCustomers = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { DISCOUNT_CUSTOMERS: (state, { payload }) => payload }
)

export const discountCities = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { DISCOUNT_CITIES: (state, { payload }) => payload }
)

export const discountSuppliers = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { DISCOUNT_SUPPLIERS: (state, { payload }) => payload }
)

export const campaigns = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CAMPAIGNS: (state, { payload }) => payload }
)

export const discountCarts = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { DISCOUNT_CARTS: (state, { payload }) => payload }
)

export const discountOrders = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { DISCOUNT_ORDERS: (state, { payload }) => payload }
)