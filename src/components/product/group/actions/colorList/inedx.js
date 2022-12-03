import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { deleteGroupColor, getGroupColors } from "store/actions/product"
import { GROUP_COLOR as entity, } from "tools/utils/entities"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Icon from "components/utils/field/Icon"
import Popconfirm from "components/utils/popconfirm"
import Table from "components/utils/table"

export default function ColorList() {
    const { state } = useLocation()
    const navigate = useNavigate()
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getGroupColors({ ID: state.ID })
    }, [state, reload])

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "عنوان",
            key: "Title",
            width: "10%",
        },
        {
            title: "کد رنگ",
            key: "ColorCode",
            width: "10%",
            className: "color-code",
            render: (f, r) => (
                <div style={{ backgroundColor: `${f}` }}>{f}</div>
            ),
        },
        {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف رنگ "${r.Title}" اطمینان دارید؟`}
                        onConfirm={() => deleteGroupColor({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" title="حذف رنگ" />
                    </Popconfirm>
                </div >
            ),
        },
    ]

    return (
        <div className="section-card">
            <h1>جزییات رنگ های گروه {state.name}</h1>
            <div className="group-color-table">
                <Table
                    columns={columns}
                    entity={entity}
                    footer={null}
                />
            </div>
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
