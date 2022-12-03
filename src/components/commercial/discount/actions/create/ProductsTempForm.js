import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { getState, dispatch } from "store"
import { DISCOUNT_DRAFT as discountDraftsEntity } from "tools/utils/entities"
import { InputNumber } from "components/utils/field/input"
import Button from "components/utils/field/button"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"
import Notification from "components/utils/notification"

export default function ProductsTempForm() {
    const [stateInput, setStateInput] = useState([])

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current = stateInput
    }, [stateInput])

    const { dataList } = useSelector(
        (s) => s[discountDraftsEntity.pluralizeName]
    )

    function onSubmit(f) {
        const filteredData = Object.keys(inputRef.current).find(id => id === `${f.ID}`)
        if (inputRef.current[filteredData].Percent !== undefined && inputRef.current[filteredData].MaxCount !== undefined) {
            if (getState()["discountDraftData"].find(item => item.ID === inputRef.current[filteredData].ID) === undefined) {
                dispatch({
                    type: "DISCOUNT_DRAFT_DATA",
                    payload: [
                        ...getState()["discountDraftData"],
                        inputRef.current[filteredData],
                    ]
                })
            }
            else {
                Notification.error(` محصول ${inputRef.current[filteredData].productName}در لیست تخفیف‌ها وجود دارد.`)
            }
        } else {
            if (inputRef.current[filteredData].Percent === undefined) {
                Notification.error("فیلد درصد پر نشده است")
            } else {
                Notification.error("فیلد تعداد پر نشده است")
            }
        }
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نام محصول",
            key: "productName",
            width: "10%",
        }, {
            title: "تامین کننده",
            key: "supplierName",
            width: "10%",
        }, {
            title: "انبار",
            key: "supplierWarehouseName",
            width: "10%",
        }, {
            title: "مقدار دهی",
            key: "test",
            width: "50%",
            render: (r, f) =>
                <div className="input-table-form">
                    <InputNumber
                        placeholder="درصد"
                        max={100}
                        min={0}
                        onChange={(e) => setStateInput((s) => ({ ...s, [f.ID]: { ...s[f.ID], Percent: e, ...f } }))}
                    />
                    <InputNumber
                        placeholder="تعداد"
                        min={0}
                        onChange={(e) => setStateInput((s) => ({ ...s, [f.ID]: { ...s[f.ID], MaxCount: e, ...f } }))}
                    />
                    <Button
                        type="primary-accent"
                        label="تایید"
                        onClick={() => onSubmit(f)}
                    />
                </div>
        },
    ]

    return (
        <TableWithoutEntity columns={columns} dataSource={dataList} />
    )
}