import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getColors } from 'store/actions/product'
import { PRODUCT_COLOR as entity } from "tools/utils/entities"
import Skeleton from 'components/utils/skeleton'
import Tabs from 'components/utils/tabs'
import Products from 'components/product/color/actions/edit/Products'
import Overview from 'components/product/color/actions/edit/Overview'

export default function Edit() {
    const { ID } = useParams()
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getColors({ ID })
    }, [ID, reload])

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
            render: <Products entity={entity} ID={ID} data={dataList[0]?.productColors} />
        },
    ]

    return (
        <div className='section-card'>
            <h1>ویرایش رنگ کد {ID}</h1>
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
