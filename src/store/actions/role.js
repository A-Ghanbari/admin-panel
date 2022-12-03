import { item, list, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import {
    ROLE_SETTING as roleSettingEntity
    , ROLE_USER as roleUserEntity,
    ROLE_SETTING_PAGE as roleSettingPageEntity,
    ROLE_SETTING_USER as roleSettingUserEntity,
} from "tools/utils/entities"

export const getRoleSetting = (data) =>
    list({ entity: roleSettingEntity, data, url: API_SERVICES.roles.setting.list })

export const getRoleSettingUsers = (data) =>
    list({ entity: roleSettingUserEntity, data, url: API_SERVICES.roles.setting.roleUsers })

export const getPagesRole = (data) =>
    item({ entity: roleSettingPageEntity, data, url: API_SERVICES.roles.setting.pagesRole })

export const createRoleSetting = (data) =>
    postRequest({ data, url: API_SERVICES.roles.setting.create })

export const editRoleSetting = (data) =>
    postRequest({ data, url: API_SERVICES.roles.setting.edit })

export const deleteRoleSetting = (data) =>
    postRequest({ data, url: API_SERVICES.roles.setting.delete })

export const getRoleUser = (data) =>
    list({ entity: roleUserEntity, data, url: API_SERVICES.roles.user.list })

export const createUser = (data) =>
    postRequest({ data, url: API_SERVICES.roles.user.create })

export const editUser = (data) =>
    postRequest({ data, url: API_SERVICES.roles.user.edit })

export const changeUserPassword = (data) =>
    postRequest({ data, url: API_SERVICES.roles.user.changePassword })
