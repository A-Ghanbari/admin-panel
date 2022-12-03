import { createReducer } from "@reduxjs/toolkit"

export const suppliers = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { SUPPLIERS: (state, { payload }) => payload }
)

export const supplierList = createReducer(
    { data: [] },
    { SUPPLIER_LIST: (state, { payload }) => payload }
)

export const supplierWarehouses = createReducer(
    { dataList: [] },
    { SUPPLIER_WAREHOUSES: (state, { payload }) => payload }
)

export const commercialRequests = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { COMMERCIAL_REQUESTS: (state, { payload }) => payload }
)

export const commercialDiscounts = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { COMMERCIAL_DISCOUNTS: (state, { payload }) => payload }
)

export const managementRequests = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { MANAGEMENT_REQUESTS: (state, { payload }) => payload }
)

export const commercialPricings = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { COMMERCIAL_PRICINGS: (state, { payload }) => payload }
)

export const financialRequests = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { FINANCIAL_REQUESTS: (state, { payload }) => payload }
)

export const warehouseRequests = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { WAREHOUSE_REQUESTS: (state, { payload }) => payload }
)

export const discountDrafts = createReducer(
    { dataList: [] },
    { DISCOUNT_DRAFTS: (state, { payload }) => payload }
)

export const discountDraftData = createReducer([], {
    DISCOUNT_DRAFT_DATA: (state, { payload }) => payload
}) 