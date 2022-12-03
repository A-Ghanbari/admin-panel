import React from 'react'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import { useNavigate } from 'react-router-dom'

function ButtonWithConfirm({ loading }) {
    let navigate = useNavigate()

    return (
        <ActionButton position="center">
            <Button
                type="primary-dark"
                name='submit'
                label='تایید'
                loading={loading}
                htmlType='submit'
            />
            <Button
                type="secondary-warning"
                label="انصراف"
                onClick={() => navigate(-1)}
            />
        </ActionButton>
    )
}

export default ButtonWithConfirm