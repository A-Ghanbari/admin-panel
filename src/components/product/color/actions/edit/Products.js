import { useNavigate } from 'react-router-dom'
import { deleteColorFromProduct } from 'store/actions/product'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Table from 'components/utils/table'
import Popconfirm from 'components/utils/popconfirm'

export default function Products({ data, entity, ID }) {
    const navigate = useNavigate()
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
            <Popconfirm
                title={`آیا از حذف رنگ با کد "${ID} "اطمینان دارید؟`}
                onConfirm={() => deleteColorFromProduct({ ID })}
            >
                <Button
                    label="حذف رنگ محصولات"
                    type="secondary-warning"
                />
            </Popconfirm>
            <Table
                entity={entity}
                dataSource={data}
                columns={columns}
            />
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="بازگشت"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}
