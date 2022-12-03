import { createReducer } from "@reduxjs/toolkit"

export const postBranches = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { POST_BRANCHES: (state, { payload }) => payload }
)

export const postCompanies = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { POST_COMPANIES: (state, { payload }) => payload }
)

export const postBranch = createReducer(
    { data: {} },
    { POST_BRANCH: (state, { payload }) => payload }
)

export const postDDLBranches = createReducer([],
    {
        POST_DDL_BRANCHES: (state, { payload }) =>
            payload.dataList.map((item) => ({
                text: item.title,
                value: item.ID,
            }))
    }
)