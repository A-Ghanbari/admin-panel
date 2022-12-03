import React from 'react'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Modal from 'components/utils/modal'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 12, sm: 8, md: 6, lg: 6, xl: 4, xxl: 4 }
function FailedOrder({ show, change, data }) {
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
                        onClick={() => change(false)}
                    />
                </ActionButton>
            }
        >
            <h3>کد {data.ID}</h3>
            <div className='waiting-code-wrapper'>
                {(data.list.length) ?
                    <ColumnGrid col={fieldCol}>
                        {data.list.map((item) =>
                            <div className='waiting-code-list' key={item}>{item}</div>
                        )}
                    </ColumnGrid>
                    :
                    <div>رکورد مورد نظر دارای سفارش ناموفق نمی باشد..</div>
                }
            </div>
        </Modal>
    )
}

export default FailedOrder