import React from 'react'
import { Switch as AntSwitch } from 'antd';

export default function Switch({ ...props }) {
    return (
        <AntSwitch
            {...props}
            unCheckedChildren="showSearch"
            checkedChildren="showSearch"
            style={{
                marginTop: 16,
            }}
        />
    )
}