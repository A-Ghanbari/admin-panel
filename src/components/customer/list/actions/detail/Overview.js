import ACL from 'components/ACL';
import Descriptions from 'components/utils/descriptions'
import Image from 'components/utils/image';
import { useSelector } from 'react-redux'

function Overview({ dataSource, entity }) {
    const { data } = useSelector(
        (s) => s[entity.name]
    );

    const detail = data[dataSource]

    if (detail === undefined) return (null)

    const columns = [
        {
            label: "نام",
            text: detail.firstName
        }, {
            label: "نام خانوادگی",
            text: detail.lastName
        }, {
            label: "جنسیت",
            text: detail.genderName
        }, {
            label: "کد ملی",
            text: detail.nationalCode
        }, {
            label: "وضعیت کد ملی",
            text: detail.isValidNationalCode
        }, {
            label: "تاریخ تولد",
            text: detail.birthDateString
        }
    ]

    return (
        <>
            <Image src={detail.picLink} width={200} />
            <Descriptions data={columns} />
        </>
    )
}

export default ACL(Overview)