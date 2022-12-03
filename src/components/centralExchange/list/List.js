import { useEffect, useState } from "react"
import { deleteCentralExchangeSinglePallet, getItems } from "store/actions/centralExchange"
import { CENTRAL_EXCHANGE as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import Print from "components/centralExchange/list/actions/Print"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Card from "components/centralExchange/list/Card"
import Filter from "components/centralExchange/list/Filter"
import PostImage from "components/utils/postImage"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { checkFilters } from "tools/utils"
import Popconfirm from "components/utils/popconfirm"

export default function List() {
    const [printVisible, setPrintVisible] = useState(false)
    const [printData, setPrintData] = useState({})

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
            // render: (text, record, index) => (pageIndex - 1) * pageSize + index + 1,
        }, {
            title: "سازنده بسته",
            key: "userCreatedName",
            width: "5%",
        }, {
            title: "دریافت کننده",
            key: "postReceiverName",
            width: "5%",
        }, {
            title: "پست",
            key: "postCompanyID",
            width: "5%",
            render: (f, r) => <PostImage companyId={f} />,
        }, {
            title: "شعبه",
            key: "branchName",
            width: "5%"
        }, {
            title: "تعداد جعبه",
            key: "boxCount",
            width: "10%",
            render: (f, r) => `${f} عدد`,
        }, {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Icon title="بیشتر" key="more" type='more'
                        onClick={() => {
                            setPrintVisible(!printVisible)
                            setPrintData({ ID: r.ID })
                        }} />
                    <Popconfirm
                        title={`آیا از حذف پالت "${r.ID}" اطمینان دارید؟`}
                        onConfirm={() => deleteCentralExchangeSinglePallet({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    useEffect(() => {
        getItems(checkFilters({ ...filter.centralExchange.list }))
    }, [filter.centralExchange.list, reload])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            centralExchange: {
                ...filter.centralExchange,
                list: {
                    ...filter.centralExchange.list,
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
            centralExchange: {
                ...filter.centralExchange,
                list: {
                    ...filter.centralExchange.list,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    return (
        <div>
            {printVisible && <Print show={printVisible} change={setPrintVisible} data={printData} />}
            <Filter
                onFinish={filterChangeHandler}
                initialValues={{ ...filter.centralExchange.list }}
            />
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}