import CustomTable from 'components/utils/table/CustomTable'
import ACL from 'components/ACL'

function Address({ entity, dataSource }) {

    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: "عنوان",
            key: "title"
        }, {
            title: "آدرس",
            key: "address",
        }, {
            title: "استان",
            key: "provinceName"
        }, {
            title: "شهر",
            key: "cityName"
        }, {
            title: "منطقه",
            key: "zone",
        }, {
            title: "کد پستی",
            key: "postalCode",
        }, {
            title: "log",
            key: "longitude",
        }, {
            title: "lat",
            key: "latitude",
        }
    ]

    return (
        <CustomTable
            dataSource={dataSource}
            entity={entity}
            columns={columns}
            rowKey='ID'
        />
    )
}

export default ACL(Address)