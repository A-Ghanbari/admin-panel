import { createReducer } from "@reduxjs/toolkit"

export const formStep = createReducer({}, {
    FORM_STEP: (state, { payload }) => payload
})

export const reloadList = createReducer(false, {
    RELOAD_LIST: (state, { payload }) => payload
}) 