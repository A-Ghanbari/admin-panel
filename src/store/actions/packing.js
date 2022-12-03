import API_SERVICES from "tools/shared/apis"
import {
    PACKING_RANKING as rankingEntity,
    PACKING_ORDER as orderEntity
} from "tools/utils/entities"
import { list, item, postRequest } from 'tools/requests'

export const getPackingRankingList = (data) =>
    list({ entity: rankingEntity, data, url: API_SERVICES.packing.ranking.list })

export const getPackingOrdersList = (data) =>
    list({ entity: orderEntity, data, url: API_SERVICES.packing.order.list })

export const getPackingOrderItem = (data) =>
    item({ entity: orderEntity, data, url: API_SERVICES.packing.order.list })

export const getPackingBarcodeInfo = (data) =>
    postRequest({ data, url: API_SERVICES.packing.register.getOrderInfo })

export const sendLabelData = (data) =>
    postRequest({ data, url: API_SERVICES.packing.register.sendLabelData })

export const getPostLabel = (data) =>
    postRequest({ data, url: API_SERVICES.packing.register.getPostLabel })