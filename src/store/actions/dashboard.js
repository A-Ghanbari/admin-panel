import { item } from "tools/requests";
import API_SERVICES from "tools/shared/apis";
import { SALES_WIDGET as entity, WAREHOUSE_WIDGET as WarehouseEntity, CART_BANK_WIDGET as BankEntity } from "tools/utils/entities"

export const getSalesData = () =>
    item({ entity, data: {}, url: API_SERVICES.widget.dashboard })

export const getWarehouseData = () =>
    item({ method: "GET", entity: WarehouseEntity, url: API_SERVICES.widget.warehouse })

export const getCartAndBankData = () =>
    item({ method: "GET", entity: BankEntity, url: API_SERVICES.widget.cartAndBank })
