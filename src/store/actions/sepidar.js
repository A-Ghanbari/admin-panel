import { list } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import { SEPIDAR_INVOICE as sepidarEntity } from "tools/utils/entities"

export const getSepidarInvoice = (data) =>
    list({ entity: sepidarEntity, data, url: API_SERVICES.sepidar.invoice.list })