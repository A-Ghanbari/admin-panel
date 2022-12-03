import Table from 'components/utils/table'

export default function Products({ data, entity }) {
    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "تصویر",
            key: "productPicture",
            width: "5%",
            render: (f, r) => (
                <img src={f} width={40} />
            ),
        },
        {
            title: "نام کالا",
            key: "productName",
            width: "10%",
        },
        {
            title: "وضعیت",
            key: "isActive",
            width: "5%",
            render: (f, r) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
    ]
    return (
        <div>
            <Table
                entity={entity}
                dataSource={data}
                columns={columns}
            />
        </div>
    )
}
