import { isEmpty } from 'lodash'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'

export default function Customers({ data }) {

    if (isEmpty(data)) {
        return null
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام کاربر",
            key: "customerFullName",
            width: "5%",
        }, {
            title: "وضعیت",
            key: "status",
            width: "10%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        }
    ]

    return (
        <TableWithoutEntity
            dataSource={data}
            columns={columns}
        />
    )
}
