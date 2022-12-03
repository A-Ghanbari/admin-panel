import { resolveDate } from "tools/utils";

export function getLastMonthSales(data) {
    const dayCount = data.currentMonth.length;
    let lastMonthSales = 0;
    for (let i = 0; i < dayCount; i++) {
        if (parseInt(data.currentMonth[i].sumPrice) !== 0) {
            lastMonthSales += parseInt(data.lastMonth[i].sumPrice);
        }
    }
    return lastMonthSales;
}

export function getLastMonthUntilTodayInvoices(data) {
    const dayCount = data.currentMonth.length;
    let count = 0;
    for (let i = 0; i < dayCount; i++) {
        if (parseInt(data.currentMonth[i].orderCount) !== 0) {
            count += data.lastMonth[i].orderCount;
        }
    }
    return count;
}

export function getLastMonthTotalInvoices(data) {
    let count = 0;
    for (const item of data.lastMonth) {
        count += item.orderCount;
    }
    return count;
}

export function getMonthlyComparisonSales(data) {
    const salesList = []
    const length = Math.max(data.currentMonth.length, data.lastMonth.length)

    for (let index = 0; index < length; index++) {
        salesList.push({
            day: (data.currentMonth[index]) ? resolveDate(data.currentMonth[index].orderDate).day : resolveDate(data.lastMonth[index].orderDate).day,
            current: (data.currentMonth[index]) ? Math.floor(data.currentMonth[index].sumPoint / 10) : 0,
            last: (data.lastMonth[index]) ? Math.floor(data.lastMonth[index].sumPoint / 10) : 0,
        })
    }

    return salesList
}

export function getMonthlyComparisonInvoices(data) {
    const salesList = []
    const length = Math.max(data.currentMonth.length, data.lastMonth.length)

    for (let index = 0; index < length; index++) {
        salesList.push({
            day: (data.currentMonth[index]) ? resolveDate(data.currentMonth[index].orderDate).day : resolveDate(data.lastMonth[index].orderDate).day,
            current: (data.currentMonth[index]) ? data.currentMonth[index].orderCount : 0,
            last: (data.lastMonth[index]) ? data.lastMonth[index].orderCount : 0,
        })
    }

    return salesList
}

export function getLastMonthTodaySales(data, today) {
    return (data.lastMonth[+today - 1]) ? data.lastMonth[+today - 1].sumPoint : 0
}

export function getLastMonthTodayInvoice(data, today) {
    return (data.lastMonth[+today - 1]) ? data.lastMonth[+today - 1].orderCount : 0
}

export function getMonthlySalesChart(data, today) {
    const salesList = []
    const startDay = today - (today % 7)
    const endDay = (today + 6 <= data.currentMonth.length) ? (today + 6) - (today % 7) : data.currentMonth.length

    for (let i = startDay; i <= endDay; i++) {
        salesList.push({
            current: Math.floor(data.currentMonth[i].sumPoint / 10),
            last: Math.floor(data.lastMonth[i].sumPoint / 10),
        })
    }
    return salesList
}

export function getMonthlyInvoiceChart(data, today) {
    const salesList = []
    const startDay = today - (today % 7)
    const endDay = (today + 6 <= data.currentMonth.length) ? (today + 6) - (today % 7) : data.currentMonth.length
    for (let i = startDay; i <= endDay; i++) {
        salesList.push({
            current: data.currentMonth[i].orderCount,
            last: data.lastMonth[i].orderCount
        })
    }
    return salesList
}