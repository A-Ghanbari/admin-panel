import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { BLOG_GROUP as entity } from "tools/utils/entities"
import { API_BASE_URL, PAGE_SIZE } from "tools/shared/constants"
import { deleteBlogGroup, getBlogGroup } from "store/actions/blog"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"
import ListComposed from "components/utils/listComposed"
import Card from "components/blog/group/Card"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getBlogGroup({ ...filter.blog.group })
    }, [filter.blog.group, reload])

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام",
            key: "name",
            width: "10%",
        }, {
            title: "تصویر",
            key: "piclink",
            width: "5%",
            render: (f, r) => (
                <img src={`${API_BASE_URL}${f}`} width="32" height="32" alt="تصویر" />
            ),
        }, {
            title: "isIndex",
            key: "isIndex",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "isFollow",
            key: "isFollow",
            width: "5%",
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link
                        to={`./edit/${r.id}`}
                        title="ویرایش"
                    >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف گروه کد "${r.id} "اطمینان دارید؟`}
                        onConfirm={() => deleteBlogGroup({ id: r.id })}
                    >
                        <Icon key="delete" type="delete" />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            blog: {
                ...filter.blog,
                group: {
                    ...filter.blog.group,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    return (
        <div>
            <ActionButton position="right">
                <Link to="./create">
                    <Button
                        type="secondary-accent"
                        label="ایجاد گروه جدید"
                    />
                </Link>
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
                rowKey="id"
            />
        </div>
    )
}