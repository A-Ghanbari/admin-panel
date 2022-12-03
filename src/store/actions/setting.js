import { list } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import { MANAGE_PAGE as managePageEntity } from "tools/utils/entities"

export const getManagePages = (data) =>
    list({ entity: managePageEntity, data, url: API_SERVICES.setting.managePages.list })
