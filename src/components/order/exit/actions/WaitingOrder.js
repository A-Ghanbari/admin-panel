import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getOrderWarehouseWaitingList } from 'store/actions/order'
import { ORDER_WAREHOUSE_EXIT_WAITING_LIST as entity } from "tools/utils/entities"
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import { Input } from 'components/utils/field/input'
import { Col, ColumnGrid } from 'components/utils/grid'
import Modal from 'components/utils/modal'

const fieldCol = { xs: 12, sm: 8, md: 6, lg: 6, xl: 4, xxl: 4 }
function WaitingOrder({ show, change, ID }) {
    const [value, setValue] = useState(null)
    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )
    useEffect(() => {
        getOrderWarehouseWaitingList({ ID })
    }, [ID])

    const handleConfirm = () => {
        change(true)
    }

    const handleCancel = () => {
        change(false)
    }

    return (
        <Modal
            visible={show}
            handleCancel={handleCancel}
            onCancel={handleConfirm}
            width={800}
            footer={
                <ActionButton position="center">
                    <Button
                        type="secondary-warning"
                        label="بستن"
                        loading={loading}
                        onClick={() => change(false)}
                    />
                </ActionButton>
            }
        >
            <h3>کد {ID}</h3>
            <Col>
                <Input
                    name="waitingSearch"
                    placeholder="جستجوی شماره سفارش"
                    onChange={e => setValue(e.target.value)}
                />
            </Col>
            <div className='waiting-code-wrapper'>
                {(data.length) ?
                    <ColumnGrid col={fieldCol}>
                        {data.map((item) =>
                            value ?
                                item.toString().includes(value) ?
                                    <div className='waiting-code-list' key={item}>{item}</div>
                                    : null
                                : <div className='waiting-code-list' key={item}>{item}</div>
                        )}
                    </ColumnGrid>
                    :
                    <div>رکورد مورد نظر دارای سفارش در انتظار پردازش نمی باشد.</div>
                }
            </div>
        </Modal>
    )
}

export default WaitingOrder