import { createReducer } from "@reduxjs/toolkit"

export const centralExchanges = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CENTRAL_EXCHANGES: (state, { payload }) => payload }
)

export const centralExchange = createReducer(
    { data: {} },
    { CENTRAL_EXCHANGE: (state, { payload }) => payload }
)

export const centralExchangeWorkers = createReducer([],
    {
        CENTRAL_EXCHANGE_WORKERS: (state, { payload }) =>
            payload.dataList.map((item) => ({
                text: item.fullName,
                value: item.ID,
            }))
    }
)

export const centralExchangeBoxes = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CENTRAL_EXCHANGE_BOXES: (state, { payload }) => payload }
)

export const centralExchangeBox = createReducer(
    { data: {} },
    { CENTRAL_EXCHANGE_BOX: (state, { payload }) => payload }
)