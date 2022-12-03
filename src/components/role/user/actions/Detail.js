import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getRoleUser } from 'store/actions/role'
import { ROLE_USER as entity } from "tools/utils/entities"
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Descriptions from 'components/utils/descriptions'
import Skeleton from 'components/utils/skeleton'

export default function Detail() {
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getRoleUser({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const data = dataList[0]

    const columns = [
        {
            label: "کد",
            text: data?.ID
        },
        {
            label: "نام کاربری",
            text: data?.userName
        },
        {
            label: "نام",
            text: data?.firstName
        },
        {
            label: "نام خانوادگی",
            text: data?.lastName
        },
        {
            label: "تاریخ عضویت",
            text: data?.createDateTimeString
        },
        {
            label: "نقش",
            text: data?.roleName
        },
        {
            label: "وضعیت",
            text: data?.status ? "فعال" : "غیرفعال"
        },
        {
            label: " تاریخ آخرین ورود",
            text: data?.lastLoginDateTimeString
        },

    ]

    return (
        <div className='section-card'>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <h1>جزییات کاربر {data?.userName}</h1>
                <Descriptions data={columns} />
            </Skeleton>
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="بازگشت"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}

