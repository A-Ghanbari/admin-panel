import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getColors } from 'store/actions/product'
import { PRODUCT_COLOR as entity } from "tools/utils/entities"
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Skeleton from 'components/utils/skeleton'
import Tabs from 'components/utils/tabs'
import Overview from 'components/product/color/actions/detail/Overview'
import Products from 'components/product/color/actions/detail/Products'

export default function Detail() {
    const { ID } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getColors({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "نمای کلی",
            render: <Overview data={dataList[0]} />
        },
        {
            title: "محصولات",
            render: <Products entity={entity} data={dataList[0]?.productColors} />
        },
    ]

    return (
        <div className='section-card'>
            <h1>جزییات رنگ کد {dataList[0]?.title}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Tabs tabs={tabs} position="top" />
            </Skeleton>
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="بازگشت"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}
