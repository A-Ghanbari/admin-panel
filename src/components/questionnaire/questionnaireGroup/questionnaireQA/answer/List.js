import ActionButton from "components/utils/actionsButton"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { deleteQuestionnaireQA, getQuestionnaireQADetail } from "store/actions/questionnaire"
import { checkFilters } from "tools/utils"
import { QUESTIONNAIRE_QA_DETAIL as entity } from "tools/utils/entities"
import Popconfirm from "components/utils/popconfirm"
import Icon from "components/utils/field/Icon"
import Button from "components/utils/field/button"
import Link from "components/utils/link"
import { useParams } from "react-router-dom"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"
import { Skeleton } from "antd"


export default function List() {
    const { ID } = useParams()
    const filter = useSelector((s) => s.filter)
    const { data, loading } = useSelector((s) => s[entity.name])
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getQuestionnaireQADetail(checkFilters({ ID, ...filter.questionnaire.questionnaireGroup }))
    }, [filter.questionnaire.questionnaireGroup, ID, reload])

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "عنوان",
            key: "title",
            width: "10%",
        }, {
            title: "لوگو",
            key: "logo",
            width: "10%",
            render: (f, r) => (<img src={f} width="32" height="32" alt="تصویر" />),
        }, {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (f) => (f === 1 ? <span className="approved" /> : <span className="unapproved" />),
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./editAnswer/${r.ID}`}>
                        <Icon key="edit" type="edit" title="ویرایش جواب" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف جواب با کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteQuestionnaireQA({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },

    ]


    return (
        <div>
            <ActionButton position="right">
                <Link to="./createAnswer">
                    <Button
                        type="secondary-accent"
                        label="ایجاد جواب"
                    />
                </Link>
            </ActionButton>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <TableWithoutEntity
                    columns={columns}
                    dataSource={data?.answers}
                /></Skeleton>

        </div>
    )
}



