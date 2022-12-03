import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux'
import Tabs from 'components/utils/tabs'
import { checkPermission } from 'tools/utils'
import { PRODUCT as entity } from "tools/utils/entities"
import Button from 'components/utils/field/button'
import ActionButton from 'components/utils/actionsButton'
import Skeleton from 'components/utils/skeleton'
import { getProducts } from 'store/actions/product'
import Overview from 'components/product/list/actions/detail/Overview'
import Attribute from 'components/product/list/actions/detail/Attribute'
import Colors from 'components/product/list/actions/detail/Colors'
import Rewiew from 'components/product/list/actions/detail/Review'
import SEO from 'components/product/list/actions/detail/SEO'
import Warehouse from 'components/product/list/actions/detail/Warehouse'
import Barcode from 'components/product/list/actions/detail/Barcode'
import PhotoGallery from 'components/product/list/actions/detail/PhotoGallery'

function Detail() {
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getProducts({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const { permissions } = useSelector(
        (s) => s.user
    )

    const tabs = dataList.length ? [
        {
            title: "نمای کلی",
            render: <Overview data={dataList[0]} />,
            permission: "policyProductOverview"
        },
        {
            title: "ویژگی ها  ",
            render: <Attribute data={dataList[0]} />,
            permission: "policyProductAttribute"
        },
        {
            title: "رنگ ها",
            render: <Colors data={dataList[0]} />,
            permission: "policyProductColor"
        },
        {
            title: "نقد و بررسی ",
            render: <Rewiew data={dataList[0]} />,
            permission: "policyProductDescription"
        },
        {
            title: "بهینه سازی موتور جستجو",
            render: <SEO data={dataList[0]} />,
            permission: "policyProductSearch"
        },
        {
            title: "آلبوم تصاویر ",
            render: <PhotoGallery data={dataList[0].mediaFiles} />,
            permission: "policyProductAlbum"
        },
        {
            title: "انبار خدمات ",
            render: <Warehouse data={dataList[0].ServiceGarrantyOption} />,
            permission: "policyProductWarehouseService"
        },
        {
            title: "بارکد ",
            render: <Barcode data={dataList[0].barcodes} />,
            permission: "policyProductBarcode"
        },
    ] : []

    return (
        <div className='section-card'>
            <h1>جزییات محصول کد {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Tabs tabs={checkPermission(tabs, permissions)} position="top" />
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