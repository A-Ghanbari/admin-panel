import API_SERVICES from "tools/shared/apis"
import { item, list, postRequest } from "tools/requests"
import {
    BRAND as brandEntity,
    GROUP as groupEntity,
    GROUP_COLOR as groupColorEntity,
    GROUP_ATTRIBUTE as groupAttributeEntity,
    GROUP_PARENT_ATTRIBUTE as groupParentAttributeEntity,
    PRODUCT_COLOR as colorEntity,
    PRODUCT_FILE as fileEntity,
    PRODUCT_CART as productCartEntity,
    PRODUCT_COMMERCE as productCommerceEntity,
    PRODUCT as productEntity,
    PRODUCT_ATTRIBUTE as attributeEntity,
    PRODUCT_ATTRIBUTE_LIST as attributeListEntity,
    PRODUCT_MODIFY_LOG as modifyLogEntity,
    BRAND_WITH_PRODUCT_LIST as brandWithProductEntity,
    PRODUCT_LOG as logEntity,
} from "tools/utils/entities"
import { createAction } from "@reduxjs/toolkit"

export const getBrands = (data) =>
    list({ entity: brandEntity, data, url: API_SERVICES.product.brand.list })

export const createBrand = (data) =>
    postRequest({ data, url: API_SERVICES.product.brand.create })

export const editBrand = (data) =>
    postRequest({ data, url: API_SERVICES.product.brand.edit })

export const deleteBrand = (data) =>
    postRequest({ data, url: API_SERVICES.product.brand.delete })

export const getGroups = (data) =>
    list({ entity: groupEntity, data, url: API_SERVICES.product.group.list })

export const createGroup = (data) =>
    postRequest({ data, url: API_SERVICES.product.group.create })

export const editGroup = (data) =>
    postRequest({ data, url: API_SERVICES.product.group.edit })

export const deleteGroup = (data) =>
    postRequest({ data, url: API_SERVICES.product.group.delete })

export const getGroupColors = (data) =>
    list({
        entity: groupColorEntity,
        data,
        url: API_SERVICES.product.group.colorList,
    })

export const createGroupColor = (data) =>
    postRequest({ data, url: API_SERVICES.product.group.createColor })

export const getGroupAttribute = (data) =>
    list({ entity: groupAttributeEntity, data, url: API_SERVICES.product.group.atrributes })

export const editGroupAttribute = (data) =>
    postRequest({ data, url: API_SERVICES.product.group.editAtrribute })

export const deleteGroupAttribute = (data) =>
    postRequest({ data, url: API_SERVICES.product.group.deleteAttribute })

export const getGroupParentAttribute = (data) =>
    list({
        entity: groupParentAttributeEntity,
        data,
        url: API_SERVICES.product.group.parentAttribute,
    })

export const createGroupAttribute = (data) =>
    postRequest({ data, url: API_SERVICES.product.group.createAtrribute })

export const deleteGroupColor = (data) =>
    postRequest({ data, url: API_SERVICES.product.group.deleteColor })

export const getColors = (data) =>
    list({ entity: colorEntity, data, url: API_SERVICES.product.color.list })

export const createProductColor = (data) =>
    postRequest({ data, url: API_SERVICES.product.color.create })

export const editProductColor = (data) =>
    postRequest({ data, url: API_SERVICES.product.color.edit })

export const deleteColorFromProduct = (data) =>
    postRequest({ data, url: API_SERVICES.product.color.deleteProductColor })

export const deleteProductColor = (data) =>
    postRequest({ data, url: API_SERVICES.product.color.delete })

export const getFiles = (data) =>
    list({ entity: fileEntity, data, url: API_SERVICES.product.file.list })

export const createFile = (data) =>
    postRequest({ data, url: API_SERVICES.product.file.create })

export const editFile = (data) =>
    postRequest({ data, url: API_SERVICES.product.file.edit })

export const deleteFile = (data) =>
    postRequest({ data, url: API_SERVICES.product.file.delete })

export const getProducts = (data) =>
    list({ entity: productEntity, data, url: API_SERVICES.product.list.list })

export const getProductCart = (data) =>
    list({ entity: productCartEntity, data, url: API_SERVICES.product.list.cart })

export const setProductMaxCart = (data) =>
    postRequest({ data, url: API_SERVICES.product.list.maxCart })

export const createProduct = (data) =>
    postRequest({ data, url: API_SERVICES.product.list.create })

export const getProductCommerces = (data) =>
    list({
        entity: productCommerceEntity,
        data,
        url: API_SERVICES.product.list.commerce,
    })

export const editProductsCommerceCount = (data) =>
    postRequest({ data, url: API_SERVICES.product.list.changeCommerce })

export const editProductsPrice = (data) =>
    postRequest({ data, url: API_SERVICES.product.list.changePrice })

export const editProduct = (data) =>
    postRequest({ data, url: API_SERVICES.product.list.edit })

export const editProductWarehouse = (data) =>
    postRequest({ data, url: API_SERVICES.product.list.warehouse })

export const deleteProduct = (data) =>
    postRequest({ data, url: API_SERVICES.product.list.delete })

export const getProductsAttributes = (data) =>
    list({
        entity: attributeEntity,
        data,
        url: API_SERVICES.product.attribute.list,
    })

export const editProductAttribute = (data) =>
    postRequest({ data, url: API_SERVICES.product.attribute.edit })

export const createProductAttribute = (data) =>
    postRequest({ data, url: API_SERVICES.product.attribute.create })

export const deleteProductAttribute = (data) =>
    postRequest({ data, url: API_SERVICES.product.attribute.delete })

export const getProductsAttributeList = (data) =>
    list({
        entity: attributeListEntity,
        data,
        url: API_SERVICES.product.attribute.list,
    })

export const getProductsModifyLogs = (data) =>
    list({
        entity: modifyLogEntity,
        data,
        url: API_SERVICES.product.modifyLog.list,
    })

export const getProductsLog = (data) =>
    list({ entity: logEntity, data, url: API_SERVICES.product.log.list })

export const getBrandWithProduct = (data) =>
    item({
        entity: brandWithProductEntity,
        data,
        url: API_SERVICES.product.brand.withProductList,
    })

export const getProductPriceInfo = (data) =>
    postRequest({ data, url: API_SERVICES.product.list.list })

export const productPriceInfo = createAction("PRODUCT_PRICE_INFO")
