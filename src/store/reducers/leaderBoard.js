import { createReducer } from "@reduxjs/toolkit"

export const leaderBoards = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { LEADER_BOARDS: (state, { payload }) => payload }
)

export const leaderBoardInfo = createReducer(
    { data: {} },
    { LEADER_BOARD_INFO: (state, { payload }) => payload }
)

export const reagentConditions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { REAGENT_CONDITIONS: (state, { payload }) => payload }
)

export const loginCounts = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { LOGIN_COUNTS: (state, { payload }) => payload }
)

export const profileConditions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PROFILE_CONDITIONS: (state, { payload }) => payload }
)

export const orderConditions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { ORDER_CONDITIONS: (state, { payload }) => payload }
)

export const priceConditions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRICE_CONDITIONS: (state, { payload }) => payload }
)

export const gamesLists = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { GAMES_LISTS: (state, { payload }) => payload }
)

export const gamesInfo = createReducer(
    { data: {} },
    { GAMES_INFO: (state, { payload }) => payload }
)

export const gameConditions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { GAME_CONDITIONS: (state, { payload }) => payload }
)

export const prizeConditions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRIZE_CONDITIONS: (state, { payload }) => payload }
)
export const prizesLists = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRIZES_LISTS: (state, { payload }) => payload }
)
export const prizesInfo = createReducer(
    { data: {} },
    { PRIZES_INFO: (state, { payload }) => payload }
)
export const eventsLists = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { EVENTS_LISTS: (state, { payload }) => payload }
)
export const productsConditions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { PRODUCTS_CONDITIONS: (state, { payload }) => payload }
)
export const gamePrizes = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { GAME_PRIZES: (state, { payload }) => payload }
)
export const discountPrizes = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { DISCOUNT_PRIZES: (state, { payload }) => payload }
)
export const questionnaireConditions = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { QUESTIONNAIRE_CONDITIONS: (state, { payload }) => payload }
)

export const customerDiscounts = createReducer(
    { dataList: [], pageIndex: 0, pageSize: 0, totalRecords: 0 },
    { CUSTOMER_DISCOUNTS: (state, { payload }) => payload }
)

