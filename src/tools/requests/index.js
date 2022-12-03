import axios from "axios";
import { dispatch, getState } from "store";
import { logout } from "store/actions/user";
import Notification from "components/utils/notification";
import { API_BASE_URL, TOKEN_NAME } from "tools/shared/constants";
import { cacheData, cacheUser, checkPageAccess, checkPermissions, getToken } from "tools/utils";
import { setReloadList } from "store/actions/public";

axios.defaults.data = {};
axios.defaults.form = {};
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common[TOKEN_NAME] = getToken();

function requestMessage(response, isRequestAction = false) {
    if (response?.status >= 500) {
        return Notification.error(`درخواست با خطا مواجه شد. کد خطا "${response.status}"`);
    }

    if (response?.status === 401) {
        dispatch(logout())
        const message = 'اطلاعات ورود شما منقضی شده است، لطفا مجددا وارد شوید. (کد 401)';
        Notification.error(message);
    }

    if (response?.status === 200) {
        if (response.data.exceptionID === 0) {
            if (isRequestAction) {
                const message = response.data.data.message || "درخواست با موفقیت انجام شد.";
                (response.data.data.status || response.data.exceptionID === 0) ? Notification.success(message) : Notification.warning(message)
            }
        } else {
            const message = response.data.exceptionMessage || `درخواست با خطا مواجه شد. کد خطا "${response.status}"`
            Notification.error(message);
        }
    }
}

const requestInstance = axios.create();
requestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

requestInstance.interceptors.response.use(
    (response) => {
        requestMessage(response);
        return response.data;
    },
    (error) => {
        requestMessage(error.response);
        return Promise.reject(error);
    }
);
const request = requestInstance;
export default request;

/**
 * Download File
 */
const downloadFileInstance = axios.create();
downloadFileInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        config.responseType = "blob";
        return config;
    },
    (error) => Promise.reject(error)
);
downloadFileInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        requestMessage(error.response);
        return Promise.reject(error);
    }
);
export const download = downloadFileInstance;

/**
 * LIST API 
 */
const listInstance = axios.create({ method: "POST" });
listInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        dispatch({
            type: config.entity.pluralizeUpperName,
            payload: {
                dataList: [],
                ...getState()[config.entity.pluralizeName],
                loading: true,
            },
        });
        return config;
    },
    (error) => Promise.reject(error)
);

listInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.pluralizeUpperName,
            payload: { ...response.data.data, loading: false },
        });
        requestMessage(response);
        return response.data;
    },
    (error) => {
        requestMessage(error.response);
        return Promise.reject(error);
    }
);
export const list = listInstance;

/**
 * GET ITEM API 
 */
const itemInstance = axios.create({ method: "POST" });
itemInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        dispatch({
            type: config.entity.upperName,
            payload: {
                data: {},
                loading: true,
            },
        });
        return config;
    },
    (error) => Promise.reject(error)
);
itemInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.upperName,
            payload: { data: response.data.data, loading: false },
        });

        requestMessage(response)
        return response.data
    },
    (error) => {
        requestMessage(error.response)
        return Promise.reject(error)
    }
);
export const item = itemInstance

/**
 * GET ITEM API 
 */
const itemListInstance = axios.create({ method: "POST" });
itemListInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        dispatch({
            type: config.entity.upperName,
            payload: {
                data: {},
                loading: true,
            },
        });
        return config;
    },
    (error) => Promise.reject(error)
);
itemListInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.upperName,
            payload: { data: response.data.data.dataList[0], loading: false },
        });

        requestMessage(response)
        return response.data
    },
    (error) => {
        requestMessage(error.response)
        return Promise.reject(error)
    }
);
export const itemList = itemListInstance

/**
 * GET REQUEST API 
 */
const getRequestInstance = axios.create({ method: "GET" })
getRequestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken()
        dispatch({
            type: config.entity.upperName,
            payload: {
                data: [],
                loading: true,
            },
        });

        if (config.params) {
            if (config.params.history) {
                config.params = getState()["query"][config.entity.name]
            } else {
                // dispatch(setQuery(config.entity.name, config.params))
            }
        }

        return config
    },
    (error) => Promise.reject(error)
);
getRequestInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.upperName,
            payload: { data: response.data.data, loading: false },
        });

        requestMessage(response, true)

        return response.data
    },
    (error) => {
        requestMessage(error.response, true)
        return Promise.reject(error)
    }
);
export const getRequest = getRequestInstance

/**
* POST REQUEST API 
*/
const postRequestInstance = axios.create({ method: "POST" })
postRequestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken()
        return config
    },
    (error) => Promise.reject(error)
)
postRequestInstance.interceptors.response.use(
    (response) => {
        requestMessage(response, true)
        response.data.exceptionID === 0 && dispatch(setReloadList(!getState()["reloadList"]))
        return response.data
    },
    (error) => {
        requestMessage(error.response, true)
        return Promise.reject(error)
    }
);
export const postRequest = postRequestInstance

/**
* MANAGEMENT_REPORT API 
*/

const managementReportInstance = axios.create({ method: "POST" });
managementReportInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken();
        dispatch({
            type: config.entity.upperName,
            payload: {
                data: [],
                ...getState()[config.entity.upperName],
                loading: true,
            },
        });

        if (config.params) {
            if (config.params.history) {
                config.params = getState()["query"][config.entity.name];
            } else {
                // dispatch(setQuery(config.entity.name, config.params));
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

managementReportInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.upperName,
            payload: { data: response.data.data, loading: false },
        });
        requestMessage(response);
        return response.data;
    },
    (error) => {
        requestMessage(error.response);
        return Promise.reject(error);
    }
);
export const managementReport = managementReportInstance;

/*
cache request API 
*/

const cacheRequestInstance = axios.create({ method: "POST" })
cacheRequestInstance.interceptors.request.use(
    (config) => {
        config.headers[TOKEN_NAME] = getToken()
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

cacheRequestInstance.interceptors.response.use(
    (response) => {
        dispatch({
            type: response.config.entity.pluralizeUpperName,
            payload: cacheData(response.data.data, response.config.name),
        })
        requestMessage(response)
        return response.data
    },
    (error) => {
        requestMessage(error.response)
        return Promise.reject(error)
    }
)
export const cacheRequest = cacheRequestInstance


/**
 * Login Request 
 */
const loginInstance = axios.create({ method: "POST" });
loginInstance.interceptors.request.use(
    (config) => {
        dispatch({
            type: config.entity.upperName,
            payload: {
                ...getState()[config.entity.name],
                isLogin: false,
                isLoading: true
            },
        });
        return config;
    },
    (error) => Promise.reject(error)
);

loginInstance.interceptors.response.use(
    (response) => {
        if (response.data.exceptionID === 0) {
            cacheUser(response.data.data)
            dispatch({
                type: response.config.entity.upperName,
                payload: {
                    data: { ...response.data.data },
                    permissions: checkPermissions(response.data.data.pageAccess),
                    pageAccess: checkPageAccess(response.data.data.pageAccess),
                    isLogin: true,
                    isLoading: false
                },
            })
            requestMessage(response)
            return response.data.data
        } else {
            dispatch({
                type: response.config.entity.upperName,
                payload: {
                    isLogin: false,
                    isLoading: false
                },
            })
            Notification.error("نام کاربری یا رمز عبور اشتباه است !")
        }
    },
    (error) => {
        requestMessage(error.response)
        dispatch({
            type: error.config.entity.upperName,
            payload: {
                isLogin: false,
                isLoading: false
            },
        })
        Notification.error("نام کاربری یا رمز عبور اشتباه است !")
        return Promise.reject(error)
    }
)
export const loginRequest = loginInstance