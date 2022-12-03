import { createReducer } from "@reduxjs/toolkit"

export const contactUsMessages = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CONTACT_US_MESSAGES: (state, { payload }) => payload }
)

export const contactUsMessage = createReducer(
    { data: {} },
    { CONTACT_US_MESSAGE: (state, { payload }) => payload }
)

export const contentPositions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CONTENT_POSITIONS: (state, { payload }) => payload }
)

export const contentPosition = createReducer(
    { data: {} },
    { CONTENT_POSITION: (state, { payload }) => payload }
)

export const contentSliders = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CONTENT_SLIDERS: (state, { payload }) => payload }
)