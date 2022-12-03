import { useEffect } from "react"
import { useSelector } from "react-redux"
import { TICKET_TYPE as entity } from "tools/utils/entities"
import { getTicketsTypes } from "store/actions/ticket"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Filter({ initialValues, onFinish, }) {

    const { dataList } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        getTicketsTypes()
    }, [])

    const type = [{ text: "همه", value: " " }]
    for (const item of dataList) {
        type.push({
            text: item.titleName,
            value: item.ID
        })
    }

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormSelectSearch
                            name="typeID"
                            label="نوع"
                            items={type}
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>)
}
