import API_SERVICES from "tools/shared/apis"
import {
    REAGENT_CODE as reagentEntity,
    DISCOUNT as discountEntity,
    DISCOUNT_PRODUCT as discountProductEntity,
    DISCOUNT_CUSTOMER as discountCustomerEntity,
    DISCOUNT_CITY as discountCityEntity,
    DISCOUNT_SUPPLIER as discountsupplierEntity,
    CAMPAIGN as campaignEntity,
    DISCOUNT_CART as discountCartEntity,
    DISCOUNT_ORDER as discountOrderEntity
} from "tools/utils/entities"
import { list, postRequest } from 'tools/requests'

export const getReagentCodeList = (data) =>
    list({ entity: reagentEntity, data, url: API_SERVICES.marketing.reagentCode.list })

export const getDiscountList = (data) =>
    list({ entity: discountEntity, data, url: API_SERVICES.marketing.discount.basic.list })

export const getDiscountProductList = (data) =>
    list({ entity: discountProductEntity, data, url: API_SERVICES.marketing.discount.product.list })

export const createDiscountProduct = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.product.create })

export const deleteDiscountProduct = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.product.delete })

export const getDiscountCustomerList = (data) =>
    list({ entity: discountCustomerEntity, data, url: API_SERVICES.marketing.discount.customer.list })

export const createDiscountCustomer = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.customer.create })

export const deleteDiscountCustomer = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.customer.delete })
    
export const getDiscountCityList = (data) =>
    list({ entity: discountCityEntity, data, url: API_SERVICES.marketing.discount.city.list })

export const createDiscountCity = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.city.create })

export const deleteDiscountCity = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.city.delete })

export const getDiscountSupplierList = (data) =>
    list({ entity: discountsupplierEntity, data, url: API_SERVICES.marketing.discount.supplier.list })

export const createDiscountSupplier = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.supplier.create })

export const deleteDiscountSupplier = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.supplier.delete })

export const getCampaignList = (data) =>
    list({ entity: campaignEntity, data, url: API_SERVICES.marketing.campaign.list })


export const getDiscountCartList = (data) =>
    list({ entity: discountCartEntity, data, url: API_SERVICES.marketing.discount.cart.list })

export const createDiscountCart = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.cart.create })

export const deleteDiscountCart = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.cart.delete })

export const getDiscountOrderList = (data) =>
    list({ entity: discountOrderEntity, data, url: API_SERVICES.marketing.discount.order.list })

export const createDiscountOrder = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.order.create })

export const deleteDiscountOrder = (data) =>
    postRequest({ data, url: API_SERVICES.marketing.discount.order.delete })