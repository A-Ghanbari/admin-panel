import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { CUSTOMER as entity } from "tools/utils/entities"
import { checkFilters, checkImageUrl } from 'tools/utils'
import { editCustomer, getCustomer } from 'store/actions/customer'
import Address from 'components/customer/list/actions/edit/Address'
import Skeleton from 'components/utils/skeleton'
import Info from 'components/customer/list/actions/edit/Info'
import Contact from 'components/customer/list/actions/edit/Contact'
import Tabs from 'components/utils/tabs'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'

export default function Edit() {
    const [info, setInfo] = useState()
    const [contact, setContact] = useState()
    const [address, setAddress] = useState()
    const { ID } = useParams()
    let navigate = useNavigate()

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )

    useEffect(() => {
        getCustomer({ userName: ID })
    }, [ID])

    const onFinish = () => {
        const fields = {
            customerPersonalInfo: {
                ...info,
                ...checkFilters({ birthDate: info.birthDateString }),
                picLink: checkImageUrl(info.picLink)
            },
            customerAddresses: address,
            customerContactInfo: contact
        }
        editCustomer(fields)
        navigate(-1)
    }

    const tabs = data && [
        {
            title: "مشخصات",
            render: <Info data={data.customerPersonalInfo} setInfo={setInfo} />
        },
        {
            title: "آدرس ",
            render: <Address data={data.customerAddresses} address={address} setAddress={setAddress} />
        },
        {
            title: "تماس",
            render: <Contact data={data.customerContactInfo} setContact={setContact} />
        }
    ]

    return (
        <div className="section-card">
            <h1>ویرایش کاربر "{ID}"</h1>
            <Skeleton
                loading={loading}
                avatar
                active
            >
                <Tabs tabs={tabs} position="top" forceRender />
                <ActionButton position="center">
                    <Button
                        type="primary-dark"
                        label='تایید'
                        onClick={onFinish}
                    />
                    <Button
                        type="secondary-warning"
                        label="انصراف"
                        onClick={() => navigate(-1)}
                    />
                </ActionButton>
            </Skeleton>
        </div >
    )
}