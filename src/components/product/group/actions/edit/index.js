import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getGroups, editGroup } from "store/actions/product"
import { GROUP as entity } from "tools/utils/entities"
import { checkImageUrl } from "tools/utils"
import Form from "components/utils/form"
import ButtonWithConfirm from "components/utils/formAction/ButtonWithConfirm"
import Tabs from "components/utils/tabs"
import Info from "components/product/group/actions/edit/Info"
import SEO from "components/product/group/actions/edit/SEO"
import Skeleton from "components/utils/skeleton"

export default function Edit() {
    const [groupValue, setGroupValue] = useState(null)
    const { ID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getGroups({ ID })
    }, [ID])

    const { dataList, loading } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "اطلاعات کلی گروه",
            render:
                <Info
                    groupValue={groupValue}
                    setGroupValue={setGroupValue}
                    data={dataList[0]}
                />
        },
        {
            title: "بهینه سازی موتور جستجو ",
            render: <SEO />
        }
    ]

    const onFinish = (values) => {
        editGroup({
            ID,
            ...values,
            ParentId: groupValue,
            picLink: checkImageUrl(values.picLink),
            backGroundImage: checkImageUrl(values.backGroundImage)
        })
        navigate(-1)
    }

    return (
        <div className='section-card'>
            <h1>ویرایش گروه کد {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <Form onFinish={onFinish} initialValues={dataList[0]}>
                    <Tabs tabs={tabs} position="top" forceRender={true} />
                    <ButtonWithConfirm />
                </Form>
            </Skeleton>
        </div>
    )
}
