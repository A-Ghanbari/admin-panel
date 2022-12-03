import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getProductsModifyLogs } from "store/actions/product"
import { PRODUCT_MODIFY_LOG as entity } from "tools/utils/entities"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Skeleton from "components/utils/skeleton"
import Tabs from "components/utils/tabs"
import Description from "components/product/modifyLog/actions/detail/Description"
import Overview from "components/product/modifyLog/actions/detail/Overview"
import Price from "components/product/modifyLog/actions/detail/Price"
import SEO from "components/product/modifyLog/actions/detail/SEO"
import Warehouse from "components/product/modifyLog/actions/detail/Warehouse"
import PhotoGallery from "components/product/modifyLog/actions/detail/PhotoGallery"

function Detail() {
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getProductsModifyLogs({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const tabs = dataList.length ? [
        {
            title: "نمای کلی",
            render: <Overview data={dataList[0]} />
        },
        {
            title: "توضیحات",
            render: <Description data={dataList[0]} />
        },
        {
            title: "بهینه سازی موتور جستجو",
            render: <SEO data={dataList[0]} />
        },
        {
            title: "آلبوم",
            render: <PhotoGallery data={dataList[0]} />
        },
        {
            title: "انبار",
            render: <Warehouse data={dataList[0]} />
        },
        {
            title: "قیمت",
            render: <Price data={dataList[0]} />
        },
    ] : []

    return (
        <div className='section-card'>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>جزییات محصول {dataList[0]?.productName}</h1>
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

export default Detail