import API_SERVICES from "tools/shared/apis"
import {
    MANUAL_ORDER as entity,
    MANUAL_ORDER_AWAITING as awaitingEntity,
    MANUAL_ORDER_PROVINCE as provinceEntity,
    MANUAL_ORDER_WAREHOUSE_EXIT as exitEntity,
    MANUAL_ORDER_WAREHOUSE_EXIT_LAST_ORDER as lastOrderEntity,
    MANUAL_ORDER_BARCODE_STATUS as barcodeStatusEntity,
    MANUAL_ORDER_WAREHOUSE_EXIT_POST_DELIVERY as postEntity,
    MANUAL_ORDER_TYPE as typeEntity
} from "tools/utils/entities"
import { list, getRequest, item, postRequest } from 'tools/requests'


export const getItems = (data) =>
    list({ entity, data, url: API_SERVICES.manualOrder.list })

export const getItem = (data) =>
    item({ entity, data, url: API_SERVICES.manualOrder.detail })

export const deleteManualOrder = (data) =>
    postRequest({ data, url: API_SERVICES.manualOrder.delete })

export const getManualOrderAwaiting = (data) =>
    list({ entity: awaitingEntity, data, url: API_SERVICES.manualOrder.awaiting })

export const getManualOrderProvince = (data) =>
    list({ entity: provinceEntity, data, url: API_SERVICES.manualOrder.provinceOrder })

export const getManualOrderWarehouseLogs = (data) =>
    list({ entity: exitEntity, data, url: API_SERVICES.manualOrder.warehouseExit.list })

export const createManualOrderWarehouseExitRecord = (data) =>
    postRequest({ data, url: API_SERVICES.manualOrder.warehouseExit.create })

export const exitOrderManualWarehouse = (data) =>
    postRequest({ data, url: API_SERVICES.manualOrder.warehouseExit.exit })

export const revertOrderManualWarehouse = (data) =>
    postRequest({ data, url: API_SERVICES.manualOrder.warehouseExit.revert })

export const manualOrderWarehouseExitLastOrder = (data) =>
    item({ entity: lastOrderEntity, data, url: API_SERVICES.manualOrder.warehouseExit.lastOrder })

export const sendToBarcodeReader = (data) =>
    postRequest({ data, url: API_SERVICES.manualOrder.warehouseExit.barcodeReader })

export const getBarcodeStatus = (data) =>
    list({ entity: barcodeStatusEntity, data, url: API_SERVICES.order.checkEshtehardBarcodeStatus })

export const getManualOrderTypeList = () =>
    getRequest({ entity: typeEntity, url: API_SERVICES.filters.manualOrderType })

export const getPostDelivery = (data) =>
    item({ entity: postEntity, data, url: API_SERVICES.manualOrder.warehouseExit.getPostDelivery })

export const setPostDelivery = (data) =>
    postRequest({ data, url: API_SERVICES.manualOrder.warehouseExit.setPostDelivery })