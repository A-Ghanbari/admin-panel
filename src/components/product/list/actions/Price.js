import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { isEmpty } from "lodash"
import { editProductsPrice } from "store/actions/product"
import { addCommaToNumber } from "tools/utils"
import Form from "components/utils/form"
import { FormInputNumber } from "components/utils/form/items/FormInputNumber"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"

export default function Price() {
    const { ID } = useParams()
    let navigate = useNavigate()

    const data = useSelector(
        (s) => s.productPriceInfo
    )

    useEffect(() => {
        if (isEmpty(data)) navigate('/product/list')
    }, [])

    const initialValues = () => {
        const initial = {}
        if (!isEmpty(data)) {
            data.map((item) => (
                initial[item.ID] = item.salePrice
            ))
        }
        return initial
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        },
        {
            title: "تامین کننده",
            key: "commerceName"
        },
        {
            title: "قیمت خرید",
            key: "buyPrice",
            render: (r, f) => `${addCommaToNumber(r / 10)} تومان`
        },
        {
            title: "قیمت فروش (ریال)",
            key: "salePrice",
            render: (r, f) =>
                <FormInputNumber
                    name={f.ID}
                />
        },
        {
            title: "موجودی",
            key: "currentCount",
            render: (r, f) => `${addCommaToNumber(r)} عدد`
        },
        {
            title: "انقضا",
            key: "expireDate"
        },
    ]

    const onFinish = (values) => {
        const prices = []
        for (const [key, value] of Object.entries(values)) {
            prices.push({
                ID: key,
                SalePrice: value
            })
        }
        editProductsPrice({
            ID,
            SalePrices: prices
        })
        navigate(-1)
    }

    return (
        <div className="section-card">
            <h1>ویرایش قیمت محصول کد {ID}</h1>
            {!isEmpty(data) &&
                <Form
                    onFinish={onFinish}
                    initialValues={initialValues()}
                >
                    <div className="height-scroll">
                        <TableWithoutEntity
                            dataSource={data}
                            columns={columns}
                        />
                    </div>
                    <ButtonWithConfirm />
                </Form>}
        </div>
    )
}
