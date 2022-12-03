import { useEffect, useState } from "react"
import { ROLE_SETTING as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { addCommaToNumber, checkFilters } from "tools/utils"
import { deleteRoleSetting, getRoleSetting } from "store/actions/role"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Filter from "components/role/setting/Filter"
import Card from "components/role/setting/Card"
import Link from "components/utils/link"
import Popconfirm from "components/utils/popconfirm"
import "components/role/setting/setting.scss"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام نقش",
            key: "name",
            width: "5%",
        }, {
            title: "تعداد کاربران",
            key: "countUsers",
            width: "5%",
            render: (r, f) => `${addCommaToNumber(r)} نفر`,
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./users/${r.ID}`} state={{ name: r.name }} title="مشاهده کاربران" >
                        <Icon key="marketers" type="marketers" />
                    </Link>
                    <Link to={`./edit/${r.ID}`} state={{ name: r.name }} title="ویرایش نقش" >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف نقش کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteRoleSetting({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getRoleSetting(checkFilters({ ...filter.role.setting }))
    }, [filter.role.setting, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            role: {
                ...filter.role,
                setting: {
                    ...filter.role.setting,
                    ...values,
                    pageIndex: 1
                }
            }
        }))
    }

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            role: {
                ...filter.role,
                setting: {
                    ...filter.role.setting,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    return (
        <div>
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.role.setting }}
            />
            <ActionButton position="right">
                <Link to="./create/">
                    <Button
                        type="secondary-accent"
                        label="ایجاد نقش جدید"
                    />
                </Link>
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}