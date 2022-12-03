import { list, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import { COMMENT as entity } from "tools/utils/entities"

export const getCommentsList = (data) =>
    list({ entity, data, url: API_SERVICES.comment.list })

export const changeCommentStatus = (data) =>
    postRequest({ entity, data, url: API_SERVICES.comment.changeStatus })

export const responseForComment = (data) =>
    postRequest({ entity, data, url: API_SERVICES.comment.responseForComment })