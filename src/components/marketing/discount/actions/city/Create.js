import { useParams } from "react-router-dom"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import { ColumnGrid } from "components/utils/grid"
import FormProvinceAndCity from "components/utils/form/items/FormProvinceAndCity"
import { createDiscountCity } from "store/actions/marketing"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 }
export default function Create() {
    const { ID } = useParams()

    const onFinish = (values) => {
        const cities = []
        values.provinceAndCity.map(city => (
            cities.push(city[1])
        ))
        createDiscountCity({
            BasicConditionID: ID,
            Cities: cities
        })
    }
    
    return (
        <div>
            <Form onFinish={onFinish}>
                <ColumnGrid col={fieldCol}>
                    <FormProvinceAndCity
                        multiple
                        name="provinceAndCity"
                        label="استان و شهر"
                    />
                    <Button
                        type="primary-dark"
                        label="ایجاد"
                        htmlType="submit"
                    />
                </ColumnGrid>
            </Form>
        </div>
    )
}
