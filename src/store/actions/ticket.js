import API_SERVICES from "tools/shared/apis"
import { getRequest, item, list, postRequest } from "tools/requests"
import {
    TICKET as entity,
    TICKET_OPERATOR as operatorEntity,
    TICKET_TYPE as typeEntity,
    TICKET_CATEGORY as categoryEntity,
    TICKET_ROLE as roleEntity,
    TICKET_CLOSE as closeEntity,
    TICKET_TEMPLATE as templateEntity,
    TICKET_POINT as pointEntity,
    TICKET_MESSAGE as messageEntity,
} from "tools/utils/entities"

export const getCustomerTickets = (data) =>
    list({ entity, data, url: API_SERVICES.ticket.list.list })

export const getTicketsOperators = () =>
    getRequest({ entity: operatorEntity, url: API_SERVICES.ticket.operator })

// There is conflict in service type and method, unfortunately we should use an exception here
export const getTicketsTypes = () =>
    list({ method: "GET", entity: typeEntity, url: API_SERVICES.ticket.ticketType })

export const ticketChangeStatus = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.list.changeStatus })

export const ticketChangeTicketType = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.list.changeTicketType })

export const responseForTicket = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.list.responseForTicket })

export const getCustomerTicketsMessages = (data) =>
    item({ entity: messageEntity, data, url: API_SERVICES.ticket.list.messages })

export const getTicketsCategory = (data) =>
    list({ entity: categoryEntity, data, url: API_SERVICES.ticket.category.list })

export const getTicketsRoles = (data) =>
    list({ entity: roleEntity, data, url: API_SERVICES.ticket.roles.list })

export const createTicketsRoles = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.roles.create })

export const deleteTicketsRoles = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.roles.delete })

export const getTicketsClose = (data) =>
    list({ entity: closeEntity, data, url: API_SERVICES.ticket.close })

export const getTicketsPoint = (data) =>
    list({ entity: pointEntity, data, url: API_SERVICES.ticket.point.list })

export const createTicketsPoint = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.point.create })

export const editTicketsPoint = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.point.edit })

export const deleteTicketsPoint = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.point.delete })

export const createSingleTicket = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.single.create })

export const getTicketsTemplate = (data) =>
    list({ entity: templateEntity, data, url: API_SERVICES.ticket.template.list })

export const deleteTicketsTemplate = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.template.delete })

export const editTicketsTemplate = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.template.edit })

export const createTicketsTemplate = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.template.create })

export const deleteTicketsCategory = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.category.delete })

export const createTicketsCategory = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.category.create })

export const editTicketsCategory = (data) =>
    postRequest({ data, url: API_SERVICES.ticket.category.edit })