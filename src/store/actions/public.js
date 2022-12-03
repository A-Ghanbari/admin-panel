import { createAction } from "@reduxjs/toolkit"
import { dispatch } from "store"

export const setFormStep = createAction("FORM_STEP")

export const clearFormStep = () => {
    dispatch(setFormStep({}))
}

export const setReloadList = createAction("RELOAD_LIST")