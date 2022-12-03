import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { COMMERCIAL_DISCOUNT as entity } from "tools/utils/entities"
import { getCommercialDiscount } from 'store/actions/commercial'
import Tabs from 'components/utils/tabs'
import Product from 'components/commercial/discount/actions/edit/Product'
import Setting from 'components/commercial/discount/actions/edit/Setting'
import Skeleton from "components/utils/skeleton"

function Edit() {
    const { ID } = useParams()

    useEffect(() => {
        getCommercialDiscount({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        s => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "تنظیمات",
            render: <Setting data={dataList[0]} />
        },
        {
            title: "محصولات ",
            render: <Product data={dataList[0]?.requests} />
        },
    ]

    return (
        <div className='section-card'>
            <h1>ویرایش تخفیف با کد {ID} </h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Tabs tabs={tabs} position="top" />
            </Skeleton>
        </div>
    )
}

export default Edit