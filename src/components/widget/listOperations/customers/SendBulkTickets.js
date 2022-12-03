import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ACL from 'components/ACL'
import { API_BASE_URL } from 'tools/shared/constants'
import { TICKET_TYPE as typeEntity } from "tools/utils/entities"
import { getTicketsTypes } from 'store/actions/ticket'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormSelect from 'components/utils/form/items/FormSelect'
import WidgetCard from 'components/utils/widgetCard'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'

function SendBulkTickets() {

    const { dataList } = useSelector(
        (s) => s[typeEntity.pluralizeName]
    )

    useEffect(() => {
        getTicketsTypes()
    }, [])

    const ticketType = []
    for (const item of dataList) {
        ticketType.push({
            text: item.titleName,
            value: item.ID
        })
    }

    return (
        <WidgetCard
            title="فرستادن تیکت گروهی"
            des={
                <p>برای <span className='success'>فرستادن تیکت گروهی </span>با انتخاب از <span className='warning'>جواب های آماده </span>، از این قسمت استفاده نمایید .</p>
            }
            actions={[
                <ActionButton position="center">
                    <Button
                        type="primary-dark"
                        label="تایید"
                    />
                </ActionButton>
            ]}
        >
            <a href={`${API_BASE_URL}Content/templateExcel/test_CheckUserByHPH.xlsx`} target="blank">
                <p className='accent'>دریافت فایل نمونه</p>
            </a>
            {/* Ali , Hossein , fix upload button */}
            <Button
                label="بارگذاری"
            />
            <Form>
                <FormSelectSearch
                    name="typeID"
                    label="نوع تیکت"
                    items={ticketType}
                />
                <FormSelect
                    label="پیام"
                />
            </Form>
        </WidgetCard>
    )
}

export default ACL(SendBulkTickets)
