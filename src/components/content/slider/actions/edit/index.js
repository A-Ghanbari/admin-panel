import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editContentSlider, getContentPositions, getContentSlider } from 'store/actions/content'
import { checkFilters, removeHoursFromDate } from 'tools/utils'
import { CONTENT_SLIDER as entity } from "tools/utils/entities"
import Divider from 'components/utils/divider'
import Form from 'components/utils/form'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import Skeleton from 'components/utils/skeleton'
import Overview from 'components/content/slider/actions/edit/Overview'
import PhotoGallery from 'components/content/slider/actions/edit/PhotoGallery'

export default function Edit() {
    const [files, setFiles] = useState([])
    const [groupValue, setGroupValue] = useState(null)
    const [typeValue, setTypeValue] = useState(1)
    const [initial, setInitial] = useState({})
    const { ID } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getContentSlider({ ID })
        getContentPositions({ pageSize: 10000 })
    }, [ID])

    const { dataList, loading } = useSelector(
        s => s[entity.pluralizeName]
    )

    useEffect(() => {
        if (typeValue === 3) {
            setFiles([])
        }
    }, [typeValue])

    const onFinish = (values) => {
        const serviceModel = {
            ...values,
            ID,
            CategoryID: groupValue,
            paths: [],
            ...checkFilters({
                publishDate: removeHoursFromDate(values.publishDate),
            }),
            path: undefined,
            deviceType: undefined,
            Link: undefined,
            FilePath: undefined,
        }
        files.map((file, index) => serviceModel.paths.push({ ...file, sort: index }))

        editContentSlider(serviceModel)
        navigate(-1)
    }

    let initialValues = {
        ...dataList[0],
        type: typeValue,
        ...initial
    }

    const onValuesChange = (changedValues, allValues) => {
        if (changedValues.type !== undefined) {
            setInitial(allValues)
            setTypeValue(changedValues.type)
        }
        if (changedValues.FilePath !== undefined) {
            allValues.FilePath[0].response &&
                setFiles(s => [...s,
                {
                    path: allValues.FilePath[0].response.path,
                    link: allValues.Link,
                    deviceType: allValues.deviceType
                }
                ])
            setInitial({
                ...allValues,
                type: typeValue
            })
        }
    }

    return (
        <div className="form-card">
            <h1>ویرایش اسلایدر کد {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                    onValuesChange={onValuesChange}
                    initialValues={initialValues}
                >
                    <Divider>نمای کلی</Divider>
                    <Overview
                        groupValue={groupValue}
                        setGroupValue={setGroupValue}
                        typeValue={typeValue}
                        setTypeValue={setTypeValue}
                        data={dataList[0]}
                    />
                    {typeValue !== 3 &&
                        <>
                            <Divider>آلبوم</Divider>
                            <PhotoGallery data={dataList[0].paths} files={files} setFiles={setFiles} />
                        </>
                    }
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
