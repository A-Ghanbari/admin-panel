import { createReducer } from "@reduxjs/toolkit"

export const packingRankings = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PACKING_RANKINGS: (state, { payload }) => payload }
)

export const packingOrders = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PACKING_ORDERS: (state, { payload }) => payload }
)

export const packingOrder = createReducer(
    { data: {} },
    { PACKING_ORDER: (state, { payload }) => payload }
)