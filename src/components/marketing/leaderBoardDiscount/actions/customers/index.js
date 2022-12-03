import Tabs from "components/utils/tabs"
import { useLocation, useNavigate } from "react-router-dom"
import List from "components/marketing/leaderBoardDiscount/actions/customers/List"
import Create from "components/marketing/leaderBoardDiscount/actions/customers/Create"
import UploadExcel from "components/marketing/leaderBoardDiscount/actions/customers/UploadExcel"
import ActionButton from "components/utils/actionsButton"
import Button from "components/utils/field/button"

export default function Customers() {
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
        <div className='section-card'>
            <h1>تخفیف مشتری با تخفیف پایه {state.name}</h1>
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
