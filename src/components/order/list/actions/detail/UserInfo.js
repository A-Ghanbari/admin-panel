import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'
import { detail } from 'tools/shared/order'

function UserInfo({ dataSource, entity }) {
    // const { data } = useSelector(
    //     (s) => s[entity.name]
    // );

    const data = detail[dataSource]

    if (data === undefined) return (null)

    const columns = [
        {
            label: "نام ",
            text: data.name
        },
        {
            label: " نام کاربری ",
            text: data.username
        },
        {
            label: "موبایل  ",
            text: data.mobile
        },
        {
            label: " تلفن ",
            text: data.phone
        },
        {
            label: " ایمیل ",
            text: data.email
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default UserInfo