import { useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'
import ActionButton from 'components/utils/actionsButton'
import Descriptions from 'components/utils/descriptions'
import Button from 'components/utils/field/button'
import Rate from 'components/utils/rate'

export default function Product({ data }) {
    let navigate = useNavigate()

    if (isEmpty(data)) {
        return null
    }

    const columns = [
        {
            label: "کد محصول",
            text: data.productID
        },
        {
            label: " نام محصول",
            text: data.productName
        },
        {
            label: "نام برند ",
            text: data.brandName
        },
        {
            label: "امتیاز",
            text: <Rate value={data.score} />
        },
        {
            label: "مثبت",
            text: data?.pointDetails.poitives.map((poitive, index) => (
                <div key={index}>
                    {poitive}
                </div>
            ))
        },
        {
            label: "منفی",
            text: data?.pointDetails.negatives.map((negative, index) => (
                <div key={index}>
                    {negative}
                </div>
            ))
        },
    ]

    return (
        <div className='product-overview'>
            <img src={data.productPicture} />
            <Descriptions data={columns} />
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
