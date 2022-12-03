import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LANDING_PAGE as entity } from "tools/utils/entities"
import { getLandingPageList, editLandingPage } from "store/actions/landingPage"
import Tabs from 'components/utils/tabs'
import Form from 'components/utils/form'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import Social from 'components/landingPage/list/actions/edit/Social'
import Seo from 'components/landingPage/list/actions/edit/Seo'
import Specifications from 'components/landingPage/list/actions/edit/Specifications'
import Skeleton from 'components/utils/skeleton'
import { checkFilters, removeHoursFromDate } from 'tools/utils'


function Edit() {
    const { ID } = useParams()
    const navigate = useNavigate()

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getLandingPageList({ ID })
    }, [ID])

    const tabs = [

        {
            title: "مشخصات",
            render: <Specifications />
        },
        {
            title: "فضای مجازی",
            render: <Social />
        },
        {
            title: "سئو",
            render: <Seo />
        },
    ]

    const onFinish = (values) => {
        const serviceModel = {
            ...values,
            ID,
            ...checkFilters({
                publishDate: removeHoursFromDate(values.publishDate),
            }),
        }
        editLandingPage(serviceModel)
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ویرایش لندینگ {dataList[0]?.title}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form
                    onFinish={onFinish}
                    initialValues={dataList[0]}
                    autoComplete="off"
                >
                    <Tabs tabs={tabs} position="top" forceRender={true} />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}

export default Edit