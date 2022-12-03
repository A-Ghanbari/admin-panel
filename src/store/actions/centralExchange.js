import API_SERVICES from "tools/shared/apis"
import {
    CENTRAL_EXCHANGE as entity,
    CENTRAL_EXCHANGE_WORKER as workerEntity,
    CENTRAL_EXCHANGE_BOX as boxEntity,
} from "tools/utils/entities"
import { list, item, postRequest } from 'tools/requests'

export const exitPalette = (data) =>
    postRequest({ data, url: API_SERVICES.centralExchange.exchangePallet.exit })

export const getItems = (data) =>
    list({ entity, data, url: API_SERVICES.centralExchange.exchangePallet.list })

export const getItem = (data) =>
    item({ entity, data, url: API_SERVICES.centralExchange.exchangePallet.list })

export const deleteCentralExchangeSinglePallet = (data) =>
    postRequest({ data, url: API_SERVICES.centralExchange.exchangePallet.delete })

export const getCentralExchangeBarcode = (data) => {
    postRequest({ method: "GET", url: API_SERVICES.centralExchange.exchangePallet.barcode + data.ID })
}

export const getCentralExchangeWorkerList = (data) =>
    list({ method: "GET", entity: workerEntity, data, url: API_SERVICES.centralExchange.exchangePallet.listWorker })

export const getCentralExchangeBoxItems = (data) =>
    list({ entity: boxEntity, data, url: API_SERVICES.centralExchange.exchangeBox.list })

export const getCentralExchangeBoxItem = (data) =>
    item({ entity: boxEntity, data, url: API_SERVICES.centralExchange.exchangeBox.list })