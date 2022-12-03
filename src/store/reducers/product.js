import { createReducer } from "@reduxjs/toolkit"

export const brands = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { BRANDS: (state, { payload }) => payload }
)

export const groups = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { GROUPS: (state, { payload }) => payload }
)

export const groupColors = createReducer(
    { dataList: [] },
    { GROUP_COLORS: (state, { payload }) => payload }
)

export const groupAttributes = createReducer(
    { dataList: [] },
    { GROUP_ATTRIBUTES: (state, { payload }) => payload }
)

export const groupParentAttributes = createReducer(
    { dataList: [] },
    { GROUP_PARENT_ATTRIBUTES: (state, { payload }) => payload }
)

export const productColors = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCT_COLORS: (state, { payload }) => payload }
)

export const productFiles = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCT_FILES: (state, { payload }) => payload }
)

export const productCarts = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCT_CARTS: (state, { payload }) => payload }
)

export const productCommerces = createReducer(
    { dataList: [] },
    { PRODUCT_COMMERCES: (state, { payload }) => payload }
)

export const products = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCTS: (state, { payload }) => payload }
)

export const productAttributes = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCT_ATTRIBUTES: (state, { payload }) => payload }
)

export const productAttributeLists = createReducer(
    { dataList: [] },
    { PRODUCT_ATTRIBUTE_LISTS: (state, { payload }) => payload }
)

export const productModifyLogs = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCT_MODIFY_LOGS: (state, { payload }) => payload }
)

export const productLogs = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCT_LOGS: (state, { payload }) => payload }
)

export const brandWithProductList = createReducer(
    { data: [] },
    { BRAND_WITH_PRODUCT_LIST: (state, { payload }) => payload }
)

export const productPriceInfo = createReducer({}, {
    PRODUCT_PRICE_INFO: (state, { payload }) => payload
}) 
