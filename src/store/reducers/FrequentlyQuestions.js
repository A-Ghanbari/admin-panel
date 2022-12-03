import { createReducer } from "@reduxjs/toolkit"

export const frequentlyQuestions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { FREQUENTLY_QUESTIONS: (state, { payload }) => payload }
)

export const frequentlyQuestion = createReducer(
    { data: {} },
    { FREQUENTLY_QUESTION: (state, { payload }) => payload }
)