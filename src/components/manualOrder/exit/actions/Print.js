import Modal from 'components/utils/modal'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import { downloadManualInvoicePDF, downloadManualLabelPDF, downloadWarehouseManualOrderExcel } from 'store/actions/export'

export default function Print({ data, show, change }) {
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
                            onClick={() => change(false)}
                        />
                    </ActionButton>
                }
            >
                <h3>کد {data.ID}</h3>
                <ActionButton position="right">
                    <Button
                        type="primary-accent"
                        label="پرینت تجمیعی"
                        permission="warehouseExitManualPrintAccumulativePermission"
                        onClick={() => window.open(`/export/accManual/${data.ID}`, '_blank')}
                    />
                </ActionButton>
                <ActionButton position="right">
                    <Button
                        type="primary-dark"
                        label="پرینت فاکتورهای انبار"
                        permission="warehouseExitManualPrintFactorPermission"
                        onClick={() => window.open(`/export/invoiceManual/${data.ID}`, '_blank')}
                    />
                    <Button
                        type="secondary-dark"
                        label="پی دی اف فاکتورهای انبار"
                        permission="warehouseExitManualPrintFactorPermission"
                        onClick={() => downloadManualInvoicePDF({ ID: data.ID })}
                    />
                </ActionButton>
                {data.isOut &&
                    <ActionButton position="right">
                        <Button
                            type="primary-warning"
                            label="پرینت برچسب های انبار"
                            permission="warehouseExitManualPrintLabelPermission"
                            onClick={() => window.open(`/export/labelManual/${data.ID}`, '_blank')}
                        />
                        <Button
                            type="secondary-warning"
                            label="پی دی اف برچسب های انبار"
                            permission="warehouseExitManualPrintLabelPermission"
                            onClick={() => downloadManualLabelPDF({ ID: data.ID })}
                        />
                    </ActionButton>
                }
                <ActionButton position="right">
                    <Button
                        type="primary-accent"
                        label="خروجی اکسل"
                        permission="warehouseExitRevertPermission"
                        onClick={() => downloadWarehouseManualOrderExcel({ ID: data.ID })}
                    />
                </ActionButton>
            </Modal>
        </>
    )
}
