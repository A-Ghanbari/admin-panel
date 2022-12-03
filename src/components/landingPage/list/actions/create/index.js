import Tabs from 'components/utils/tabs'
import Form from 'components/utils/form'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import Social from 'components/landingPage/list/actions/create/Social'
import Seo from 'components/landingPage/list/actions/create/Seo'
import Specifications from 'components/landingPage/list/actions/create/Specifications'
import { createLandingPage} from 'store/actions/landingPage'
import { useNavigate } from 'react-router-dom'
import { checkFilters } from 'tools/utils'


function Create() {
    const navigate = useNavigate()

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
        createLandingPage(checkFilters({
            ...values,
        }))
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ایجاد لندینگ جدید </h1>
            <Form
                onFinish={onFinish}
            >
                <Tabs tabs={tabs} position="top" forceRender={true} />
                <ButtonWithConfirm />
            </Form>
        </div>
    )
}

export default Create