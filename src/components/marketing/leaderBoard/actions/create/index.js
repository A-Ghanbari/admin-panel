import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { checkFilters } from "tools/utils"
import Form from "components/utils/form"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Tabs from "components/utils/tabs"
import Overview from "components/marketing/leaderBoard/actions/create/Overview"
import PhotoGallery from "components/marketing/leaderBoard/actions/create/PhotoGallery"
import { createLeaderBoard } from "store/actions/leaderBoard"

export default function Create() {
    const [fileType, setFileType] = useState(1)
    const [files, setFiles] = useState([])
    const navigate = useNavigate()

    const tabs = [
        {
            title: "نمای کلی",
            render: <Overview />
        },
        {
            title: "آلبوم تصاویر ",
            render: <PhotoGallery fileType={fileType} files={files} setFiles={setFiles} />
        },

    ]

    const initialValues = {
        Status: 1,
        IsActive: 1,
        FileType: 1,
    }

    const onFinish = (values) => {
        let serviceModel = {
            ...checkFilters({
                ...values,
                Logo: values.Logo[0]?.response.path,
                FileType: undefined,
                IsActive: undefined,
                fileTitle: undefined,
                FilePath: undefined,
            }),
            Files: []
        }
        files.map(file => (
            serviceModel.Files.push({
                FileType: file.FileType,
                Path: file.Path,
                Status: file.IsActive,
                Title: file.fileTitle
            })
        ))
        createLeaderBoard(serviceModel)
        navigate(-1)
    }

    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.FileType !== undefined) {
            setFileType(allValues.FileType)
        }
        if (changedValues.FilePath !== undefined) {
            allValues.FilePath[0].response &&
                setFiles(s => [...s,
                {
                    FileType: allValues.FileType,
                    Path: allValues.FilePath[0].response.path,
                    IsActive: allValues.IsActive,
                    fileTitle: allValues.fileTitle
                }
                ])
        }
    }

    return (
        <div className="form-card">
            <h1>ایجاد پایه جدید</h1>
            <Form
                onFinish={onFinish}
                initialValues={initialValues}
                onValuesChange={onValuesChange}
            >
                <Tabs tabs={tabs} position="top" />
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}
