import { createReducer } from "@reduxjs/toolkit"

export const orders = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { ORDERS: (state, { payload }) => payload }
)

export const order = createReducer(
    { data: {} },
    { ORDER: (state, { payload }) => payload }
)

export const orderBarcodeStatuses = createReducer(
    { dataList: [] },
    { ORDER_BARCODE_STATUSES: (state, { payload }) => payload, }
)

export const orderWarehouseExitLogs = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { ORDER_WAREHOUSE_EXIT_LOGS: (state, { payload }) => payload }
)

export const orderWarehouseExitLog = createReducer(
    { data: {} },
    { ORDER_WAREHOUSE_EXIT_LOG: (state, { payload }) => payload }
)

export const orderWarehouseExitWaitingList = createReducer(
    { data: [] },
    { ORDER_WAREHOUSE_EXIT_WAITING_LIST: (state, { payload }) => payload }
)

export const orderWarehouseExitLastOrder = createReducer(
    { data: {} },
    { ORDER_WAREHOUSE_EXIT_LAST_ORDER: (state, { payload }) => payload }
)

export const orderWarehouseExitPostDelivery = createReducer(
    { data: {} },
    { ORDER_WAREHOUSE_EXIT_POST_DELIVERY: (state, { payload }) => payload }
)

export const provinceOrders = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PROVINCE_ORDERS: (state, { payload }) => payload }
)