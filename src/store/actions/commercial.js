import { createAction } from "@reduxjs/toolkit"
import { dispatch } from "store"
import { getRequest, list, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import {
    SUPPLIER as supplierEntity,
    SUPPLIER_LIST as supplierListEntity,
    SUPPLIER_WAREHOUSE as supplierWarehouseEntity,
    COMMERCIAL_REQUEST as requestEntity,
    COMMERCIAL_DISCOUNT as discountEntity,
    MANAGEMENT_REQUEST as managementRequestEntity,
    COMMERCIAL_PRICING as pricingEntity,
    FINANCIAL_REQUEST as financialRequestEntity,
    WAREHOUSE_REQUEST as warehouseRequestEntity,
    DISCOUNT_DRAFT as discountDraftEntity,
} from "tools/utils/entities"

export const getSuppliers = (data) =>
    list({ entity: supplierEntity, data, url: API_SERVICES.commercial.supplier.list })

export const getSuppliersList = () =>
    getRequest({ entity: supplierListEntity, url: API_SERVICES.commercial.supplier.listDDL })

export const getSuppliersWarehouse = (data) =>
    list({ entity: supplierWarehouseEntity, data, url: API_SERVICES.commercial.supplier.warehouses })

export const getCommercialRequest = (data) =>
    list({ entity: requestEntity, data, url: API_SERVICES.commercial.request.list })

export const getCommercialDiscount = (data) =>
    list({ entity: discountEntity, data, url: API_SERVICES.commercial.discount.list })

export const getCommercialDiscountDrafts = (data) =>
    list({ entity: discountDraftEntity, data, url: API_SERVICES.commercial.discount.listDrafts })

export const editCommercialDiscountProduct = (data) =>
    postRequest({ data, url: API_SERVICES.commercial.discount.productEdit })

export const deleteCommercialDiscountProduct = (data) =>
    postRequest({ data, url: API_SERVICES.commercial.discount.productDelete })

export const discountDraftData = createAction("DISCOUNT_DRAFT_DATA")

export const clearDiscountDraftData = () => {
    dispatch({ type: "DISCOUNT_DRAFT_DATA", payload: [] })
    dispatch({ type: "DISCOUNT_DRAFTS", payload: [] })
}

export const createCommercialDiscount = (data) =>
    postRequest({ data, url: API_SERVICES.commercial.discount.create })

export const settingEditCommercialDiscount = (data) =>
    postRequest({ data, url: API_SERVICES.commercial.discount.settingEdit })

export const deleteCommercialDiscount = (data) =>
    postRequest({ data, url: API_SERVICES.commercial.discount.delete })

export const getManagementRequest = (data) =>
    list({ entity: managementRequestEntity, data, url: API_SERVICES.commercial.managementRequest.list })

export const getCommercialPricing = (data) =>
    list({ entity: pricingEntity, data, url: API_SERVICES.commercial.pricing.list })

export const getFinancialRequest = (data) =>
    list({ entity: financialRequestEntity, data, url: API_SERVICES.commercial.financialRequest.list })

export const getWarehouseRequest = (data) =>
    list({ entity: warehouseRequestEntity, data, url: API_SERVICES.commercial.warehouseRequest.list })
