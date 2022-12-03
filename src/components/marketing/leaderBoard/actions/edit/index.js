import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { editLeaderBoard, getLeaderBoardInfo } from "store/actions/leaderBoard"
import { checkFilters } from "tools/utils"
import { LEADER_BOARD_INFO as entity } from "tools/utils/entities"
import Form from "components/utils/form"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Tabs from "components/utils/tabs"
import Overview from "components/marketing/leaderBoard/actions/edit/Overview"
import PhotoGallery from "components/marketing/leaderBoard/actions/edit/PhotoGallery"
import Skeleton from "components/utils/skeleton"

export default function Edit() {
    const [fileType, setFileType] = useState(1)
    const [files, setFiles] = useState([])
    const navigate = useNavigate()
    const { ID } = useParams()

    useEffect(() => {
        getLeaderBoardInfo({ ID })
    }, [ID])

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    const tabs = [
        {
            title: "نمای کلی",
            render: data && <Overview data={data} />
        },
        {
            title: "آلبوم تصاویر ",
            render: <PhotoGallery data={data?.files} fileType={fileType} files={files} setFiles={setFiles} />
        },

    ]

    const initialValues = {
        ...data,
        IsActive: 1,
        FileType: 1,
    }

    const onFinish = (values) => {
        let serviceModel = {
            ...checkFilters({
                ID,
                ...values,
                Logo: (typeof values.logo === 'string') ? values.logo : values.Logo[0].response.path,
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
        editLeaderBoard(serviceModel)
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
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>ویرایش تابلو پایه {data.title}</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={initialValues}
                    onValuesChange={onValuesChange}
                >
                    <Tabs tabs={tabs} position="top" forceRender={true} />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
