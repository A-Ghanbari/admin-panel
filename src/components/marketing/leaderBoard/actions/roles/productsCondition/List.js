import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteproductsCondition, deleteproductCondition } from 'store/actions/leaderBoard'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Icon from 'components/utils/field/Icon'
import Popconfirm from 'components/utils/popconfirm'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'

export default function List({ dataList }) {
    let navigate = useNavigate()
    const [data, setData] = useState(null)

    const handlerSearch = (r) => {
        const data = dataList.find(data => data.ID === r.ID)
        setData(data)
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "عنوان",
            key: "title",
            width: "5%",
        }, {
            title: "امتیاز",
            key: "point",
            width: "5%",
        }, {
            title: "پیام",
            key: "message",
            width: "10%",
        }, {
            title: "تاریخ شروع",
            key: "startDate",
            width: "10%",
        }, {
            title: "تاریخ پایان",
            key: "endDate",
            width: "10%",
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
                    <Icon key="search" type="search" onClick={() => handlerSearch(r)} />
                    <Popconfirm
                        title={`آیا از حذف شرط کالا کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteproductsCondition({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    const barcodeStatusColumn = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        },
        {
            title: "کد کالا",
            key: "productID"
        },
        {
            title: "تصویر کالا",
            key: "piclink",
            width: "5%",
            render: (f) => (
                <img src={f} width={35} height={35} alt="تصویر کالا" />
            ),
        },
        {
            title: "نام کالا",
            key: "productName"
        },
        {
            title: "شرطی",
            key: "isAnd",
            width: "5%",
            render: (r) => {
                const orderTrans = {
                    true: "بلی",
                    false: "خیر",
                }[r]
                return orderTrans
            }
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از محصول کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteproductCondition({ ID: r.ID })}
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
            {
                data &&
                <>
                    <h1>کالاهای رکورد <span className='warning'>{data.title}</span> </h1>
                    <TableWithoutEntity
                        columns={barcodeStatusColumn}
                        dataSource={data.products}
                    />
                </>
            }
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
