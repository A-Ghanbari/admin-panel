import API_SERVICES from "tools/shared/apis"
import {
    POST_BRANCH as entity,
    POST_DDL_BRANCH as DDLentity,
    POST_COMPANY as postEntity
} from "tools/utils/entities"
import { list, item, postRequest } from 'tools/requests'

export const getItems = (data) =>
    list({ entity, data, url: API_SERVICES.post.branches.list })

export const getDDLPostBranches = (data) =>
    list({ entity: DDLentity, data, url: API_SERVICES.post.branches.listDDL })

export const getPostCompanies = (data) =>
    list({ entity: postEntity, data, url: API_SERVICES.post.companies.list })

export const createPostCompanies = (data) =>
    postRequest({ data, url: API_SERVICES.post.companies.create })

export const editPostCompanies = (data) =>
    postRequest({ data, url: API_SERVICES.post.companies.edit })

export const deletePostCompanies = (data) =>
    postRequest({ data, url: API_SERVICES.post.companies.delete })