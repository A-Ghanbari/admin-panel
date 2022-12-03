import { useEffect, useState } from "react"
import { getCentralExchangeBoxItems } from "store/actions/centralExchange"
import { CENTRAL_EXCHANGE_BOX as entity } from "tools/utils/entities"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import Icon from "components/utils/field/Icon"
import ListComposed from "components/utils/listComposed"
import Card from "components/centralExchange/box/Card"
import Filter from "components/centralExchange/box/Filter"
import { useSelector } from "react-redux"
import { setFilter } from "store/actions/filter"
import { dispatch } from "store"
import Link from "components/utils/link"
import PostImage from "components/utils/postImage"

export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector(
        (s) => s.filter
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
            // render: (text, record, index) => (pageIndex - 1) * pageSize + index + 1,
        }, {
            title: "کد سفارش",
            key: "orderID",
            width: "5%",
        }, {
            title: "کد پالت",
            key: "palletID",
            width: "5%",
        }, {
            title: "پست",
            key: "postCompanyID",
            width: "5%",
            render: (f, r) => <PostImage companyId={f} />,
        }, {
            title: "شعبه",
            key: "branch",
            width: "5%"
        }, {
            title: "سازنده پالت",
            key: "palletCreatorName",
            width: "5%"
        }, {
            title: "سازنده جعبه",
            key: "boxCreatorName",
            width: "10%",
        }, {
            title: "دریافت کننده",
            key: "receiverName",
            width: "10%",
        }, {
            title: "شماره برجسب",
            key: "labelNumber",
            width: "10%",
        }, {
            title: "تاریخ دریافت پستچی",
            key: "postmanReceiveDate",
            width: "10%",
        }, {
            title: "سفارش دستی",
            key: "isManual",
            width: "10%",
            render: (r) => {
                return {
                    true: <span className="approved" />,
                    false: <span className="unapproved" />,
                }[r]
            }
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    {!(r.isManual) &&
                        <Link to={`./detail/${r.orderID}`} title="جزییات">
                            <Icon key="eye" type="eye" />
                        </Link>
                    }

                </div>
            ),
        },
    ]

    useEffect(() => {
        getCentralExchangeBoxItems(checkFilters({ ...filter.centralExchange.box }))
    }, [filter.centralExchange.box])

    const filterChangeHandler = (values) => {
        dispatch(setFilter({
            ...filter,
            centralExchange: {
                ...filter.centralExchange,
                box: {
                    ...filter.centralExchange.box,
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
                box: {
                    ...filter.centralExchange.box,
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
                initialValues={{ ...filter.centralExchange.box }}
            />
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                rowKey="orderID"
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}