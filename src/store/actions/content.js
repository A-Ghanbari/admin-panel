import { itemList, list, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import {
    CONTACT_US_MESSAGE as contactUsEntity,
    CONTENT_POSITION as positionEntity,
    CONTENT_SLIDER as sliderEntity
} from "tools/utils/entities"


export const getContactUsMessages = (data) =>
    list({ entity: contactUsEntity, data, url: API_SERVICES.content.contactUs.list })

export const getContactUsMessageDetail = (data) =>
    itemList({ entity: contactUsEntity, data, url: API_SERVICES.content.contactUs.list })

export const getContentPositions = (data) =>
    list({ entity: positionEntity, data, url: API_SERVICES.content.position.list })

export const getContentPosition = (data) =>
    itemList({ entity: positionEntity, data, url: API_SERVICES.content.position.list })

export const createContentPosition = (data) =>
    postRequest({ data, url: API_SERVICES.content.position.create })

export const editContentPosition = (data) =>
    postRequest({ data, url: API_SERVICES.content.position.edit })

export const deleteContentPosition = (data) =>
    postRequest({ data, url: API_SERVICES.content.position.delete })

export const getContentSliders = (data) =>
    list({ entity: sliderEntity, data, url: API_SERVICES.content.slider.list })

export const getContentSlider = (data) =>
    list({ entity: sliderEntity, data, url: API_SERVICES.content.slider.detail })

export const createContentSlider = (data) =>
    postRequest({ data, url: API_SERVICES.content.slider.create })

export const editContentSlider = (data) =>
    postRequest({ data, url: API_SERVICES.content.slider.edit })

export const deleteContentSlider = (data) =>
    postRequest({ data, url: API_SERVICES.content.slider.delete })

export const changeSortContentSliderProducts = (data) =>
    postRequest({ data, url: API_SERVICES.content.slider.changeSort })

export const deleteContentSliderProduct = (data) =>
    postRequest({ data, url: API_SERVICES.content.slider.deleteProuduct })