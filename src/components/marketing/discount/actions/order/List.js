import { useNavigate } from 'react-router-dom'
import { deleteDiscountOrder } from 'store/actions/marketing'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Icon from 'components/utils/field/Icon'
import Popconfirm from 'components/utils/popconfirm'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'

export default function List({ dataList }) {
    let navigate = useNavigate()

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "تعداد سفارش",
            key: "count",
            width: "5%",
        }, {
            title: "وضعیت",
            key: "status",
            width: "10%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف سفارش کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteDiscountOrder({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

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
