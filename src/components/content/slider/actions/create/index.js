import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { checkFilters } from "tools/utils"
import { createContentSlider, getContentPositions } from "store/actions/content"
import Form from "components/utils/form"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Overview from "components/content/slider/actions/create/Overview"
import PhotoGallery from "components/content/slider/actions/create/PhotoGallery"
import Divider from "components/utils/divider"

export default function Create() {
    const [files, setFiles] = useState([])
    const [groupValue, setGroupValue] = useState(null)
    const [typeValue, setTypeValue] = useState(1)
    const navigate = useNavigate()


    useEffect(() => {
        getContentPositions({ pageSize: 10000 })
    }, [])

    useEffect(() => {
        if (typeValue === 3) {
            setFiles([])
        }
    }, [typeValue])

    const onFinish = (values) => {
        const serviceModel = {
            ...values,
            CategoryID: groupValue,
            paths: [],
            ...checkFilters({
                PublishDate: values.PublishDate,
                Path: undefined,
                deviceType: undefined
            }),
            Link: undefined,
            FilePath: undefined,
        }
        files.map((file, index) => serviceModel.paths.push({ ...file, sort: index }))

        createContentSlider(serviceModel)
        navigate(-1)
    }

    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.FilePath !== undefined) {
            allValues.FilePath[0].response &&
                setFiles(s => [...s,
                {
                    Path: allValues.FilePath[0].response.path,
                    Link: allValues.Link,
                    deviceType: allValues.deviceType
                }
                ])
        }
    }

    return (
        <div className="form-card">
            <h1>ایجاد اسلایدر جدید</h1>
            <Form
                onFinish={onFinish}
                onValuesChange={onValuesChange}
            >
                <Divider>نمای کلی</Divider>
                <Overview
                    groupValue={groupValue}
                    setGroupValue={setGroupValue}
                    typeValue={typeValue}
                    setTypeValue={setTypeValue}
                />
                {typeValue !== 3 &&
                    <>
                        <Divider>آلبوم</Divider>
                        <PhotoGallery files={files} setFiles={setFiles} />
                    </>
                }
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}
