import Descriptions from 'components/utils/descriptions'
import { useSelector } from 'react-redux'

function UserInfo({ dataSource, entity }) {
    const { data } = useSelector(
        (s) => s[entity.name]
    );

    const detail = data[dataSource]

    if (detail === undefined) return (null)

    const columns = [
        {
            label: "نام ",
            text: detail.name
        },
        {
            label: " نام کاربری ",
            text: detail.username
        },
        {
            label: "موبایل  ",
            text: detail.mobile
        },
        {
            label: " تلفن ",
            text: detail.phone
        },
        {
            label: " ایمیل ",
            text: detail.email
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default UserInfo