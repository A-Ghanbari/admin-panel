export const API_BASE_URL = 'https://test.com/'

export const PAGE_SIZE = 10
export const TOKEN_NAME = 'token'
export const IS_LOGIN = 'isLogin'
export const USER_DATA = 'userData'
export const PERMISSIONS = 'permissions'
export const PAGE_ACCESS = 'pageAccess'
export const PROVINCES = 'provinces'
export const CITIES = 'cities'
export const BRANDS = 'brands'
export const GROUPS = 'groups'
export const THEME = 'theme'
export const PERIOD = 'period'


export const validationMessage = {
    required: '${label} ضروری است',
    types: {
        email: '${label} در فرمت ایمیل نیست!',
        number: '${label} در فرمت عدد نیست',
    },
    number: {
        range: '${label} باید بین ${min} و ${max}',
    },
}

export const postList = [
    {
        text: "پست پیشتاز (اشتهارد)",
        value: "1",
    }, {
        text: "MAHEX",
        value: "2",
    }, {
        text: "نفیس اکسپرس",
        value: "3",
    }
]

export const customerWalletTransactionTypes = [
    {
        text: "شارژ از درگاه بانکی",
        value: 1,
    }, {
        text: "شارژ توسط ادمین",
        value: 2,
    }, {
        text: "برداشت از کیف پول جهت خرید",
        value: 3,
    }, {
        text: "شارژ کیف پول به علت سفارش ناموفق",
        value: 4,
    }, {
        text: "شارژ کیف پول به علت پاداش معرف",
        value: 5,
    }, {
        text: "برداشت از کیف پول به علت تغییر وضعیت سفارش",
        value: 6,
    }, {
        text: "شارژ کیف پول به علت پاداش معرف ثبت نام",
        value: 7,
    }, {
        text: "سفارش در انتظار شارژ کیف پول",
        value: 9,
    }, {
        text: "شارژ به علت اختلال فنی",
        value: 10,
    }
]
