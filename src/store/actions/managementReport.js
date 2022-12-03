import { managementReport } from "tools/requests"
import API_SERVICES from "tools/shared/apis"
import { MANAGEMENT_REPORT_WAREHOUSE as warehouseEntity, MANAGEMENT_REPORT_INVOICE as invoiceEntity, MANAGEMENT_REPORT_CHARGE as chargeEntity } from "tools/utils/entities"

export const getManagementReportWarehouse = (data) =>
    managementReport({ entity: warehouseEntity, data, url: API_SERVICES.managementReport.warehouse })

export const getManagementReportInvoice = (data) =>
    managementReport({ entity: invoiceEntity, data, url: API_SERVICES.managementReport.invoice })

export const getManagementReportCharge = (data) =>
    managementReport({ entity: chargeEntity, data, url: API_SERVICES.managementReport.charge })
