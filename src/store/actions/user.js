import { createAction } from "@reduxjs/toolkit"
import { USER as entity } from "tools/utils/entities"
import { loginRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import { removeUser } from "tools/utils"
import { getBrandsList, getCitiesList, getGroupsList, getPeriodsList, getProvinceList } from "store/actions/cache"
import { dispatch } from "store"

export const setCollapsedMenu = createAction('USER_COLLAPSED_MENU')

export const login = () =>{
    dispatch({
        type: entity.upperName,
        payload: true
    })
}

// export const login = (data) =>
//     loginRequest({ entity, data, url: API_SERVICES.auth.login })
//         .then((res) => {
//             if (res) {
//                 getBrandsList({ pageSize: 10000 })
//                 getGroupsList({ pageSize: 10000 })
//                 getProvinceList()
//                 getCitiesList({ provinceID: 0 })
//                 getPeriodsList()
//             }
//         })

export function logout() {
    return function (dispatch) {
        // removeUser()
        dispatch({
            type: entity.upperName,
            payload: false
        })
    }
}

// export function getUser() {
//     return (dispatch) => {
//         dispatch(setUserIsLoading(true))
//         request({
//             method: 'POST',
//             url: API_SERVICES.auth.checkLogin,
//         })
//             .then(res => dispatch(logon(res.data)))
//             .catch((res) => dispatch(logout()))
//             .finally(() => dispatch(setUserIsLoading(false)))
//     }
// }

