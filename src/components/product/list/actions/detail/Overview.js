import Descriptions from 'components/utils/descriptions'
import { addCommaToNumber } from 'tools/utils'

function Overview({ data }) {

    const columns = [
        {
            label: "کد محصول",
            text: data.ID
        },
        {
            label: " نام محصول",
            text: data.productName
        },
        {
            label: "نام انگلیسی",
            text: data.latinName
        },
        {
            label: "نام برند ",
            text: data.brandName
        },
        {
            label: "نام گروه ",
            text: data.categoryName
        },
        {
            label: "پیوند یکتا ",
            text: data.slug
        },
        {
            label: "ترتیب نمایش ",
            text: data.sort
        },
        {
            label: "فعال ",
            text: data.isInactive ? "خیر" : "بلی"
        },
        {
            label: "واحد",
            text: {
                1: "عدد",
                2: "جعبه"
            }[data.unit]
        },
        {
            label: "وزن (گرم) ",
            text: `${addCommaToNumber(data.weight)} گرم`
        },
        {
            label: "طول (سانتی متر)",
            text: data.length
        },
        {
            label: "عرض (سانتی متر)",
            text: data.width
        },
        {
            label: "ارتفاع (سانتی متر)",
            text: data.heigth
        },
        {
            label: "شماره مجوز",
            text: data.licenseNumber
        },
    ]

    return (
        <div className='product-overview'>
            <img src={data.picLink} />
            <Descriptions data={columns} />
        </div>
    )
}

export default Overview