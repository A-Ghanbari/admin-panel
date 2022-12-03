import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteGroupAttribute, editGroupAttribute, getGroupAttribute } from 'store/actions/product'
import { GROUP_ATTRIBUTE as entity } from 'tools/utils/entities'
import Skeleton from 'components/utils/skeleton'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'
import FormInput from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import Form from 'components/utils/form'
import { FormInputNumber } from 'components/utils/form/items/FormInputNumber'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'
import Popconfirm from 'components/utils/popconfirm'
import Icon from 'components/utils/field/Icon'

export default function Attribute() {
    const { state } = useLocation()
    const navigate = useNavigate()
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getGroupAttribute({ ID: state.ID })
    }, [state, reload])

    const { dataList, loading } = useSelector(
        s => s[entity.pluralizeName]
    )

    const data = []
    for (const item of dataList) {
        data.push(item)
        if (item.Children) {
            for (const child of item.Children) {
                data.push({
                    ...child,
                    parent: item.title,
                    sort: undefined
                })
            }
        }
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        },
        {
            title: "عنوان",
            key: "title",
            render: (r, f) =>
                <FormInput
                    name={`title[${f.ID}]`}
                />
        },
        {
            title: "والد",
            key: "parent",
        },
        {
            title: "نوع",
            key: "selectType",
            render: (r, f) =>
                <FormSelect
                    name={`selectType[${f.ID}]`}
                    items={[
                        {
                            text: "TextBox",
                            value: 1
                        },
                        {
                            text: "CheckBox",
                            value: 2
                        },
                    ]}
                />
        },
        {
            title: "ترتیب",
            key: "sort",
            render: (r, f) =>
                f.sort >= 0 &&
                <FormInputNumber
                    name={`sort[${f.ID}]`}
                />
        },
        {
            title: "عملیات",
            key: "actions",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف ویژگی کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteGroupAttribute({ ID: r.ID })}
                    >
                        <Icon key="delete" type="delete" title="حذف ویژگی" />
                    </Popconfirm>
                </div >
            ),
        },
    ]

    const IDs = []
    const initialValues = {}
    for (const item of data) {
        initialValues[`title[${item.ID}]`] = item.title
        initialValues[`selectType[${item.ID}]`] = item.selectType
        initialValues[`sort[${item.ID}]`] = item.sort
        IDs.push(item.ID)
    }

    const onFinish = (values) => {
        const data = []
        IDs.map(id => (
            data.push({
                ID: id,
                title: values[`title[${id}]`],
                selectType: values[`selectType[${id}]`],
                sort: values[`sort[${id}]`],
            })
        ))
        editGroupAttribute(data)
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>جزئیات ویژگی های گروه {state.name}</h1>
                <Form
                    onFinish={onFinish}
                    initialValues={initialValues}
                >
                    <div className="height-scroll group-attribute-table">
                        <TableWithoutEntity
                            dataSource={data}
                            columns={columns}
                        />
                    </div>
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
