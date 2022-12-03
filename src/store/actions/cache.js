import API_SERVICES from 'tools/shared/apis'
import { cacheRequest } from 'tools/requests'
import { BRANDS, GROUPS, CITIES, PROVINCES, PERIOD } from "tools/shared/constants"
import {
    BRAND_LIST as brandListEntity,
    GROUP_LIST as groupListEntity,
    CITY_LIST as cityEntity,
    PROVINCE_LIST as provinceEntity,
    PRIOD_LIST as periodEntity,
} from "tools/utils/entities"

export const getBrandsList = (data) =>
    cacheRequest({ entity: brandListEntity, name: BRANDS, data, url: API_SERVICES.product.brand.list })

export const getGroupsList = (data) =>
    cacheRequest({ entity: groupListEntity, name: GROUPS, data, url: API_SERVICES.product.group.list })

export const getProvinceList = () =>
    cacheRequest({ entity: provinceEntity, name: PROVINCES, url: API_SERVICES.public.provinces })

export const getCitiesList = (data) =>
    cacheRequest({ entity: cityEntity, name: CITIES, data, url: API_SERVICES.public.cities })

export const getPeriodsList = (data) =>
    cacheRequest({ entity: periodEntity, name: PERIOD, data, url: API_SERVICES.public.periodList })
