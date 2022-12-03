import { createReducer } from "@reduxjs/toolkit";

export const questionnaireGroups = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { QUESTIONNAIRE_GROUPS: (state, { payload }) => payload }
)
export const questionnaireGroupDetail = createReducer(
    { data: {} },
    { QUESTIONNAIRE_GROUP_DETAIL: (state, { payload }) => payload }
)


export const questionnaireQAS = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { QUESTIONNAIRE_QAS: (state, { payload }) => payload }
)
export const questionnaireQADetail = createReducer(
    { data: {} },
    { QUESTIONNAIRE_QA_DETAIL: (state, { payload }) => payload }
)