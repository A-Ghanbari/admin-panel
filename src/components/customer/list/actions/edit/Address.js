import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import Form from 'components/utils/form'
import { FormInput } from 'components/utils/form/items/FormInput'
import FormProvinceAndCity from 'components/utils/form/items/FormProvinceAndCity'
import { ColumnGrid } from 'components/utils/grid'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'
import Icon from 'components/utils/field/Icon'
import Modal from 'components/utils/modal'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
function Address({ data, setAddress, address }) {
    const [province, setProvince] = useState([])
    const [edit, setEdit] = useState(0)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!isEmpty(data)) {
            setAddress(data)
        }
    }, [data])

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "عنوان",
            key: "title",
            width: "5%",
        }, {
            title: "آدرس",
            key: "address",
            width: "15%",
        }, {
            title: "منطقه",
            key: "zone",
            width: "5%",
        }, {
            title: "longitude",
            key: "longitude",
            width: "5%",
        }, {
            title: "latitude",
            key: "latitude",
            width: "5%",
        }, {
            title: "کد پستی",
            key: "postalCode",
            width: "5%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "5%",
            render: (f, r, i) => (
                <div className="actions">
                    <Icon key="edit" type="edit"
                        onClick={() => editHandler(r, i)}
                    />
                </div>
            ),
        },
    ]

    const editHandler = (values, index) => {
        setProvince([values.provinceID.toString(), values.cityID.toString()])
        setEdit(index)
        setVisible(!visible)
    }

    const onFinish = (values) => {
        const newArry = [...address]
        newArry[edit] = {
            ...values,
            provinceID: province[0],
            cityID: province[1]
        }
        setAddress(newArry)
    }

    return (
        <>
            <TableWithoutEntity
                dataSource={address}
                columns={columns}
            />
            {address &&
                <Modal
                    visible={visible}
                    handleCancel={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={800}
                    footer={false}
                >
                    <Form
                        initialValues={address[edit]}
                        onFinish={onFinish}
                    >
                        <ColumnGrid col={fieldCol}>
                            <FormInput
                                name='title'
                                label='عنوان'
                                required={true}
                            />
                            <FormInput
                                name='address'
                                label='آدرس'
                                required={true}
                            />
                            {province !== [] && <FormProvinceAndCity
                                label='استان و شهر'
                                defaultValues={province}
                                onChange={
                                    (selectedOptions) => {
                                        setProvince(selectedOptions)
                                    }
                                }
                            />}
                            <FormInput
                                name='zone'
                                label='منطقه'
                                required={true}
                            />
                            <FormInput
                                name='longitude'
                                label='longitude'
                                required={true}
                            />
                            <FormInput
                                name='latitude'
                                label='latitude'
                                required={true}
                            />
                            <FormInput
                                name='postalCode'
                                label='کد پستی'
                                required={true}
                            />
                            <FormInput
                                name='ID'
                                className="hidden"
                                required={true}
                            />
                        </ColumnGrid>
                        <ActionButton position="center">
                            <Button
                                htmlType="submit"
                                label="تایید"
                                onClick={() => setVisible(false)}
                            />
                            <Button
                                type="secondary-warning"
                                label="بستن"
                                onClick={() => setVisible(false)}
                            />
                        </ActionButton>
                    </Form>
                </Modal>}
        </>
    )
}

export default Address