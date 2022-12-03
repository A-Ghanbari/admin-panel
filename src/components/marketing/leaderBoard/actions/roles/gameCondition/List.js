import { useNavigate } from 'react-router-dom'
import { deleteGameCondition } from 'store/actions/leaderBoard'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Icon from 'components/utils/field/Icon'
import Popconfirm from 'components/utils/popconfirm'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'

export default function List({ dataList, setActiveKey, setType, setInitialValue }) {
    let navigate = useNavigate()

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "بازی",
            key: "gameTitle",
            width: "10%",
        }, {
            title: "تعداد کاربر",
            key: "customerCount",
            width: "5%",
        }, {
            title: "حداکثر کاربر",
            key: "maxUser",
            width: "5%",
        }, {
            title: "حداکثر تعداد استفاده",
            key: "maxUsedPerUser",
            width: "5%",
        }, {
            title: "پیام",
            key: "message",
            width: "10%",
        }, {
            title: "امتیاز",
            key: "point",
            width: "5%",
        }, {
            title: "تاریخ شروع",
            key: "startDate",
            width: "10%",
        }, {
            title: "تاریخ پایان",
            key: "endDate",
            width: "10%",
        }, {
            title: "پایان بازی",
            key: "needToEndGame",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon key="edit" type="edit" onClick={() => editHandler(r.ID)} />
                    <Popconfirm
                        title={`آیا از حذف بازی کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteGameCondition({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    const editHandler = (id) => {
        setInitialValue(dataList.find(s => s.ID === id))
        setType("edit")
        setActiveKey("1")
    }
    return (
        <>
            <TableWithoutEntity
                columns={columns}
                dataSource={dataList}
            />
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="انصراف"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </>
    )
}