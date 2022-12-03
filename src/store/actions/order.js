import API_SERVICES from "tools/shared/apis"
import {
    ORDER as entity,
    ORDER_BARCODE_STATUS as barcodeStatusEntity,
    ORDER_WAREHOUSE_EXIT_LOG as exitEntity,
    ORDER_WAREHOUSE_EXIT_POST_DELIVERY as postEntity,
    ORDER_WAREHOUSE_EXIT_WAITING_LIST as waitingEntity,
    ORDER_WAREHOUSE_EXIT_LAST_ORDER as lastOrderEntity,
    PROVINCE_ORDER as provinceEntity
} from "tools/utils/entities"
import { list, item, postRequest } from 'tools/requests'

export const getItems = (data) =>
    list({ entity, data, url: API_SERVICES.order.list });

export const getItem = (data) =>
    item({ entity, data, url: API_SERVICES.order.detail })

// for clear redux value
export const clearItem = () => {
    return (dispatch => {
        dispatch({
            type: "ORDER",
            payload: { data: {} }
        })
    })
}

export const getOrderInfo = (data) =>
    item({ entity, data, url: API_SERVICES.order.info })

export const getBarcodeStatus = (data) =>
    list({ entity: barcodeStatusEntity, data, url: API_SERVICES.order.checkEshtehardBarcodeStatus })

export const createManualOrder = (data) =>
    postRequest({ data, url: API_SERVICES.manualOrder.create })

export const editOrderInfo = (data) =>
    postRequest({ data, url: API_SERVICES.order.edit })

export const changeOrderStatus = (data) =>
    postRequest({ data, url: API_SERVICES.order.changeStatus })

export const getOrderWarehouseLogs = (data) =>
    list({ entity: exitEntity, data, url: API_SERVICES.order.warehouseExit.list })

export const getOrderWarehouseLog = (data) =>
    item({ entity: exitEntity, data, url: API_SERVICES.order.warehouseExit.list })

export const getOrderWarehouseWaitingList = (data) =>
    item({ entity: waitingEntity, data, url: API_SERVICES.order.warehouseExit.waitingList })

export const createOrderWarehouseExitRecord = (data) =>
    postRequest({ data, url: API_SERVICES.order.warehouseExit.create })

export const orderWarehouseExitLastOrder = (data) =>
    item({ entity: lastOrderEntity, data, url: API_SERVICES.order.warehouseExit.lastOrder })

export const exitOrderWarehouse = (data) =>
    postRequest({ data, url: API_SERVICES.order.warehouseExit.exit })

export const revertOrderWarehouse = (data) =>
    postRequest({ data, url: API_SERVICES.order.warehouseExit.revert })

export const sendToBarcodeReader = (data) =>
    postRequest({ data, url: API_SERVICES.order.warehouseExit.barcodeReader })

export const getProvinceOrderList = (data) =>
    list({ entity: provinceEntity, data, url: API_SERVICES.order.provinceOrder.list })

export const getPostDelivery = (data) =>
    item({ entity: postEntity, data, url: API_SERVICES.order.warehouseExit.getPostDelivery })

export const setPostDelivery = (data) =>
    postRequest({ data, url: API_SERVICES.order.warehouseExit.setPostDelivery })