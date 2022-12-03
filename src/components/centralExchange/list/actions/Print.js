import Modal from 'components/utils/modal'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import { exportTableExcelFile } from 'store/actions/export'
import API_SERVICES from 'tools/shared/apis'
import { useState } from 'react'

export default function Print({ data, show, change }) {
    const [loading, setLoading] = useState(false)
    const handleConfirm = () => {
        change(true)
    }

    const handleCancel = () => {
        change(false)
    }

    return (
        <>
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
                            onClick={() => {
                                change(false)
                            }}
                        />
                    </ActionButton>
                }
            >
                <h3>کد {data.ID}</h3>
                <ActionButton position="right">
                    <Button
                        type="primary-accent"
                        label="لیست بارکدها"
                        permission="getPaletteListPermission"
                        onClick={() => window.open(`/export/central-exchange-barcode/${data.ID}`, '_blank')}
                    />
                </ActionButton>
                <ActionButton position="right">
                    <Button
                        loading={loading}
                        type="primary-dark"
                        label="خروجی اکسل"
                        onClick={() => exportTableExcelFile({
                            url: `${API_SERVICES.centralExchange.exchangePallet.excel}${data.ID}`,
                            method: "GET",
                            fileName: 'pallet-export',
                            data: {},
                            loading: setLoading
                        })}
                    />
                </ActionButton>
            </Modal>
        </>
    )
}
