import { useEffect, useState } from "react"
import { dispatch } from "store"
import { BLOG_CONTENT as entity } from "tools/utils/entities"
import { deleteBlogContent, getBlogContent } from "store/actions/blog"
import { useSelector } from "react-redux"
import { setFilter } from "store/actions/filter"
import { API_BASE_URL, PAGE_SIZE } from "tools/shared/constants"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"
import ListComposed from "components/utils/listComposed"
import Card from "components/blog/content/Card"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getBlogContent({ ...filter.blog.content })
    }, [filter.blog.content, reload])

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
            title: "عنوان فیسبوک",
            key: "facebookTitle",
            width: "5%",
        }, {
            title: "عنوان توئیتر",
            key: "twitterTitle",
            width: "5%",
        }, {
            title: "تصویر",
            key: "picLink",
            width: "5%",
            render: (f, r) => (
                <img src={`${API_BASE_URL}${f}`} width="32" height="32" alt="تصویر" />
            ),
        }, {
            title: "توضیحات",
            key: "description",
            width: "5%",
        }, {
            title: "وضعیت",
            key: "statusCode",
            width: "5%",
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
                        title={`آیا از حذف محتوا کد "${r.id} "اطمینان دارید؟`}
                        onConfirm={() => deleteBlogContent({ id: r.id })}
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
                content: {
                    ...filter.blog.content,
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
                        label="ایجاد محتوای جدید"
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