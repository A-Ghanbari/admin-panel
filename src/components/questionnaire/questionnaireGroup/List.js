import ActionButton from "components/utils/actionsButton"
import ListComposed from "components/utils/listComposed"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { dispatch } from "store"
import { setFilter } from "store/actions/filter"
import { deleteQuestionnaireGroup, getQuestionnaireGroupList } from "store/actions/questionnaire"
import { PAGE_SIZE } from "tools/shared/constants"
import { checkFilters } from "tools/utils"
import { QUESTIONNAIRE_GROUP as entity } from "tools/utils/entities"
import Card from 'components/questionnaire/questionnaireGroup/Card'
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
        getQuestionnaireGroupList(checkFilters({ ...filter.questionnaire.questionnaireGroup }))
    }, [filter.questionnaire.questionnaireGroup, reload])


    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
        dispatch(setFilter({
            ...filter,
            questionnaire: {
                ...filter.questionnaire,
                questionnaireGroup: {
                    ...filter.questionnaire.questionnaireGroup,
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
        },
        {
            title: "عنوان",
            key: "title",
            width: "10%",
        },
        {
            title: "لوگو",
            key: "logo",
            width: "10%",
            render: (f, r) => (
                <img src={f} width="32" height="32" alt="تصویر" />
            ),
        },
        {
            title: "تعداد سوالات",
            key: "questionCount",
            width: "5%"
        },
        {
            title: "تعداد تابلو امتیازات",
            key: "leaderboardsCount",
            width: "5%"
        },
        {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        }, {
            title: "ایجاد کننده",
            key: "userCreated",
            width: "10%",
        }, {
            title: "تاریخ ایجاد",
            key: "createdDateTime",
            width: "10%",
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./createQuestion/${r.ID}`}>
                        <Icon key="createQA" type="questionnaire" title="ساخت سوال" />
                    </Link>
                    <Link to={`./edit/${r.ID}`}>
                        <Icon key="edit" type="edit" title="ویرایش" />
                    </Link>
                    <Popconfirm
                        title={`آیا از حذف گروه بندی با کد "${r.ID} "اطمینان دارید؟`}
                        onConfirm={() => deleteQuestionnaireGroup({ ID: r.ID })}
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
                        label="ایجاد گروه بندی"
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



