import { useEffect, useState } from "react"
import { dispatch } from "store"
import { BLOG_AUTHOR as entity } from "tools/utils/entities"
import { deleteBlogAuthor, getBlogAuthor } from "store/actions/blog"
import { useSelector } from "react-redux"
import { setFilter } from "store/actions/filter"
import { PAGE_SIZE } from "tools/shared/constants"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"
import ListComposed from "components/utils/listComposed"
import Card from "components/blog/author/Card"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getBlogAuthor({ ...filter.blog.author })
    }, [filter.blog.author, reload])

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
                        title={`آیا از حذف نویسنده کد "${r.id} "اطمینان دارید؟`}
                        onConfirm={() => deleteBlogAuthor({ id: r.id })}
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
                author: {
                    ...filter.blog.author,
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
                        label="ایجاد نویسنده جدید"
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