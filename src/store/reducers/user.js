import { createReducer } from "@reduxjs/toolkit"
import {
    getLoginStatus,
    getPageAccess,
    getPermissions,
    getUser,
} from "tools/utils"

export const user = createReducer(false, {
    USER: (state, { payload }) => payload,
})
// export const user = createReducer(
//     {
//         isLoading: false,
//         isLogin: getLoginStatus(),
//         data: getUser(),
//         permissions: getPermissions(),
//         pageAccess: getPageAccess()
//     },
//     { USER: (state, { payload }) => payload }
// )

export const collapsedMenu = createReducer(false, {
    USER_COLLAPSED_MENU: (state, { payload }) => payload,
})
