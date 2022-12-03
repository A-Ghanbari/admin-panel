import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CONTACT_US_MESSAGE as entity } from "tools/utils/entities"
import { getContactUsMessageDetail } from 'store/actions/content'
import Modal from 'components/utils/modal'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Descriptions from 'components/utils/descriptions'

function Detail({ ID, show, change }) {
    useEffect(() => {
        getContactUsMessageDetail({ ID })
    }, [ID])

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    // It's not standard item distract, but i hate to speak with Back-end team to refactor it and send a fucking normal response just like others
    if (data === undefined) return (null)

    const columns = [
        {
            label: "نام",
            text: data.fullName
        }, {
            label: "ایمیل",
            text: data.email
        }, {
            label: "شماره همراه",
            text: data.cell
        }, {
            label: "عنوان",
            text: data.title
        }, {
            label: "پیام",
            text: data.message
        }, {
            label: "تاریخ ارسال",
            text: data.createdDateTime
        }
    ]

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
            <Descriptions data={columns} />
        </Modal>
    )
}

export default Detail