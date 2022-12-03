import FormInput from "components/utils/form/items/FormInput"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import { FormSelect } from "components/utils/form/items/FormSelect"
import { customerWalletTransactionTypes } from "tools/shared/constants"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish }) {

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="userName"
                            label="نام کاربری"
                        />
                        <FormSelect
                            name="transactionType"
                            label="نوع انتقال"
                            required={true}
                            items={[{
                                text: "همه",
                                value: ' ',
                            }, ...customerWalletTransactionTypes]}
                        />
                        <FormSelect
                            name="status"
                            label="وضعیت پرداخت"
                            items={[{
                                text: "همه",
                                value: ' ',
                            }, {
                                text: "خیر",
                                value: 0,
                            }, {
                                text: "بلی",
                                value: 1,
                            }]}
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}
