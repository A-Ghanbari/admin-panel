import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { PRODUCT as entity } from "tools/utils/entities"
import Skeleton from 'components/utils/skeleton'
import { getProducts } from 'store/actions/product'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'

function Preview() {
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getProducts({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    return (
        <div className='section-card product-preview' >
            <h1>جزئیات محصول کد {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <iframe src={`https://shavaz.com/products/${dataList[0]?.slug}`} />
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

export default Preview