import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ORDER_WAREHOUSE_EXIT_LOG as entity } from "tools/utils/entities"
import { getOrderWarehouseLog } from 'store/actions/order'
import Modal from 'components/utils/modal'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'

function Detail({ ID, show, change }) {
    useEffect(() => {
        getOrderWarehouseLog({ ID })
    }, [ID])

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

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
            <span>جزییات خروج از انبار</span>
            <span></span>
        </Modal>
    )
}

export default Detail