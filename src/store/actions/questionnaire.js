import { item, list, postRequest } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import {
    QUESTIONNAIRE_GROUP as questionnaireGroupEntity,
    QUESTIONNAIRE_QA as questionnaireQAEntity,
    QUESTIONNAIRE_QA_DETAIL as questionnaireQADetailEntity,
    QUESTIONNAIRE_GROUP_DETAIL as questionnaireGroupDetailEntity
} from 'tools/utils/entities'


export const getQuestionnaireGroupList = (data) =>
    list({ entity: questionnaireGroupEntity, data, url: API_SERVICES.questionnaire.questionnaireGroup.list })

export const getQuestionnaireGroupDetail = (data) =>
    item({ entity: questionnaireGroupDetailEntity, data, url: API_SERVICES.questionnaire.questionnaireGroup.detail })

export const createQuestionnaireGroup = (data) =>
    postRequest({ data, url: API_SERVICES.questionnaire.questionnaireGroup.create })

export const editQuestionnaireGroup = (data) =>
    postRequest({ data, url: API_SERVICES.questionnaire.questionnaireGroup.edit })

export const deleteQuestionnaireGroup = (data) =>
    postRequest({ data, url: API_SERVICES.questionnaire.questionnaireGroup.delete })

export const getQuestionnaireQAList = (data) =>
    list({ entity: questionnaireQAEntity, data, url: API_SERVICES.questionnaire.questionnaireQA.list })

export const getQuestionnaireQADetail = (data) =>
    item({ entity: questionnaireQADetailEntity, data, url: API_SERVICES.questionnaire.questionnaireQA.detail })

export const createQuestionnaireQA = (data) =>
    postRequest({ data, url: API_SERVICES.questionnaire.questionnaireQA.create })

export const editQuestionnaireQA = (data) =>
    postRequest({ data, url: API_SERVICES.questionnaire.questionnaireQA.edit })

export const deleteQuestionnaireQA = (data) =>
    postRequest({ data, url: API_SERVICES.questionnaire.questionnaireQA.delete })
