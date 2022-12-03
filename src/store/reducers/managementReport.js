import { createReducer } from "@reduxjs/toolkit";

export const managementReportWarehouse = createReducer(
    { data: [] },
    { MANAGEMENT_REPORT_WAREHOUSE: (state, { payload }) => payload }
)

export const managementReportInvoice = createReducer(
    { data: [] },
    { MANAGEMENT_REPORT_INVOICE: (state, { payload }) => payload }
)

export const managementReportCharge = createReducer(
    { data: [] },
    { MANAGEMENT_REPORT_CHARGE: (state, { payload }) => payload }
)