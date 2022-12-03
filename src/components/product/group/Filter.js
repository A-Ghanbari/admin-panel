import FormInput from "components/utils/form/items/FormInput"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import ActionButton from "components/utils/actionsButton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish, }) {

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="name"
                            label="نام گروه "
                        />
                        <FormInput
                            name="parentID"
                            label="کد گروه بالاسری"
                        />
                    </ColumnGrid>
                    <ActionButton position="center">
                        <Button name="submit" label="جستجو" htmlType="submit" />
                        <Button name="excel" label="خروجی اکسل" type="primary-dark" />
                    </ActionButton>
                </Row>
            </Form>
        </Collapse>)
}
