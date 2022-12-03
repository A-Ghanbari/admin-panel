import { createReducer } from "@reduxjs/toolkit"

export const tickets = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { TICKETS: (state, { payload }) => payload }
)

export const ticketMessage = createReducer(
    { data: {} },
    { TICKET_MESSAGE: (state, { payload }) => payload }
)

export const ticketTypes = createReducer(
    { dataList: [] },
    { TICKET_TYPES: (state, { payload }) => payload }
)

export const ticketOperator = createReducer(
    { data: [] },
    { TICKET_OPERATOR: (state, { payload }) => payload }
)

export const ticketCategories = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { TICKET_CATEGORIES: (state, { payload }) => payload }
)

export const ticketRoles = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { TICKET_ROLES: (state, { payload }) => payload }
)

export const ticketCloses = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { TICKET_ClOSES: (state, { payload }) => payload }
)

export const ticketPoints = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { TICKET_POINTS: (state, { payload }) => payload }
)

export const ticketTemplates = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { TICKET_TEMPLATES: (state, { payload }) => payload }
)