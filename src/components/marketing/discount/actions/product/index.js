import { useLocation, useNavigate, useParams } from "react-router-dom"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"
import Tabs from "components/utils/tabs"
import List from "components/marketing/discount/actions/product/List"
import Create from "components/marketing/discount/actions/product/Create"
import UploadExcel from "components/marketing/discount/actions/product/UploadExcel"

export default function Product() {
    const { state } = useLocation()
    let navigate = useNavigate()

    const tabs = [
        {
            title: "مشاهده لیست",
            render: <List />,
        },
        {
            title: "ایجاد تخفیف",
            render: <Create />,
        },
        {
            title: "آپلود فایل",
            render: <UploadExcel />,
        }
    ]

    return (
        <div className="section-card">
            <h1>تخفیف محصولات با تخفیف پایه {state.name}</h1>
            <Tabs tabs={tabs} position="top" />
            <ActionButton position="center">
                <Button
                    type="secondary-warning"
                    label="انصراف"
                    onClick={() => navigate(-1)}
                />
            </ActionButton>
        </div>
    )
}
