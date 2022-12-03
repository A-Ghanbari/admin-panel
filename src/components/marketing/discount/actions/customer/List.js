import { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteDiscountCustomer, getDiscountCustomerList } from 'store/actions/marketing'
import { DISCOUNT_CUSTOMER as entity } from "tools/utils/entities"
import Skeleton from "components/utils/skeleton"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"
import Popconfirm from 'components/utils/popconfirm'
import Icon from 'components/utils/field/Icon'

export default function List() {
    const { ID } = useParams()
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getDiscountCustomerList({ basicConditionID: ID })
    }, [ID, reload])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام کاربری",
            key: "userName",
            width: "5%",
        }, {
            title: "نام",
            key: "customerFullName",
            width: "5%",
        }, {
            title: "وضعیت",
            key: "statusName",
            width: "5%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف کد تخفیف "${r.customerFullName} "اطمینان دارید؟`}
                        onConfirm={() => deleteDiscountCustomer({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    return (
        <Skeleton
            avatar
            active
            loading={loading}
        >
            <TableWithoutEntity
                columns={columns}
                dataSource={dataList}
            />
        </Skeleton>

    )
}
