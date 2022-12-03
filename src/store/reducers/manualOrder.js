import { createReducer } from "@reduxjs/toolkit"

export const manualOrders = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { MANUAL_ORDERS: (state, { payload }) => payload }
)

export const manualOrder = createReducer(
    { data: {} },
    { MANUAL_ORDER: (state, { payload }) => payload }
)

export const manualOrderAwaitings = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { MANUAL_ORDER_AWAITINGS: (state, { payload }) => payload }
)

export const manualOrderWarehouseExits = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { MANUAL_ORDER_WAREHOUSE_EXITS: (state, { payload }) => payload }
)

export const manualOrderWarehouseExitLastOrder = createReducer(
    { data: {} },
    { MANUAL_ORDER_WAREHOUSE_EXIT_LAST_ORDER: (state, { payload }) => payload }
)

export const manualOrderProvinces = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { MANUAL_ORDER_PROVINCES: (state, { payload }) => payload }
)

export const manualOrderType = createReducer(
    { data: [] },
    { MANUAL_ORDER_TYPE: (state, { payload }) => payload }
)

export const manualOrderBarcodeStatuses = createReducer(
    { dataList: [] },
    { MANUAL_ORDER_BARCODE_STATUSES: (state, { payload }) => payload, }
)