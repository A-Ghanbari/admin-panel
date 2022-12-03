import { createReducer } from "@reduxjs/toolkit"

export const sepidarInvoices = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { SEPIDAR_INVOICES: (state, { payload }) => payload }
)