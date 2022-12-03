import ACL from 'components/ACL'
import CustomTable from 'components/utils/table/CustomTable'

function ReagentCode({ entity, dataSource }) {
    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: "نام کاربری",
            key: "userName"
        }, {
            title: "نام",
            key: "firstName",
        }, {
            title: "نام خانوادگی",
            key: "lastName"
        }, {
            title: "تاریخ ثبت",
            key: "registerDate"
        }
    ]
    return (
        <CustomTable
            dataSource={dataSource}
            entity={entity}
            columns={columns}
            rowKey='userName'
        />
    )
}

export default ACL(ReagentCode)