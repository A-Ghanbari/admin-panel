import Cookies from 'js-cookie'
import {
    TOKEN_NAME,
    USER_DATA,
    PAGE_ACCESS,
    PERMISSIONS,
    PROVINCES,
    THEME,
    BRANDS,
    GROUPS,
    CITIES,
    IS_LOGIN,
    API_BASE_URL,
    PERIOD,
} from 'tools/shared/constants'
import moment from "moment-jalaali"
import gregorian from 'react-date-object/calendars/gregorian'
import gregorian_en from 'react-date-object/locales/gregorian_en'
import Notification from 'components/utils/notification'
import { dispatch } from 'store'
import { getState } from 'store'
import { menu } from 'tools/shared/menu'

export const getToken = () => Cookies.get(TOKEN_NAME) || ''
export const setToken = (token) => Cookies.set(TOKEN_NAME, token)
export const removeToken = () => Cookies.remove(TOKEN_NAME)

export const getLoginStatus = () => Cookies.get(IS_LOGIN) || false
export const setLoginStatus = (status) => Cookies.set(IS_LOGIN, status)
export const removeLoginStatus = () => Cookies.remove(IS_LOGIN)

export const storage = {
    save: (name, value) => window.localStorage.setItem(name, value),
    get: (name) => JSON.parse(window.localStorage.getItem(name)),
    remove: (name) => window.localStorage.removeItem(name),
}

export const getUser = () => storage.get(USER_DATA) || {}
export const getPageAccess = () => storage.get(PAGE_ACCESS) || []
export const getPermissions = () => storage.get(PERMISSIONS) || {}
export function checkPermissions(data) {
    const permissions = {}

    for (const section of data) {
        if (section.type === 3) {
            for (const page of section.pageList) {
                for (const permission of page.permissions) {
                    if (permission.access) {
                        permissions[permission.name] = true
                    }
                }
            }
        } else if (section.pageID === 1) {
            for (const permission of section.permissions) {
                if (permission.access) {
                    permissions[permission.name] = true
                }
            }
        }
    }
    return permissions
}
export function checkPageAccess(data) {
    const menus = []
    for (const section of data) {
        let item = {}

        if (section.access) {
            item = {
                name: section.name,
                title: section.title,
                controller: section.controller,
                action: section.action,
                type: section.type,
                children: [],
            }

            for (const page of section.pageList) {
                if (page.access) {
                    item.children.push({
                        name: page.name,
                        title: page.title,
                        controller: page.controller,
                        action: page.action,
                        type: page.type,
                    })

                    for (const permission of page.permissions) {
                        if (permission.access) {
                            item.children.push({
                                name: permission.name,
                                title: permission.title,
                                controller: permission.controller,
                                action: permission.action,
                                type: permission.type,
                            })
                        }
                    }
                }
            }
            menus.push(item)
        }
    }
    return menus
}

export function checkPageRoles(data) {
    const roles = []
    if (data !== undefined) {
        for (const section of data) {
            let item = {}
            if (section.type === 3) {
                item = {
                    label: section.title,
                    access: section.access,
                    value: section.pageID,
                    children: [],
                }
                for (const page of section.pageList) {
                    let title = {
                        access: page.access,
                        label: page.title,
                        value: page.pageID,
                        children: [],
                    }
                    for (const permission of page.permissions) {
                        title.children.push({
                            label: permission.title,
                            access: permission.access,
                            value: permission.pageID,
                        })
                    }
                    item.children.push(title)
                }
            } else if (section.type === 1) {
                item = {
                    label: section.title,
                    access: section.access,
                    value: section.pageID,
                    children: [],
                }
                for (const permission of section.permissions) {
                    item.children.push({
                        label: permission.title,
                        access: permission.access,
                        value: permission.pageID,
                    })
                }
            }
            roles.push(item)
        }
        return roles
    }
}

export const rolesAccess = (values) => {
    const initialRoles = []
    values?.map(pages => {
        if (pages.access) {
            initialRoles.push(pages.value)
        }
        if (pages.value === 1) {
            pages.children.map(page => {
                if (page.access) {
                    initialRoles.push(page.value)
                }
            })
        } else {
            pages.children.map(page => {
                if (page.access) {
                    initialRoles.push(page.value)
                }
                page.children.map(child => {
                    if (child.access) {
                        initialRoles.push(child.value)
                    }
                })
            })
        }
    })
    return initialRoles
}

export function cacheUser(data) {
    setLoginStatus(true)
    setToken(data.token)
    storage.save(USER_DATA, JSON.stringify(data))
    storage.save(PERMISSIONS, JSON.stringify(checkPermissions(data.pageAccess)))
    storage.save(PAGE_ACCESS, JSON.stringify(checkPageAccess(data.pageAccess)))
    storage.save(THEME, JSON.stringify("light"))
}
export function removeUser() {
    removeToken()
    removeLoginStatus()
    storage.remove(USER_DATA)
    storage.remove(PAGE_ACCESS)
    storage.remove(PERMISSIONS)
    storage.remove(PROVINCES)
    storage.remove(CITIES)
    storage.remove(BRANDS)
    storage.remove(GROUPS)
    storage.remove(THEME)
    storage.remove(PERIOD)
}

export const getTheme = () => storage.get(THEME)
export const setTheme = (theme) => storage.save(THEME, JSON.stringify(theme))

export function resolveDate(date) {
    let split = date.split('/')
    return {
        year: split[0],
        month: split[1],
        day: split[2],
    }
}

export function resolveMonthName(monthNumber) {
    const monthName = {
        '01': 'فروردین',
        '02': 'اردیبهشت',
        '03': 'خرداد',
        '04': 'تیر',
        '05': 'مرداد',
        '06': 'شهریور',
        '07': 'مهر',
        '08': 'آبان',
        '09': 'آذر',
        10: 'دی',
        11: 'بهمن',
        12: 'اسفند',
    }[monthNumber]

    return monthName || 'ماه جاری'
}

export const addCommaToNumber = (number) => number.toLocaleString()

export const cutString = (string, start, end) => string.substring(start, end)

export function getPageName(path) {
    const [controller, action] = path.split('/')
    // const pageAccess = getPageAccess()
    const pageName = {
        title: '',
        subTitle: '',
    }

    for (const section of menu) {
        if (controller === 'dashboard' || controller === '') {
            pageName.title = 'داشبورد'
            pageName.subTitle = 'ویجت های داشبورد'
        } else if (controller === 'null') {
            pageName.title = 'نامشخص'
            pageName.subTitle = 'نامشخص'
        } else if (
            section.controller === controller &&
            section.children.length
        ) {
            for (const page of section.children) {
                if (page.action === action) {
                    pageName.title = section.title
                    pageName.subTitle = page.title
                }
            }
        }
    }

    return pageName
}

export function convertDates(dates) {
    return datesMap(dates, function (date) {
        return date.convert(gregorian, gregorian_en).format()
    })
}

export function convertDate(date) {
    return date.convert(gregorian, gregorian_en).format()
}

function datesMap(dates, mapFn) {
    return Object.keys(dates).reduce(function (date, key) {
        date[key] = mapFn(dates[key])
        return date
    }, {})
}

export function checkFilters(values) {
    let filters = {}
    const isEmpty = /(?:(?:^ | $)|( ) )/g
    const isJalaliDate = /^[1]\d{3}\/(((0[1-6]|[1-6])\/((3[0-1])|([1-2][0-9])|(0[1-9]|[1-9])))|((1[0-2]|(0[7-9]|[7-9]))\/(30|([1-2][0-9])|(0[1-9]|[1-9]))))$/g

    for (const [key, value] of Object.entries(values)) {
        if (value === undefined || value === null || value === "" || isEmpty.test(value)) continue
        if (typeof value !== 'object' && isJalaliDate.test(value)) {
            filters[key] = jalaliToGregorian(value)
        }
        else if (typeof value === 'object' && key !== "provinceAndCity") {
            filters[key] = value.convert(gregorian, gregorian_en).format()
        } else if (typeof value !== 'object' && isJalaliDate.test(value)) {
            filters[key] = jalaliToGregorian(value)
        } else {
            filters[key] = value
        }
    }
    return filters
}

export function jalaliToGregorian(value) {
    let date = value.replace(/([۰-۹])/g, function (token) { return String.fromCharCode(token.charCodeAt(0) - 1728) })
    return moment(date, 'jYYYY/jM/jD').format('YYYY/M/D')
}

export function gregorianToJalali(date) {
    return moment(date, 'YYYY/M/D').format('jYYYY/jM/jD')
}

export function convertDigitToChar(digit) {
    const digitChar = {
        1: 'یک',
        2: 'دو',
        3: 'سه',
        4: 'چهار',
        5: 'پنج',
        6: 'شش',
        7: 'هفت',
        8: 'هشت',
        9: 'نه',
        10: 'ده'
    }[digit]

    return digitChar || 'صفر'
}

export function checkValidation(options) {
    for (const entry of options.validationList) {
        if ((!options.model[entry.key]) || options.model[entry.key] === 'Invalid date' || options.model[entry.key].length === 0) {
            const message = (entry.title) ? `لطفا ${entry.title} را وارد نمایید.` : entry.message
            Notification.error(message);
            return false;
        }
    }
    return true;
}

export const cacheData = (data, name) => {
    storage.save(name, JSON.stringify(data))
    return data
}

export const getBrands = () => storage.get(BRANDS) || []
export const getGroups = () => storage.get(GROUPS) || []
export const getProvinces = () => storage.get(PROVINCES) || []
export const getCities = () => storage.get(CITIES) || []
export const getPeriodList = () => storage.get(PERIOD) || []

export const formatQuillValue = (data) => {
    let sentences = ""
    if (data) {
        try {
            const jsonFormat = JSON.parse(data)
            for (const item of jsonFormat.ops) {
                sentences += " " + item.insert
            }
            return (sentences)
        } catch (error) {
            return data
        }
    }
}

export const getParentGroupTreeSelect = (data) => {
    const parentList = []
    for (const item of data) {
        if (item.parentID === null) {
            parentList.push({
                id: item.ID,
                pId: 0,
                title: item.name,
                value: item.ID,
                isLeaf: true
            })
        }
    }

    for (const parent of parentList) {
        for (const item of data) {
            if (parent.id === item.parentID) {
                parent.isLeaf = false
                break
            }
        }
    }
    return parentList
}

export const getChildGroupTreeSelect = (data, parentId) => {
    const childList = []
    for (const item of data) {
        if (item.parentID === parentId) {
            childList.push({
                id: item.ID,
                pId: parentId,
                title: item.name,
                value: item.ID,
                isLeaf: true
            })
        }
    }

    for (const child of childList) {
        for (const item of data) {
            if (child.id === item.parentID) {
                child.isLeaf = false
                break
            }
        }
    }
    return childList
}

export const getContentPositionSelectFormat = (data) => {
    const list = []
    for (const item of data) {
        if (item.isActive) {
            list.push({
                text: item.title,
                value: item.ID
            })
        }
    }
    return list
}

export const getSelectItems = (data) => {
    const list = []
    for (const item of data) {
        list.push({
            text: item.name || item.title,
            value: item.ID || item.id
        })
    }
    return list
}

export const checkDateFormat = (date) =>
    (typeof date === 'string') ? jalaliToGregorian(date) : convertDate(date)

export const checkImageUrl = (data) =>
    (typeof data === 'string') ? data.replace(API_BASE_URL, "") : data[0].response.path

export const descriptionMultiCols = (data) => {
    const columns = [{
        label: "عنوان",
        text: <div>
            <span>مقدار های جدید</span>
            <span>مقدار های قدیم</span>
        </div>,
        style: "title"
    }]

    if (data.length) {
        data.map((item) => (
            columns.push({
                label: item.label,
                text: item.type === "album" ?
                    <div>
                        {item.new.split("/video/")[1] !== undefined ?
                            <span>
                                <video width="80" height="50" autoPlay>
                                    <source src={item.new} type="video/mp4" />
                                </video>
                            </span>
                            : <span><img width={40} src={item.new} /></span>}
                        {item.old.split("/video/")[1] !== undefined ?
                            <span>
                                <video width="80" height="50" autoPlay>
                                    <source src={item.old} type="video/mp4" />
                                </video>
                            </span>
                            : <span><img width={40} src={item.old} /></span>}
                    </div>
                    :
                    <div>
                        <span
                            style={item.new !== item.old ? { color: "red" } : null}
                            dangerouslySetInnerHTML={{ __html: formatQuillValue(item.new) }}
                        />
                        <span
                            style={item.new !== item.old ? { color: "red" } : null}
                            dangerouslySetInnerHTML={{ __html: formatQuillValue(item.old) }}
                        />
                    </div>
                ,
                style: "cols"
            })

        ))
    }
    return columns
}

export const getMediaFiles = (data, type) => {
    const files = []
    if (data) {
        if (data.FilePath) {
            files.push({
                FilePath: data.FilePath.replace(API_BASE_URL, ""),
                IsActive: data.IsActive,
                FileType: data.FileType,
                sort: 1,
                ProductsMediaFileID: data.ProductsMediaFileID,
                DisplayType: 1,
                otherSizes: data.otherSizes.map(other => ({
                    FilePath: other.FilePath,
                    DisplayType: other.DisplayType,
                }))
            })
        } else {
            files.push({
                FilePath: data.response?.path,
                IsActive: type?.IsActive,
                FileType: type?.FileType || 1,
                sort: 1,
                ProductsMediaFileID: 7,
                DisplayType: 1,
                otherSizes: data.response?.otherSizes.map(other => ({
                    FilePath: other.path,
                    DisplayType: other.displayType,
                }))

            })
        }
    } else {
        files.push({
            FilePath: "Content/productPicLink/uploadImage-1666611724086-uploadImage-1652611963818-efa4445613-d4dd-4acf-815f-ceb1b56f3cbb_1f178d6f9-ef6b-4c85-937d-ba45653c9cdb_6.jpg",
            IsActive: true,
            FileType: 1,
            sort: 1,
            ProductsMediaFileID: 7,
            DisplayType: 1,
            otherSizes: {
                FilePath: "Content/productPicLink/uploadImage-1666611724086-uploadImage-1652611963818-efa4445613-d4dd-4acf-815f-ceb1b56f3cbb_1f178d6f9-ef6b-4c85-937d-ba45653c9cdb_6.jpg",
                DisplayType: 1,
            }
        })
    }
    return files
}

export const getPhotoAlbum = (data) => {
    const files = []
    data.map((file, index) => files.push({
        IsActive: file.IsActive,
        FileType: file.FileType,
        FilePath: file.FilePath,
        sort: index,
        otherSizes: file.otherSizes.map(other => ({
            FilePath: other.FilePath,
            DisplayType: other.DisplayType,
        })),
        DisplayType: 1,
    }))
    return files
}

export const setAttributesData = (data) => {
    const fields = []
    for (const [key, value] of Object.entries(data)) {
        if (key.split('prop')[1] !== undefined) {
            if (value !== undefined) {
                if (typeof value === 'string') {
                    fields.push({
                        ID: key.split('prop')[1],
                        value: value
                    })
                }
                else if (value) {
                    fields.push({
                        ID: key.split('prop')[1]
                    })
                }
            }
        }
        if (key.indexOf('prop') === 0) {
            delete fields[key]
        }
    }
    if (data.attributes) {
        data.attributes.map(attr => {
            if (attr.selectType === 2) {
                fields.push({ ID: attr.ID })
            } else {
                fields.push({ ID: attr.ID, value: attr.value })
            }
        })
    }
    return fields
}

export const getIds = (data) => {
    const fields = []
    data?.map(item => (
        fields.push(item.ID)
    ))
    return fields
}

export const setInitialAttributes = (data) => {
    let attributes = {}
    data?.map(att => {
        if (att.selectType === 1) {
            attributes[`prop${att.ID}`] = att.value
        } else if (att.selectType === 2) {
            attributes[`prop${att.ID}`] = true
        }
    })
    return attributes
}

export const removeAdditionalFields = (data) => {
    const fields = data
    for (const [key, value] of Object.entries(fields)) {
        if (key.indexOf('prop') === 0) {
            delete fields[key]
        }
    }
    return fields
}

export const sortList = (data) => [...data].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

export const removeHoursFromDate = (data) => typeof data === "object" ? data : data.replace(" 00:00:00", "")

export const checkPermission = (data, permissions) => {
    const fields = []
    data.map(item => (
        (!item.permission || permissions[item.permission]) ? fields.push(item) : null
    ))
    return fields
}

export const handleDetailsQuestionnaireCondition = (values) => {
    let fields = {
        Details: []
    }
    for (const [key, value] of Object.entries(values)) {
        if (key.split("-")[1]) {
            fields.Details.push({ ID: key.split("-")[1], Point: value ? value : 0 })
        } else {
            fields[key] = value
        }
    }
    fields = {
        ...fields,
    }
    return fields
}