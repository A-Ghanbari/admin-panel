import { createReducer } from "@reduxjs/toolkit"
import { PAGE_SIZE } from "tools/shared/constants"

export const filter = createReducer({
    order: {
        list: {
            transStatus: 0,
            orderStatus: 1,
            postCompanyID: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        exit: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            status: " ",
            postCompanyID: " "
        },
        province: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            provinceID: " ",
            postCompanyID: " "
        },
    },
    manualOrder: {
        list: {
            transStatus: 0,
            postCompanyID: " ",
            TypeID: "",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        exit: {
            status: " ",
            postCompanyID: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        province: {
            provinceID: " ",
            postCompanyID: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        awaiting: {
            ManualOrderType: "",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
    },
    packing: {
        order: {
            isComplated: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
    },
    centralExchange: {
        list: {

            postCompanyID: " ",
            userCreatorID: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        box: {
            postCompanyID: " ",
            userCreatorID: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
    },
    sepidarInvoice: {
        pageIndex: 1,
        pageSize: PAGE_SIZE,
    },
    ticket: {
        list: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            status: '0',
            typeID: " ",
            userAdminID: " "
        },
        category: {
            isActive: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        roles: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        close: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            isActive: " "
        },
        point: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            isActive: " "
        },
        template: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            typeID: " ",
        },
    },
    post: {
        company: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        }
    },
    comment: {
        pageIndex: 1,
        pageSize: PAGE_SIZE,
        status: " "
    },
    product: {
        brand: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            showInMain: " "
        },
        group: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        color: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        file: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            mediaID: " "
        },
        list: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            brandID: " ",
            categoryID: " ",
            isActive: " "
        },
        attribute: {
            categoryID: " ",
            isActive: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        modifyLog: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        log: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            changeType: " ",
            warehouseType: " "
        }
    },
    customer: {
        user: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        wallet: {
            transactionType: " ",
            status: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        }
    },
    faq: {
        pageIndex: 1,
        pageSize: PAGE_SIZE,
    },
    commercial: {
        suppliers: {
            SupplierType: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        request: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            SupplierWarehouseID: " ",
            supplierID: " ",
            brand: " ",
            ClearingPriceType: " ",
            Status: " ",
        },
        discount: {
            brandID: " ",
            categoryID: " ",
            isActive: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        pricing: {
            brandID: " ",
            categoryID: " ",
            isActive: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        managementRequest: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            SupplierWarehouseID: " ",
            supplierID: " ",
            ClearingPriceType: " ",
        },
        financialRequest: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            SupplierWarehouseID: " ",
            supplierID: " ",
            ClearingPriceType: " ",
        },
        warehouseRequest: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            SupplierWarehouseID: " ",
            supplierID: " ",
            ClearingPriceType: " ",
        },
    },
    marketing: {
        reagentCode: {
            reason: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        postDiscount: {
            discountType: 1,
            isPercent: " ",
            status: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        campaign: {
            SupplierID: " ",
            brandID: " ",
            categoryID: " ",
            isActive: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        discount: {
            isLeaderboardGame: false,
            discountType: " ",
            isPercent: " ",
            status: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        customerDiscount: {
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        leaderBoardDiscount: {
            isLeaderboardGame: true,
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
    },
    leaderBoard: {
        list: {
            status: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        games: {
            status: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        prizes: {
            status: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        events: {
            LeaderBoardID: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        gamePrizes: {
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        discountPrizes: {
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        customerDiscount: {
            pageIndex: 1,
            pageSize: PAGE_SIZE
        }
    },
    content: {
        contactUs: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        position: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
            isActive: " "
        },
        slider: {
            isActive: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        }
    },
    questionnaire: {
        questionnaireGroup: {
            isActive: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        questionnaireQA: {
            isActive: " ",
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
    },
    blog: {
        author: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        tag: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        faq: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        group: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        content: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
        comment: {
            pageIndex: 1,
            pageSize: PAGE_SIZE,
        },
    },
    role: {
        setting: {
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
        user: {
            pageIndex: 1,
            pageSize: PAGE_SIZE
        },
    },
    landingPage: {
        list: {
            pageIndex: 1,
            pageSize: PAGE_SIZE
        }
    },
    managePages: {
        pageIndex: 1,
        pageSize: 1000,
        parentID: 0,
        type: 1,
    },
},
    { FILTER: (state, { payload }) => payload }
)
