const API_SERVICES = {
    auth: {
        login: 'Auth/Login',
        checkLogin: 'Auth/CheckLogin'
    },
    widget: {
        dashboard: 'dashboard/getOrderReport',
        warehouse: 'Dashboard/GetWarehouseReports',
        cartAndBank: 'Dashboard/GetUserCartReports'
    },
    managementReport: {
        warehouse: 'Dashboard/GetProductSaleCountReport',
        invoice: 'Dashboard/GetOrderSaleCountReport',
        charge: 'Dashboard/GetProductsChargeReport',
    },
    order: {
        list: 'Order/GetOrderReport',
        detail: 'Order/GetOrderDetailsReport',
        info: 'Order/GetOriginalOrderTotalItems/',
        edit: 'Order/EditOrderInfo/',
        changeStatus: 'Order/ChangeStatus/',
        checkEshtehardBarcodeStatus: 'Order/CheckBarcodeStatusEshtehard/',
        getInvoice: 'export/GetOrdersInvoice',
        getInvoicePDF: 'export/GeneratePdf?actionname=GetOrdersInvoices',
        getInvoiceFile: 'ExportFile/GetOrdersItemFile',
        getInvoiceFinance: 'export/GetFinancialOrdersFactors',
        commercialSalesReport: 'Order/GetOrdersCommercesListFile',
        financialSalesReport: 'Order/GetSalesCommercesReportFile',
        ordersReport: 'ExportFile/GetOrderReportFile',
        warehouseExit: {
            list: 'Order/GetExitWarehouseLevelList',
            create: 'Order/CreateExitWarehouseLevel',
            exit: 'Order/ExitFromWarehouse',
            revert: 'Order/UndoExitFromWarehouse',
            waitingList: 'Order/GetOrdersInWating',
            lastOrder: 'Order/GetOldOrderInWareHouse',
            barcodeReader: 'Order/ChangeExitFromWarehouseStatus',
            setPostDelivery: 'Order/EditDeliveryPost',
            getPostDelivery: 'Order/GetDeliveryPost',
            totalProductsCountInOrder: 'export/GetTotalProductsCountInOrders',
            getLabel: 'export/GetOrderLabelWarehouse',
            getLabelPDF: 'export/GeneratePdf?actionname=GetOrderLabelWarehouse',
            getBarcode: 'export/GetOrdersBarcodes',
            getExcel: 'export/GetOrderLabelWarehouseFile',
        },
        provinceOrder: {
            list: 'Order/GetOrdersTransPortationStatus'
        },
    },
    manualOrder: {
        create: 'Order/CreateManualOrder',
        list: 'Order/GetManualOrders',
        detail: 'Order/GetManualOrderInfo',
        delete: 'Order/DeleteManualOrder',
        getExcel: 'Order/GetManualOrdersFile',
        warehouseExit: {
            list: 'Order/GetExitWarehouseLevelListManual',
            create: 'Order/CreateExitWarehouseLevelManual',
            exit: 'Order/ExitFromWarehouseManual',
            revert: 'Order/UndoExitFromWarehouseManual',
            barcodeReader: 'Order/ChangeExitFromWarehouseManualOrderStatus',
            getPostDelivery: 'Order/GetDeliveryPostManual',
            setPostDelivery: 'Order/EditDeliveryPostManual',
            totalProductsCountInOrder: 'export/GetTotalProductsCountInOrdersManual',
            getLabel: 'export/GetOrderLabelWarehouseManual',
            getLabelPDF: 'export/GeneratePdf?actionname=GetOrderLabelWarehouseManual',
            getInvoice: 'export/GetOrdersInvoicesManual',
            getInvoicePDF: 'export/GeneratePdf?actionname=GetOrdersInvoicesManual',
            getExcel: 'export/GetOrderLabelWarehouseFileManual',
            lastOrder: 'Order/GetOldOrderInWareHouseManual',
        },
        provinceOrder: '/Order/GetOrdersTransPortationStatusManual',
        awaiting: 'Order/GetManualOrdersWithIssues/'
    },
    packing: {
        ranking: {
            list: 'Order/GetBarcodeScannerWorkersReports',
            excel: 'Order/GetBarcodeScannerWorkersReportsFile'
        },
        order: {
            list: 'Order/GetOrderPackingStates'
        },
        register: {
            getOrderInfo: 'Order/AddOrderPackingState',
            sendLabelData: 'Order/SendLablesList',
            getPostLabel: 'export/GetOrderLabelWarehouseFromBarcodeScanner'
        }
    },
    centralExchange: {
        exchangePallet: {
            exit: 'Order/AddPalletWithOrderBarcodes',
            list: 'Order/GetPalletsPostBoxes',
            delete: 'Order/DeletePalletsPostBoxes',
            barcode: 'export/GetPalletBarcodes?ID=',
            excel: 'Order/GetOrdersBoxesToPalletsBranchesFile?palletID=',
            listWorker: 'Order/GetWarehouseWorkers',
        },
        exchangeBox: {
            list: 'Order/GetOrdersBoxesToPostPallets',
            exportExcel: 'Order/GetOrdersBoxesToPostPalletsFile'
        }
    },
    post: {
        companies: {
            list: 'PostOption/GetPostOfficeCities',
            create: 'PostOption/AddNewCityInPostOffice',
            edit: 'PostOption/EditCityInPostOffice',
            delete: 'PostOption/RemoveCityFromMahex',
        },
        branches: {
            list: 'NafisExpressDeliveryLog/GetBranches',
            create: 'NafisExpressDeliveryLog/AddBranch',
            edit: 'NafisExpressDeliveryLog/EditBranch',
            delete: 'NafisExpressDeliveryLog/DeleteBranch',
            listDDL: 'NafisExpressDeliveryLog/GetBranchesDDL',
        }
    },
    sepidar: {
        invoice: {
            list: 'AdminSepidar/GetInvoice'
        }
    },
    ticket: {
        list: {
            list: 'Ticket/GetCustomertickets',
            messages: 'Ticket/GetTicketMessagesList',
            changeStatus: 'Ticket/ChangeStatus',
            changeTicketType: 'Ticket/ChangeTicketType',
            responseForTicket: 'Ticket/CreateResponseForTicket'
        },
        operator: 'Ticket/GetTicketsOperators',
        ticketType: 'Ticket/GetAdminTicketTypes',
        category: {
            list: 'Ticket/GetTicketTypes',
            create: 'Ticket/AddTicketType',
            delete: 'Ticket/DeleteTicketType',
            edit: 'Ticket/UpdateTicketType'
        },
        roles: {
            list: 'Ticket/GetUserTicketTypes',
            create: 'Ticket/AddUserTicketTypes',
            delete: 'Ticket/DeleteUserTicketTypes',
        },
        close: 'Ticket/GetCloseTimeTicketList',
        point: {
            list: "Ticket/GetTicketsReponsesByScores",
            create: 'Ticket/AddTicketsReponsesByScore',
            edit: 'Ticket/UpdateTicketsReponsesByScore',
            delete: 'Ticket/DeleteTicketsReponsesByScore'
        },
        single: {
            create: 'Ticket/CreateNewTicket'
        },
        template: {
            list: 'Ticket/GetTemplateTicketReponses',
            delete: 'Ticket/DeleteTemplateTicketReponse',
            edit: 'Ticket/UpdateTemplateTicketReponse',
            create: 'Ticket/AddTemplateTicketReponse'
        },
    },
    customer: {
        list: 'Customer/GetCustomersList',
        detail: 'Customer/GetCustomerInfo',
        edit: 'Customer/EditPersonalInfo',
        editPassword: 'Customer/ChangePassword',
        getWalletInfo: 'Customer/GetCustomerWalletTransactions',
        chargeWallet: 'Customer/ChargeCustomerWallet',
        exportExcel: 'Customer/GetCustomerListFile',
        walletTransaction: {
            list: 'Customer/GetCustomerWalletTransactions'
        }
    },
    comment: {
        list: 'Products/GetProductsComments',
        changeStatus: 'Products/EditStatusProductComment',
        responseForComment: 'Products/ReplyToComment'

    },
    product: {
        list: {
            list: 'Products/GetProducts',
            create: 'Products/AddProduct',
            delete: 'Products/RemoveProduct',
            edit: 'Products/EditProductFromContentUser',
            warehouse: 'Products/EditProductFromWarehouseUser',
            changePrice: 'Products/EditProductFromCommerceUser',
            cart: "Commerce/GetProductCommerces",
            maxCart: "Commerce/UpdateProductCommercesMaxCountInBasket",
            commerce: 'Commerce/GetProductCommerces',
            changeCommerce: 'Commerce/UpdateProductCommercesCount',
            excel: 'ExportFile/GetProductsFile',
            commerceExcel: 'Products/GetProductsFileForCommercesRequest',
        },
        brand: {
            list: 'products/GetBrands',
            withProductList: 'public/GetBrandsWithProducts',
            create: 'products/AddBrand',
            edit: 'products/ModifyBrand',
            delete: 'products/RemoveBrand',
        },
        group: {
            list: 'products/GetCategories',
            create: 'products/AddCategory',
            edit: 'products/ModifyCategory',
            delete: 'Products/RemoveCategory',
            createColor: 'Products/SetColorsToCategory',
            colorList: 'products/GetCategoryColors',
            deleteColor: 'Products/DeleteColorFromCategory',
            atrributes: 'products/GetCategoryAttributes',
            editAtrribute: 'Products/EditProductsAttributesList',
            createAtrribute: 'Products/SetAttributesToCategory',
            parentAttribute: 'Products/GetCategoryAttributesDDL',
            deleteAttribute: 'Products/DeleteAttributeFromCategory',
        },
        color: {
            list: 'Products/GetBaseColors',
            create: 'Products/AddBaseColor',
            edit: 'Products/EditBaseColor',
            delete: 'Products/RemoveBaseColor',
            deleteProductColor: 'Products/RemoveBaseColorFromProduct',
        },
        file: {
            list: 'Products/GetProductMediaFileDetails',
            create: 'Products/AddProductMediaFileDetails',
            edit: 'Products/EditProductMediaFileDetails',
            delete: 'Products/RemoveProductMediaFileDetails',
        },
        attribute: {
            list: 'Products/GetProductAttributes',
            edit: 'Products/EditProductAttribute',
            delete: 'Products/RemoveProductAttribute',
            create: 'Products/AddProductAttribute',
        },
        modifyLog: {
            list: 'Products/GetProductsModifyLogs',
        },
        log: {
            list: 'Products/GetProductsLogs',
            excel: 'Products/GetProductsLogsFile'
        }
    },
    FAQ: {
        list: 'ProductQuestion/GetProductQuestions',
        detail: 'ProductQuestion/GetProductQuestionInfo',
        create: 'ProductQuestion/AddProductQuestion',
        edit: 'ProductQuestion/EditProductQuestion',
        delete: 'ProductQuestion/RemoveProductQuestion',
    },
    marketing: {
        reagentCode: {
            list: 'MarketerReAgentCondition/GetMarketerReAgentConditions',
            create: 'MarketerReAgentCondition/AddMarketerReAgentCondition',
            edit: 'MarketerReAgentCondition/EditMarketerReAgentCondition',
            delete: 'MarketerReAgentCondition/DeleteMarketerReAgentCondition',
            addCustomer: 'MarketerReAgentCondition/AddCustomersToReAgentCondition'
        },
        discount: {
            basic: {
                list: 'PostOption/GetBasicDiscountPriceConditions',
                create: '',
                edit: '',
                delete: ''
            },
            cart: {
                list: 'PostOption/GetDiscountPriceForOrderItemsPrices',
                create: 'PostOption/AddDiscountPriceForOrderItemsPrice',
                edit: 'PostOption/EditDiscountPriceForOrderItemsPrice',
                delete: 'PostOption/RemoveDiscountPriceForOrderItemsPrice'
            },
            order: {
                list: 'PostOption/GetDiscountPriceForOrdersCounts',
                create: 'PostOption/AddDiscountPriceForOrdersCount',
                edit: 'PostOption/EditDiscountPriceForOrdersCount',
                delete: 'PostOption/RemoveDiscountPriceForOrdersCount'
            },
            product: {
                list: 'PostOption/GetDiscountPriceForProducts',
                create: 'PostOption/AddDiscountPriceForProduct',
                edit: 'PostOption/EditDiscountPriceForProduct',
                delete: 'PostOption/RemoveDiscountPriceForProduct',
                uploadExcel: 'PostOption/AddDiscountPriceForProductFromFile'
            },
            city: {
                list: 'PostOption/GetDiscountPriceForCities',
                create: 'PostOption/AddDiscountPriceForCity',
                edit: 'PostOption/EditDiscountPriceForCity',
                delete: 'PostOption/RemoveDiscountPriceForCity'
            },
            customer: {
                list: 'PostOption/GetDiscountPriceForCustomers',
                create: 'PostOption/AddDiscountPriceForCustomer',
                edit: 'PostOption/EditDiscountPriceForCustomer',
                delete: 'PostOption/RemoveDiscountPriceForCustomer',
                uploadExcel: 'PostOption/AddDiscountPriceForCustomerFromFile'
            },
            supplier: {
                list: 'PostOption/GetDiscountPriceForSuppliers',
                create: 'PostOption/AddDiscountPriceForSupplier',
                delete: 'PostOption/RemoveDiscountPriceForSupplier',
                uploadExcel: 'PostOption/AddDiscountPriceForSupplierFromFile'
            }
        },
        campaign: {
            list: 'Commerce/GetProductsCampainsFeatures',
            create: '',
            edit: '',
            delete: '',
        }
    },
    leaderBoardDiscount: {
        list: 'PostOption/GetDiscountPriceForCustomers',
        create: 'PostOption/AddDiscountPriceForCustomer',
        edit: 'PostOption/EditDiscountPriceForCustomer',
        delete: 'PostOption/RemoveDiscountPriceForCustomer',
        uploadExcel: 'PostOption/AddDiscountPriceForCustomerFromFile'
    },
    leaderBoard: {
        list: 'Marketing/GetMarketingLeaderBoards',
        create: 'Marketing/AddMarketingLeaderBoard',
        edit: 'Marketing/EditMarketingLeaderBoard',
        delete: 'Marketing/DeleteMarketingLeaderBoard',
        detail: 'Marketing/GetMarketingLeaderBoardInfo',
        conditions: {
            reagentCode: {
                list: 'Marketing/GetMarketingLeaderBoardReagentConditions',
                create: 'Marketing/AddMarketingLeaderBoardReagentCondition',
                edit: 'Marketing/EditMarketingLeaderBoardReagentCondition',
                delete: 'Marketing/DeleteMarketingLeaderBoardReagentCondition',
            },
            login: {
                list: 'Marketing/GetMarketingLeaderBoardLoginCountConditions',
                create: 'Marketing/AddMarketingLeaderBoardLoginCountCondition',
                edit: 'Marketing/EditMarketingLeaderBoardLoginCountCondition',
                delete: 'Marketing/DeleteMarketingLeaderBoardLoginCountCondition',
            },
            profile: {
                list: 'Marketing/GetMarketingLeaderBoardProfileConditions',
                create: 'Marketing/AddMarketingLeaderBoardProfileCondition',
                edit: 'Marketing/EditMarketingLeaderBoardProfileCondition',
                delete: 'Marketing/DeleteMarketingLeaderBoardProfileCondition',
            },
            orderCount: {
                list: 'Marketing/GetMarketingLeaderBoardOrdersCountConditions',
                create: 'Marketing/AddMarketingLeaderBoardOrdersCountCondition',
                edit: 'Marketing/EditMarketingLeaderBoardOrdersCountCondition',
                delete: 'Marketing/DeleteMarketingLeaderBoardOrdersCountCondition',
            },
            orderPrice: {
                list: 'Marketing/GetMarketingLeaderBoardOrdersPriceConditions',
                create: 'Marketing/AddMarketingLeaderBoardOrdersPriceCondition',
                edit: 'Marketing/EditMarketingLeaderBoardOrdersPriceCondition',
                delete: 'Marketing/DeleteMarketingLeaderBoardOrdersPriceCondition',
            },
            game: {
                list: 'Marketing/GetMarketingLeaderBoardGameConditions',
                create: 'Marketing/AddMarketingLeaderBoardGameCondition',
                edit: 'Marketing/EditMarketingLeaderBoardGameCondition',
                delete: 'Marketing/DeleteMarketingLeaderBoardGameCondition',
            },
            prize: {
                list: 'Marketing/GetMarketingLeaderBoardGameGifts',
                create: 'Marketing/AddMarketingLeaderBoardGameGift',
                edit: 'Marketing/EditMarketingLeaderBoardGameGift',
                delete: 'Marketing/DeleteMarketingLeaderBoardGameGift',
            },
            products: {
                list: 'Marketing/GetMarketingLeaderBoardProductsConditions',
                delete: 'Marketing/DeleteMarketingLeaderBoardProductsCondition',
                deleteProduct: 'Marketing/DeleteMarketingLeaderBoardConditionProduct',
            },
            questionnaire:{
                list:"Marketing/GetMarketingLeaderBoardQuestionsConditions",
                create:"Marketing/AddMarketingLeaderBoardQuestionsCondition",
                edit:"Marketing/EditMarketingLeaderBoardQuestionsCondition",
                delete:"Marketing/DeleteMarketingLeaderBoardQuestionsCondition",
            }

        },
        games: {
            list: 'Marketing/GetMarketingLeaderBoardGames',
            create: 'Marketing/AddMarketingLeaderBoardGame',
            edit: 'Marketing/EditMarketingLeaderBoardGame',
            delete: 'Marketing/DeleteMarketingLeaderBoardGame',
            detail: 'Marketing/GetMarketingLeaderBoardGameInfo',
        },
        prizes: {
            list: 'Marketing/GetMarketingLeaderBoardGifts',
            create: 'Marketing/AddMarketingLeaderBoardGift',
            edit: 'Marketing/EditMarketingLeaderBoardGift',
            delete: 'Marketing/DeleteMarketingLeaderBoardGift',
            detail: 'Marketing/GetMarketingLeaderBoardGiftInfo',

        },
        events: {
            list: 'Marketing/GetMarketingLeaderBoardDailyTasks',
            delete: 'Marketing/DeleteMarketingLeaderBoardDailyTask',
        },
        gamePrize: {
            list: 'Marketing/GetDiscountGamesDiscountCodes',
            create: 'Marketing/AddDiscountGamesDiscountCode',
            edit: 'Marketing/EditDiscountGamesDiscountCode',
            delete: 'Marketing/DeleteDiscountGamesDiscountCode',
        },
        discountPrize: {
            list: 'Marketing/GetDiscountCodeByPoints',
            create: 'Marketing/AddDiscountCodeByPoints',
            edit: 'Marketing/EditDiscountCodeByPoints',
            delete: 'Marketing/DeleteDiscountCodeByPoints',
        }, 
    },
    content: {
        contactUs: {
            list: 'Public/GetContactUsMessages'
        },
        position: {
            list: 'Content/GetContentPositions',
            create: 'Content/AddContentPositions',
            edit: 'Content/UpdateContentPositions',
            delete: 'Content/DeleteContentPositions'
        },
        slider: {
            list: 'Content/GetContentSliders',
            detail: 'Content/GetContentSliders',
            create: 'Content/AddContentsSlider',
            edit: 'Content/UpdateContentsSlider',
            delete: 'Content/DeleteContentsSlider',
            uploadProductsExcel: 'Content/AddProductIDsToSlider',
            changeSort: 'Content/UpdateProductFromSlider',
            deleteProuduct: 'Content/DeleteProductFromSlider',
        }
    },
    blog: {
        author: {
            list: 'Author/GetAuthorList',
            create: 'Author/AddAuthor',
            edit: 'Author/EditAuthor',
            delete: 'Author/DeleteAuthor'
        },
        tag: {
            list: 'Label/GetLabelList',
            create: 'Label/AddLabel',
            edit: 'Label/EditLabel',
            delete: 'Label/DeleteLabel'
        },
        faq: {
            list: 'Faq/GetShavazFaqList',
            create: 'Faq/AddShavazFaq',
            edit: 'Faq/EditShavazFaq',
            delete: 'Faq/DeleteShavazFaq'
        },
        group: {
            list: 'Category/GetShavazCategoriesList',
            create: 'Category/AddShavazCategories',
            edit: 'Category/EditShavazCategories',
            delete: 'Category/DeleteShavazCategories'
        },
        content: {
            list: 'Content/GetContentList',
            create: 'Content/AddContent',
            edit: 'Content/EditContent',
            delete: 'Content/DeleteContent'
        },
        comment: {
            list: 'Comment/GetCommentList',
            edit: 'Comment/EditComment',
            delete: 'Comment/DeleteComment'
        },
    },
    questionnaire: {
        questionnaireGroup: {
            list: 'Marketing/GetMarketingQuestionsCategories',
            delete: 'Marketing/DeleteMarketingQuestionCategory',
            create: 'Marketing/AddMarketingQuestionCategory',
            edit: 'Marketing/EditMarketingQuestionCategory',
            detail:'Marketing/GetMarketingQuestionCategoryInfo'
        },
        questionnaireQA: {
            list: 'Marketing/GetMarketingQuestions',
            delete: 'Marketing/DeleteMarketingQuestion',
            create: 'Marketing/AddMarketingQuestion',
            edit: 'Marketing/EditMarketingQuestion',
            detail:'Marketing/GetMarketingQuestionInfo'
        }
    },
    roles: {
        setting: {
            list: 'Auth/GetRoles',
            roleUsers: 'Auth/GetRoleUsers',
            create: 'Auth/AddRole',
            edit: 'Auth/ModifyRole',
            delete: 'Auth/RemoveRole',
            pagesRole: 'Auth/GetRolePages'
        },
        user: {
            list: '/Auth/GetUsers',
            create: 'Auth/Register',
            edit: 'Auth/EditUser',
            changePassword: 'Auth/ChangePasswordFromAdmin'
        }
    },
    landingPage: {
        list: 'LandingPage/GetLandingPages',
        create: 'LandingPage/AddLandingPage',
        edit: 'LandingPage/UpdateLandingPage',
        delete: 'LandingPage/DeleteLandingPage',
        uploadExcel:'LandingPage/AddProductIDsToLandingPage'
    },
    commercial: {
        supplier: {
            list: 'Commerce/GetCommerceSuppliers',
            listDDL: '/Commerce/GetCommerceSuppliersDDL',
            warehouses: 'Commerce/GetCommerceSupplierWarehouse',
        },
        request: {
            list: 'Commerce/GetCommercesProductsRequestsCategories',
        },
        discount: {
            list: 'Commerce/GetCommerceRequestsDiscounts',
            create: 'Commerce/AddCommerceRequestsDiscounts',
            delete: 'Commerce/DeleteCommerceRequestsDiscounts',
            settingEdit: 'Commerce/EditCommerceRequestsDiscounts',
            productEdit: 'Commerce/EditCommerceRequestsDiscountsDetail',
            productDelete: 'Commerce/DeleteCommerceRequestsDiscountDetail',
            uploadExcel: 'PostOption/AddCommerceRequestsDiscountsFromCommercesFile',
            listDrafts: 'Commerce/GetCommerceRequestsProducts'
        },
        managementRequest: {
            list: 'Commerce/GetCommercesProductsRequestsCategoriesForCommerceManager',
        },
        pricing: {
            list: 'Commerce/GetCommercesProductsRequestsPricesLogs',
        },
        financialRequest: {
            list: 'Commerce/GetCommercesProductsRequestsCategoriesForFinancialManager',
        },
        warehouseRequest: {
            list: 'Commerce/GetCommercesProductsRequestsCategoriesForWarehouseManager',
        },
    },
    setting: {
        managePages: {
            list: 'Auth/GetPages'
        }
    },
    public: {
        provinces: 'Public/GetProvinces/',
        cities: 'Public/GetCities/',
        periodList: '/public/getPeriodList',
    },
    filters: {
        manualOrderType: 'Order/GetManualOrderTypes/'
    },
    export: {

    },
    upload: {
        largeFile: 'Public/UploadImageLargeFile?type='
    }
}

export default API_SERVICES