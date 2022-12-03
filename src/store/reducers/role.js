import { createReducer } from "@reduxjs/toolkit"

export const roleSettings = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { ROLE_SETTINGS: (state, { payload }) => payload }
)

export const roleSettingUsers = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { ROLE_SETTING_USERS: (state, { payload }) => payload }
)

export const roleSettingPage = createReducer(
    { data: {} },
    { ROLE_SETTING_PAGE: (state, { payload }) => payload }
)

export const roleUsers = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { ROLE_USERS: (state, { payload }) => payload }
)