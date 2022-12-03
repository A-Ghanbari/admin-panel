import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormEditor from 'components/utils/form/items/FormEditor'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { responseForComment } from 'store/actions/comment'
import { formatQuillValue } from 'tools/utils'

export default function Comment({ data, setValue }) {
    let navigate = useNavigate()

    const onFinish = (values) => {
        responseForComment({
            ID: data.ID,
            ...values,
        })
        setValue(values)
    }

    return (
        <>
            <div className='message-box'>
                <div className="customer-message">
                    <div className='sender'>
                        <div className='sender-avatar' />
                        {data.customerName}
                    </div>
                    <div className='message'>
                        <span dangerouslySetInnerHTML={{ __html: formatQuillValue(data.description) }} />
                        <span className='date'>{data.createdDateTime}</span>
                    </div>
                </div>
                {data.responses?.map(message => (
                    <div className="admin-message">
                        <div className='sender'>
                            <div className='sender-avatar' />
                            {message.userPublished}
                        </div>
                        <div className='message'>
                            <span dangerouslySetInnerHTML={{ __html: formatQuillValue(message.description) }} />
                            <span className='date'>{message.createdDateTime}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Form
                onFinish={onFinish}
                initialValues={{ Message: " " }}
            >
                <FormEditor
                    name="Message"
                    media={false}
                />
                <ActionButton position="center">
                    <Button
                        htmlType="submit"
                        type="primary-dark"
                        label="ارسال پاسخ"
                    />
                    <Button
                        type="secondary-warning"
                        label="بازگشت"
                        onClick={() => navigate(-1)}
                    />
                </ActionButton>
            </Form>
        </>
    )
}
