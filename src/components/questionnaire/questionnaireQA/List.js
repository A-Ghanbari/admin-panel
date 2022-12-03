import ActionButton from "components/utils/actionsButton"
import ListComposed from "components/utils/listComposed"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { deleteQuestionnaireQA, getQuestionnaireQAList } from "store/actions/questionnaire"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { QUESTIONNAIRE_QA as entity } from "tools/utils/entities"
import Card from 'components/questionnaire/questionnaireQA/Card'
import Popconfirm from "components/utils/popconfirm"
import Icon from "components/utils/field/Icon"
import Button from "components/utils/field/button"
import Link from "components/utils/link"


export default function List() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    const filter = useSelector((s) => s.filter)
    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getQuestionnaireQAList(checkFilters({ ...filter.questionnaire.questionnaireQA })).then((res) => { console.log(res) })
    }, [filter.questionnaire.questionnaireQA, reload])


    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            questionnaire: {
                ...filter.questionnaire,
                questionnaireQA: {
                    ...filter.questionnaire.questionnaireQA,
                    pageIndex: index,
                    pageSize: size,
                }
            }
        }))
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "عنوان گروه",
            key: "parentTitle",
            width: "10%",
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
            title: "ایجاد کننده",
            key: "userCreated",
            width: "10%",
        }, {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "اولویت",
            key: "sort",
            with: "5%"
        }, {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (f) => (f === 1 ? <span className="approved" /> : <span className="unapproved" />),
        }, {
            title: "پاسخ",
            key: "isAnswer",
            width: "5%",
            render: (f) => (f === 1 ? <span className="approved" /> : <span className="unapproved" />),
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./edit/${r.ID}`}>
                        <Icon key="edit" type="edit" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف جوایز بازی با کد "${r.ID} "اطمینان دارید؟`}
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
                <Link to="./create">
                    <Button
                        type="secondary-accent"
                        label="ایجاد سوال و جواب"
                    />
                </Link>
            </ActionButton>
            <ListComposed
                entity={entity}
                columns={columns}
                card={Card}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}



