import API_SERVICES from "tools/shared/apis"
import {
    LANDING_PAGE as landingPageEntity,
} from "tools/utils/entities"
import { list, postRequest } from 'tools/requests'


export const getLandingPageList = (data) =>
    list({ entity: landingPageEntity, data, url: API_SERVICES.landingPage.list })

export const createLandingPage = (data) =>
    postRequest({ data, url: API_SERVICES.landingPage.create })

export const editLandingPage = (data) =>
    postRequest({ data, url: API_SERVICES.landingPage.edit })

export const deleteLandingPage = (data) =>
    postRequest({ data, url: API_SERVICES.landingPage.delete })

