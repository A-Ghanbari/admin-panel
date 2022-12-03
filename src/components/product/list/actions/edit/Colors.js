import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'

export default function Colors({ data }) {

    const columns = [
        {
            title: "عنوان",
            key: "title",
        },
        {
            title: "رنگ",
            key: "colorCode",
            className: "color-code",
            render: (f, r) => (
                <div style={{ backgroundColor: `${f}` }}>{f}</div>
            ),
        },
        {
            title: "عکس پس زمینه",
            key: "backgroundImage",
            render: (f, r) => (
                <a href={f} target="blank">
                    <img src={f} width={32} height={32} />
                </a>
            ),
        },
    ]

    return (
        <div>
            <h1>رنگ ها</h1>
            <div className="height-scroll">
                <TableWithoutEntity
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    )
}
