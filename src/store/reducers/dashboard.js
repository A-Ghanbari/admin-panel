import { createReducer } from "@reduxjs/toolkit";

export const salesWidget = createReducer({ data: {}, loading: true }, {
    SALES_WIDGET: (state, { payload }) => payload
})

export const warehouseWidget = createReducer({ data: {} ,loading: true}, {
    WAREHOUSE_WIDGET: (state, { payload }) => payload
})

export const cartBankWidget = createReducer({ data: {} ,loading: true}, {
    CART_BANK_WIDGET: (state, { payload }) => payload
})
