import { item, list, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import { FREQUENTLY_QUESTION as entity } from "tools/utils/entities"

export const getItems = (data) =>
    list({ entity, data, url: API_SERVICES.FAQ.list })

export const getItem = (data) =>
    item({ entity, data, url: API_SERVICES.FAQ.detail })

export const createFrequentQuestion = (data) =>
    postRequest({ data, url: API_SERVICES.FAQ.create })

export const editFrequentQuestion = (data) =>
    postRequest({ data, url: API_SERVICES.FAQ.edit })

export const deleteFrequentQuestion = (data) =>
    postRequest({ data, url: API_SERVICES.FAQ.delete })