import { createReducer } from "@reduxjs/toolkit"

export const managePages = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { MANAGE_PAGES: (state, { payload }) => payload }
)
