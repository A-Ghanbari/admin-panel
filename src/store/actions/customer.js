import API_SERVICES from "tools/shared/apis"
import {
    CUSTOMER as entity,
    CUSTOMER_WALLET_TRANSACTION as customerWalletEntity,
    WALLETS_TRANSACTIONS as walletTransactionEntity
} from "tools/utils/entities"
import { list, item, postRequest } from 'tools/requests'

export const getCustomerList = (data) =>
    list({ entity, data, url: API_SERVICES.customer.list })

export const getCustomer = (data) =>
    item({ entity, data, url: API_SERVICES.customer.detail })

export const editCustomer = (data) =>
    postRequest({ data, url: API_SERVICES.customer.edit })

export const getCustomerWalletTransaction = (data) =>
    list({ entity: customerWalletEntity, data, url: API_SERVICES.customer.getWalletInfo })

export const editCustomerPassword = (data) =>
    postRequest({ data, url: API_SERVICES.customer.editPassword })

export const chargeCustomerWallet = (data) =>
    postRequest({ data, url: API_SERVICES.customer.chargeWallet })

export const getWalletTransactions = (data) =>
    list({ entity: walletTransactionEntity, data, url: API_SERVICES.customer.walletTransaction.list })