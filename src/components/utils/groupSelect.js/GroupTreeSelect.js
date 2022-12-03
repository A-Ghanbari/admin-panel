import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Form as AntForm } from 'antd'
import { GROUP_LIST as entity, } from "tools/utils/entities"
import TreeSelect from 'components/utils/field/treeSelect'
import { getChildGroupTreeSelect, getParentGroupTreeSelect } from 'tools/utils'

export default function GroupTreeSelect({ value, setValue, ...props }) {
    const [treeData, setTreeData] = useState([])
    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    useEffect(() => {
        setTreeData(getParentGroupTreeSelect(dataList))
    }, [dataList])

    const onLoadData = ({ id }) =>
        new Promise((resolve) => {
            setTimeout(() => {
                setTreeData(
                    treeData.concat(getChildGroupTreeSelect(dataList, id)),
                )
                resolve(undefined);
            }, 300)
        })

    const onChange = (value) => {
        setValue(value)
    }

    return (
        <AntForm.Item
            label="گروه"
            className='form-item'
        >
            {
                treeData.length &&
                <TreeSelect
                    treeDataSimpleMode
                    placeholder='انتخاب گروه'
                    loading={loading}
                    showSearch={true}
                    treeData={treeData}
                    loadData={onLoadData}
                    value={value}
                    onChange={onChange}
                    {...props}
                />
            }
        </AntForm.Item>
    )
}