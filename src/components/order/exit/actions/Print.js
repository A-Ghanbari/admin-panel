import Modal from 'components/utils/modal'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import { downloadInvoicePDF, downloadOrderLabelPDF, downloadWarehouseOrderExcel } from 'store/actions/export'

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
                        label="پرینت تجمیعی"
                        permission="warehouseExitPrintAccumulativePermission"
                        onClick={() => window.open(`/export/acc/${data.ID}`, '_blank')}
                    />
                </ActionButton>
                <ActionButton position="right">
                    <Button
                        type="primary-dark"
                        label="پرینت فاکتورهای انبار"
                        permission="warehouseExitPrintFactorPermission"
                        onClick={() => window.open(`/export/invoice/${data.ID}`, '_blank')}
                    />
                    <Button
                        type="secondary-dark"
                        label="پی دی اف فاکتورهای انبار"
                        permission="warehouseExitPrintFactorPermission"
                        onClick={() => downloadInvoicePDF({ ID: data.ID })}
                    />
                </ActionButton>
                {data.isOut &&
                    <>
                        <ActionButton position="right">
                            <Button
                                type="primary-warning"
                                label="پرینت برچسب های انبار"
                                permission="warehouseExitPrintLabelPermission"
                                onClick={() => window.open(`/export/label/${data.ID}`, '_blank')}
                            />
                            <Button
                                type="secondary-warning"
                                label="پی دی اف برچسب های انبار"
                                permission="warehouseExitPrintLabelPermission"
                                onClick={() => downloadOrderLabelPDF({ ID: data.ID })}
                            />
                        </ActionButton>
                        <ActionButton position="right">
                            <Button
                                type="primary-accent"
                                label="لیست بارکدها"
                                permission="warehouseExitRevertPermission"
                                onClick={() => window.open(`/export/barcode/${data.ID}`, '_blank')}
                            />
                        </ActionButton>
                    </>
                }
                <ActionButton position="right">
                    <Button
                        type="primary-accent"
                        label="خروجی اکسل"
                        permission="warehouseExitRevertPermission"
                        onClick={() => downloadWarehouseOrderExcel({ ID: data.ID })}
                    />
                </ActionButton>
            </Modal>
        </>
    )
}
