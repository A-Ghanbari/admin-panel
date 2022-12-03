import { createReducer } from "@reduxjs/toolkit"

export const comments = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { COMMENTS: (state, { payload }) => payload }
)