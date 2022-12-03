import FormProvinceAndCity from "components/utils/form/items/FormProvinceAndCity"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({
    initialValues,
    onFinish,
    province,
    setProvince,
}) {

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormProvinceAndCity
                            name="provinceAndCity"
                            label="استان و شهر"
                            defaultValues={Object.values(province)}
                            onChange={(selectedOptions) => {
                                setProvince({
                                    provinceID: selectedOptions[0],
                                    cityID: selectedOptions[1],
                                })
                            }}
                        />
                    </ColumnGrid>
                    <ActionButton position="center">
                        <Button name="submit" label="جستجو" htmlType="submit" />
                    </ActionButton>
                </Row>
            </Form>
        </Collapse>
    )
}
