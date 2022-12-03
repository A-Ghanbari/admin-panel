import request, { download } from "tools/requests"
import API_SERVICES from "tools/shared/apis"

export function exportTableExcelFile({ url, method = "POST", fileName = "Unknown", data = {}, loading }) {
    loading(true)
    download({
        method: method,
        url: url,
        data
    })
        .then(response => {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', `${fileName}.xlsx`)
            document.body.appendChild(link)
            link.click()
            link.remove()
            loading(false)
        })
        .catch(err => {
            loading(false)
        })
}

export function downloadOrderInvoice(data) {
    download({
        method: 'POST',
        url: API_SERVICES.order.getInvoiceFile,
        data
    })
        .then(response => {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'order-invoice.xlsx')
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
}

export function downloadInvoicePDF(data) {
    download({
        method: 'POST',
        url: `${API_SERVICES.order.getInvoicePDF}&&ID=${data.ID}`,
    })
        .then(response => {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'order-invoice.pdf')
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
}

export function downloadOrderLabelPDF(data) {
    download({
        method: 'POST',
        url: `${API_SERVICES.order.warehouseExit.getLabelPDF}&&ID=${data.ID}`,
    })
        .then(response => {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'order-invoice.pdf')
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
}

export function downloadWarehouseOrderExcel(data) {
    download({
        method: 'POST',
        url: `${API_SERVICES.order.warehouseExit.getExcel}?ID=${data.ID}`,
    })
        .then(response => {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'order-invoice.xlsx')
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
}

export function financeOrderInvoice(data) {
    request({
        method: 'POST',
        url: API_SERVICES.order.warehouseExit.financeOrderInvoice,
        data,
    })
        .then(response => {
            console.log(response)
        })
}

export function printAccumulative(data) {
    request({
        method: 'POST',
        url: `${API_SERVICES.order.warehouseExit.totalProductsCountInOrder}?ID=${data.ID}`,
        data
    })
        .then(data => {
            return data
        })
}

export function printOrderInvoice(data) {
    request({
        method: 'POST',
        url: `${API_SERVICES.order.getInvoice}?ID=${data.ID}`,
        data
    })
        .then(data => {
            return data
        })
}

export function printLabel(data) {
    request({
        method: 'POST',
        url: `${API_SERVICES.order.warehouseExit.getLabel}?ID=${data.ID}`,
        data
    })
        .then(data => {
            return data
        })
}

export function printBarcode(data) {
    request({
        method: 'POST',
        url: `${API_SERVICES.order.warehouseExit.getBarcode}?ID=${data.ID}`,
        data
    })
        .then(data => {
            return data
        })
}

/**
 * 
 * Get Manual Order Services
 * 
 */

export function printManualAccumulative(data) {
    request({
        method: 'POST',
        url: `${API_SERVICES.manualOrder.warehouseExit.totalProductsCountInOrder}?ID=${data.ID}`,
        data
    })
        .then(data => {
            return data
        })
}

export function printManualInvoice(data) {
    request({
        method: 'POST',
        url: `${API_SERVICES.manualOrder.warehouseExit.getInvoice}?ID=${data.ID}`,
        data
    })
        .then(data => {
            return data
        })
}

export function downloadManualInvoicePDF(data) {
    download({
        method: 'POST',
        url: `${API_SERVICES.manualOrder.warehouseExit.getInvoicePDF}&&ID=${data.ID}`,
    })
        .then(response => {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'manual-invoice.pdf')
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
}

export function printManualLabel(data) {
    request({
        method: 'POST',
        url: `${API_SERVICES.manualOrder.warehouseExit.getLabel}?ID=${data.ID}`,
        data
    })
        .then(data => {
            return data
        })
}

export function downloadManualLabelPDF(data) {
    download({
        method: 'POST',
        url: `${API_SERVICES.manualOrder.warehouseExit.getLabelPDF}&&ID=${data.ID}`,
    })
        .then(response => {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'manual-invoice.pdf')
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
}

export function downloadWarehouseManualOrderExcel(data) {
    download({
        method: 'POST',
        url: `${API_SERVICES.manualOrder.warehouseExit.getExcel}?ID=${data.ID}`,
    })
        .then(response => {
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'manual-invoice.xlsx')
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
}