import axios from "axios"
import API_SERVICES from "tools/shared/apis"
import { API_BASE_URL } from "tools/shared/constants"
import { getToken } from "tools/utils"
import Notification from "components/utils/notification"

export async function uploadLargeFile(options, type) {
    const { onSuccess, onError, file } = options
    const url = type === "video" ?
        `${API_SERVICES.upload.largeFile + file.type}${file.type}&filename=${file.name}`
        :
        `${API_SERVICES.upload.largeFile + file.type}${file.type}&filename=${file.name}&height=800&width=800`

    const fmData = new FormData()
    const config = {
        headers: {
            "content-type": "multipart/form-data",
            "token": getToken(),
        }
    }
    fmData.append("image", file);

    try {
        const res = await axios.post(
            url,
            fmData,
            config
        );
        onSuccess(res.data.data.dataList[0]);
    } catch (err) {
        onError({ err });
    }
}

export async function uploadExcelFile(url, data) {

    const fmData = new FormData()
    const config = {
        headers: {
            "content-type": "multipart/form-data",
            "token": getToken(),
        }
    }

    data.forEach((file) => {
        fmData.append(file.name, file.value)
    })

    try {
        const res = await axios.post(
            url,
            fmData,
            config
        );
        if (res.data.exceptionID === 0) {
            Notification.success(res.data.data.message)
        } else {
            Notification.error(res.data.exceptionMessage)
        }
    } catch (err) {
        Notification.error("مشکلی رخ داده")
    }
}

export function editorUploadAdapter(loader) {
    return {
        upload: () => {
            return new Promise((resolve, reject) => {
                const body = new FormData()
                loader.file.then((file) => {
                    const url = `${API_SERVICES.upload.largeFile}${file.type}&filename=${file.name}&height=800&width=800`

                    body.append("image", file)
                    const config = {
                        headers: {
                            "content-type": "multipart/form-data",
                            "token": getToken(),
                        }
                    }

                    axios.post(
                        url,
                        body,
                        config
                    )
                        .then((res) => {
                            resolve({
                                default: `${API_BASE_URL}${res.data.data.dataList[0].path}`
                            })
                        })
                        .catch((err) => {
                            reject(err)
                        })
                })
            })
        }
    }
}
