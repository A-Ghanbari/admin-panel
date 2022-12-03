import _ from "lodash"
import pluralize from "pluralize"

export function getEntityMeta(name) {
    const upperName = _.snakeCase(name).toUpperCase()
    const pluralizeName = pluralize(name)
    const pluralizeUpperName = _.snakeCase(pluralizeName).toUpperCase()
    const routeName = _.kebabCase(name)

    return { name, upperName, pluralizeName, pluralizeUpperName, routeName }
}

export const USER = getEntityMeta("user")

export const ORDER = getEntityMeta("order")
export const ORDER_BARCODE_STATUS = getEntityMeta("orderBarcodeStatus")

export const SALES_WIDGET = getEntityMeta("salesWidget")
export const WAREHOUSE_WIDGET = getEntityMeta("warehouseWidget")
export const CART_BANK_WIDGET = getEntityMeta("cartBankWidget")

export const MANAGEMENT_REPORT_WAREHOUSE = getEntityMeta("managementReportWarehouse")
export const MANAGEMENT_REPORT_INVOICE = getEntityMeta("managementReportInvoice")
export const MANAGEMENT_REPORT_CHARGE = getEntityMeta("managementReportCharge")

export const ORDER_WAREHOUSE_EXIT_LOG = getEntityMeta("orderWarehouseExitLog")
export const ORDER_WAREHOUSE_EXIT_POST_DELIVERY = getEntityMeta("orderWarehouseExitPostDelivery")
export const ORDER_WAREHOUSE_EXIT_WAITING_LIST = getEntityMeta("orderWarehouseExitWaitingList")
export const ORDER_WAREHOUSE_EXIT_LAST_ORDER = getEntityMeta("orderWarehouseExitLastOrder")

export const PROVINCE_ORDER = getEntityMeta("provinceOrder")

export const MANUAL_ORDER = getEntityMeta("manualOrder")
export const MANUAL_ORDER_TYPE = getEntityMeta("manualOrderType")
export const MANUAL_ORDER_WAREHOUSE_EXIT = getEntityMeta("manualOrderWarehouseExit")
export const MANUAL_ORDER_WAREHOUSE_EXIT_POST_DELIVERY = getEntityMeta("manualOrderWarehouseExitPostDelivery")
export const MANUAL_ORDER_WAREHOUSE_EXIT_LAST_ORDER = getEntityMeta("manualOrderWarehouseExitLastOrder")
export const MANUAL_ORDER_PROVINCE = getEntityMeta("manualOrderProvince")
export const MANUAL_ORDER_AWAITING = getEntityMeta("manualOrderAwaiting")
export const MANUAL_ORDER_BARCODE_STATUS = getEntityMeta("manualOrderBarcodeStatus")

export const PACKING_RANKING = getEntityMeta("packingRanking")
export const PACKING_ORDER = getEntityMeta("packingOrder")

export const CENTRAL_EXCHANGE = getEntityMeta("centralExchange")
export const CENTRAL_EXCHANGE_WORKER = getEntityMeta("centralExchangeWorker")
export const CENTRAL_EXCHANGE_BOX = getEntityMeta("centralExchangeBox")

export const POST_BRANCH = getEntityMeta("postBranch")
export const POST_DDL_BRANCH = getEntityMeta("postDDLBranch")

export const TICKET = getEntityMeta("ticket")
export const TICKET_MESSAGE = getEntityMeta("ticketMessage")
export const TICKET_OPERATOR = getEntityMeta("ticketOperator")
export const TICKET_TYPE = getEntityMeta("ticketType")
export const TICKET_CATEGORY = getEntityMeta("ticketCategory")
export const TICKET_ROLE = getEntityMeta("ticketRole")
export const TICKET_CLOSE = getEntityMeta("ticketClose")
export const TICKET_POINT = getEntityMeta("ticketPoint")
export const TICKET_TEMPLATE = getEntityMeta("ticketTemplate")

export const CUSTOMER = getEntityMeta('customer')
export const CUSTOMER_WALLET_TRANSACTION = getEntityMeta('customerWalletTransaction')
export const WALLETS_TRANSACTIONS = getEntityMeta('walletsTransaction')

export const COMMENT = getEntityMeta("comment")

export const FREQUENTLY_QUESTION = getEntityMeta("frequentlyQuestion")

export const CONTACT_US_MESSAGE = getEntityMeta("contactUsMessage")

export const CONTENT_POSITION = getEntityMeta("contentPosition")
export const CONTENT_SLIDER = getEntityMeta("contentSlider")

export const BRAND = getEntityMeta("brand")
export const BRAND_LIST = getEntityMeta("brandList")

export const GROUP = getEntityMeta("group")
export const GROUP_LIST = getEntityMeta("groupList")
export const GROUP_COLOR = getEntityMeta("groupColor")
export const GROUP_ATTRIBUTE = getEntityMeta("groupAttribute")
export const GROUP_PARENT_ATTRIBUTE = getEntityMeta("groupParentAttribute")

export const PRODUCT_COLOR = getEntityMeta("productColor")
export const PRODUCT_FILE = getEntityMeta("productFile")
export const PRODUCT_CART = getEntityMeta("productCart")
export const PRODUCT_COMMERCE = getEntityMeta("productCommerce")
export const PRODUCT = getEntityMeta("product")
export const PRODUCT_ATTRIBUTE = getEntityMeta("productAttribute")
export const PRODUCT_ATTRIBUTE_LIST = getEntityMeta("productAttributeList")
export const PRODUCT_MODIFY_LOG = getEntityMeta("productModifyLog")
export const PRODUCT_LOG = getEntityMeta("productLog")
export const BRAND_WITH_PRODUCT_LIST = getEntityMeta("brandWithProductList")

export const PROVINCE_LIST = getEntityMeta("provinceList")
export const CITY_LIST = getEntityMeta("cityList")
export const PRIOD_LIST = getEntityMeta("periodList")

export const REAGENT_CODE = getEntityMeta("reagentCode")
export const DISCOUNT = getEntityMeta("discount")
export const DISCOUNT_CART = getEntityMeta("discountCart")
export const DISCOUNT_ORDER = getEntityMeta("discountOrder")
export const DISCOUNT_PRODUCT = getEntityMeta("discountProduct")
export const DISCOUNT_CITY = getEntityMeta("discountCity")
export const DISCOUNT_CUSTOMER = getEntityMeta("discountCustomer")
export const DISCOUNT_SUPPLIER = getEntityMeta("discountSupplier")
export const CAMPAIGN = getEntityMeta("campaign")

export const BLOG_AUTHOR = getEntityMeta("blogAuthor")
export const BLOG_TAG = getEntityMeta("blogTag")
export const BLOG_FAQ = getEntityMeta("blogFaq")
export const BLOG_GROUP = getEntityMeta("blogGroup")
export const BLOG_CONTENT = getEntityMeta("blogContent")
export const BLOG_COMMENT = getEntityMeta("blogComment")

export const ROLE_SETTING = getEntityMeta("roleSetting")
export const ROLE_SETTING_USER = getEntityMeta("roleSettingUser")
export const ROLE_SETTING_PAGE = getEntityMeta("roleSettingPage")
export const ROLE_USER = getEntityMeta("roleUser")


export const LANDING_PAGE = getEntityMeta("landingPage")

export const SUPPLIER = getEntityMeta("supplier")
export const SUPPLIER_LIST = getEntityMeta("supplierList")
export const SUPPLIER_WAREHOUSE = getEntityMeta("supplierWarehouse")
export const COMMERCIAL_REQUEST = getEntityMeta("commercialRequest")
export const COMMERCIAL_DISCOUNT = getEntityMeta("commercialDiscount")
export const DISCOUNT_DRAFT = getEntityMeta("discountDraft")
export const MANAGEMENT_REQUEST = getEntityMeta("managementRequest")
export const COMMERCIAL_PRICING = getEntityMeta("commercialPricing")
export const FINANCIAL_REQUEST = getEntityMeta("financialRequest")
export const WAREHOUSE_REQUEST = getEntityMeta("warehouseRequest")

export const MANAGE_PAGE = getEntityMeta("managePage")

export const SEPIDAR_INVOICE = getEntityMeta("sepidarInvoice")

export const POST_COMPANY = getEntityMeta("postCompany")

export const LEADER_BOARD = getEntityMeta("leaderBoard")
export const LEADER_BOARD_INFO = getEntityMeta("leaderBoardInfo")
export const REAGENT_CONDITION = getEntityMeta("reagentCondition")
export const LOGIN_COUNT = getEntityMeta("loginCount")
export const PROFILE_CONDITION = getEntityMeta("profileCondition")
export const ORDER_CONDITION = getEntityMeta("orderCondition")
export const PRICE_CONDITION = getEntityMeta("priceCondition")
export const PRODUCTS_CONDITION = getEntityMeta("productsCondition")
export const GAME_CONDITION = getEntityMeta("gameCondition")
export const PRIZE_CONDITION = getEntityMeta("prizeCondition")
export const QUESTIONNAIRE_CONDITION = getEntityMeta("questionnaireCondition")

export const GAMES_LIST = getEntityMeta("gamesList")
export const GAMES_INFO = getEntityMeta("gamesInfo")

export const PRIZES_LIST = getEntityMeta("prizesList")
export const PRIZES_INFO = getEntityMeta("prizesInfo")

export const EVENTS_LIST = getEntityMeta("eventsList")
export const GAME_PRIZE = getEntityMeta("gamePrize")
export const DISCOUNT_PRIZE = getEntityMeta("discountPrize")
export const CUSTOMER_DISCOUNT = getEntityMeta("customerDiscount")

export const QUESTIONNAIRE_GROUP = getEntityMeta("questionnaireGroup")
export const QUESTIONNAIRE_GROUP_DETAIL = getEntityMeta("questionnaireGroupDetail")
export const QUESTIONNAIRE_QA = getEntityMeta("questionnaireQA")
export const QUESTIONNAIRE_QA_DETAIL = getEntityMeta("questionnaireQADetail")
