import { createReducer } from "@reduxjs/toolkit"

export const landingPages = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { LANDING_PAGES: (state, { payload }) => payload }
)