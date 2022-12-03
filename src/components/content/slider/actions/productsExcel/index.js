import Tabs from 'components/utils/tabs'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getContentSlider } from 'store/actions/content'
import Products from 'components/content/slider/actions/productsExcel/Products'
import UploadExcel from 'components/content/slider/actions/productsExcel/UploadExcel'
import Button from 'components/utils/field/button'
import ActionButton from 'components/utils/actionsButton'

export default function ProductsExcel() {
    const { ID } = useParams()
    const { state } = useLocation()
    let navigate = useNavigate()

    const tabs = [
        {
            title: "بارگذاری فایل",
            render: <UploadExcel ID={ID} />
        },
        {
            title: "لیست محصولات ",
            render: <Products ID={ID} />
        }
    ]

    const onTabClick = (key, event) => {
        if (key === "1") {
            getContentSlider({ ID })
        }
    }

    return (
        <div className='section-card'>
            <h1>آپلود اکسل محصولات برای اسلایدر {state.name}</h1>
            <Tabs tabs={tabs} position="top" onTabClick={onTabClick} />
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="انصراف"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}
