import API_SERVICES from "tools/shared/apis"
import {
    LEADER_BOARD as leaderBoardEntity,
    LEADER_BOARD_INFO as leaderBoardInfoEntity,
    REAGENT_CONDITION as reagentConditionEntity,
    LOGIN_COUNT as loginCountEntity,
    PROFILE_CONDITION as profileConditionEntity,
    ORDER_CONDITION as orderConditionEntity,
    PRICE_CONDITION as priceConditionEntity,
    GAMES_LIST as gamesListEntity,
    GAMES_INFO as gamesInfoEntity,
    GAME_CONDITION as gameConditionEntity,
    PRIZE_CONDITION as prizeConditionEntity,
    PRIZES_LIST as prizesListEntity,
    PRIZES_INFO as prizesInfoEntity,
    EVENTS_LIST as eventsListEntity,
    PRODUCTS_CONDITION as productsConditionEntity,
    GAME_PRIZE as gamePrizeEntity,
    DISCOUNT_PRIZE as discountPrizeEntity,
    QUESTIONNAIRE_CONDITION as questionnaireConditionEntity,
    CUSTOMER_DISCOUNT as customerDiscountEntity,
} from "tools/utils/entities"
import { item, list, postRequest } from 'tools/requests'

export const getLeaderBoardList = (data) =>
    list({ entity: leaderBoardEntity, data, url: API_SERVICES.leaderBoard.list })

export const getLeaderBoardInfo = (data) =>
    item({ entity: leaderBoardInfoEntity, data, url: API_SERVICES.leaderBoard.detail })

export const createLeaderBoard = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.create })

export const editLeaderBoard = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.edit })

export const deleteLeaderBoard = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.delete })

export const getReagentConditionList = (data) =>
    list({ entity: reagentConditionEntity, data, url: API_SERVICES.leaderBoard.conditions.reagentCode.list })

export const createReagentCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.reagentCode.create })

export const editReagentCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.reagentCode.edit })

export const deleteReagentCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.reagentCode.delete })

export const getLoginCountList = (data) =>
    list({ entity: loginCountEntity, data, url: API_SERVICES.leaderBoard.conditions.login.list })

export const createLoginCount = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.login.create })

export const editLoginCount = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.login.edit })

export const deleteLoginCount = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.login.delete })

export const getProfileConditionList = (data) =>
    list({ entity: profileConditionEntity, data, url: API_SERVICES.leaderBoard.conditions.profile.list })

export const createProfileCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.profile.create })

export const editProfileCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.profile.edit })

export const deleteProfileCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.profile.delete })

export const getOrderConditionList = (data) =>
    list({ entity: orderConditionEntity, data, url: API_SERVICES.leaderBoard.conditions.orderCount.list })

export const createOrderCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.orderCount.create })

export const editOrderCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.orderCount.edit })

export const deleteOrderCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.orderCount.delete })

export const getPriceConditionList = (data) =>
    list({ entity: priceConditionEntity, data, url: API_SERVICES.leaderBoard.conditions.orderPrice.list })

export const createPriceCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.orderPrice.create })

export const editPriceCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.orderPrice.edit })

export const deletePriceCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.orderPrice.delete })

export const getGamesList = (data) =>
    list({ entity: gamesListEntity, data, url: API_SERVICES.leaderBoard.games.list })

export const getGamesInfo = (data) =>
    item({ entity: gamesInfoEntity, data, url: API_SERVICES.leaderBoard.games.detail })

export const createGames = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.games.create })

export const editGames = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.games.edit })

export const deleteGames = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.games.delete })

export const getGameConditionList = (data) =>
    list({ entity: gameConditionEntity, data, url: API_SERVICES.leaderBoard.conditions.game.list })

export const createGameCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.game.create })

export const editGameCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.game.edit })

export const deleteGameCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.game.delete })

export const getPrizeConditionList = (data) =>
    list({ entity: prizeConditionEntity, data, url: API_SERVICES.leaderBoard.conditions.prize.list })

export const createPrizeCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.prize.create })

export const editPrizeCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.prize.edit })

export const deletePrizeCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.prize.delete })

export const getPrizesList = (data) =>
    list({ entity: prizesListEntity, data, url: API_SERVICES.leaderBoard.prizes.list })

export const getPrizesInfo = (data) =>
    item({ entity: prizesInfoEntity, data, url: API_SERVICES.leaderBoard.prizes.detail })

export const createPrizes = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.prizes.create })

export const editPrizes = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.prizes.edit })

export const deletePrizes = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.prizes.delete })

export const getEventsList = (data) =>
    list({ entity: eventsListEntity, data, url: API_SERVICES.leaderBoard.events.list })

export const deleteEvents = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.events.delete })

export const getproductsCondition = (data) =>
    list({ entity: productsConditionEntity, data, url: API_SERVICES.leaderBoard.conditions.products.list })

export const deleteproductsCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.products.delete })

export const deleteproductCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.products.deleteProduct })

export const getGamePrizeList = (data) =>
    list({ entity: gamePrizeEntity, data, url: API_SERVICES.leaderBoard.gamePrize.list })

export const createGamePrize = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.gamePrize.create })

export const editGamePrize = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.gamePrize.edit })

export const deleteGamePrize = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.gamePrize.delete })

export const getDiscountPrizeList = (data) =>
    list({ entity: discountPrizeEntity, data, url: API_SERVICES.leaderBoard.discountPrize.list })

export const createDiscountPrize = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.discountPrize.create })

export const editDiscountPrize = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.discountPrize.edit })

export const deleteDiscountPrize = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.discountPrize.delete })

export const getQuestionnaireConditionList = (data) =>
    list({ entity: questionnaireConditionEntity, data, url: API_SERVICES.leaderBoard.conditions.questionnaire.list })

export const createQuestionnaireCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.questionnaire.create })

export const deleteQuestionnaireCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.questionnaire.delete })

export const editQuestionnaireCondition = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoard.conditions.questionnaire.edit })

export const getCustomerDiscountList = (data) =>
    list({ entity: customerDiscountEntity, data, url: API_SERVICES.leaderBoardDiscount.list })

export const createDiscountForCustomer = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoardDiscount.create })

export const deleteDiscountForCustomer = (data) =>
    postRequest({ data, url: API_SERVICES.leaderBoardDiscount.delete })