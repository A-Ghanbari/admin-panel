import { createReducer } from "@reduxjs/toolkit"
import { getBrands, getCities, getGroups, getPeriodList, getProvinces, getSuppliers } from "tools/utils"

export const brandLists = createReducer(getBrands(),
    { BRAND_LISTS: (state, { payload }) => payload }
)

export const groupLists = createReducer(getGroups(),
    { GROUP_LISTS: (state, { payload }) => payload }
)

export const provinceLists = createReducer(getProvinces(),
    { PROVINCE_LISTS: (state, { payload }) => payload }
)

export const cityLists = createReducer(getCities(),
    { CITY_LISTS: (state, { payload }) => payload }
)

export const periodLists = createReducer(getPeriodList(),
    { PERIOD_LISTS: (state, { payload }) => payload }
)
