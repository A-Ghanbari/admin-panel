import { useEffect, useState } from "react"
import { dispatch } from "store"
import { BLOG_COMMENT as entity } from "tools/utils/entities"
import { deleteBlogComment, getBlogComment } from "store/actions/blog"
import { useSelector } from "react-redux"
import { setFilter } from "store/actions/filter"
import { PAGE_SIZE } from "tools/shared/constants"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"
import ListComposed from "components/utils/listComposed"
import Card from "components/blog/comment/Card"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getBlogComment({ ...filter.blog.comment })
    }, [filter.blog.comment, reload])

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نظر دهنده",
            key: "fullName",
            width: "10%",
        }, {
            title: "توضیحات",
            key: "description",
            width: "5%",
        }, {
            title: "محتوا",
            key: "contentName",
            width: "5%",
        }, {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (r) => {
                const orderTrans = {
                    0: "در انتظار تایید",
                    1: "تایید شده",
                    2: "تایید نشده"
                }[r]
                return orderTrans
            }
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
                        title=" ویرایش وضعیت"
                    >
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف نظر کد "${r.id} "اطمینان دارید؟`}
                        onConfirm={() => deleteBlogComment({ id: r.id })}
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
                comment: {
                    ...filter.blog.comment,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }


    return (
        <div>
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