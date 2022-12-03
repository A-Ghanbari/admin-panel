import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { changeCommentStatus, getCommentsList } from 'store/actions/comment'
import { COMMENT as entity } from "tools/utils/entities"
import Skeleton from 'components/utils/skeleton'
import Tabs from 'components/utils/tabs'
import Comment from 'components/comment/list/actions/detail/Comment'
import Product from 'components/comment/list/actions/detail/Product'
import FormSelect from 'components/utils/form/items/FormSelect'
import Form from 'components/utils/form'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Detail() {
    const [value, setValue] = useState("")
    const { ID } = useParams()

    useEffect(() => {
        getCommentsList({ ID })
    }, [value])

    const { dataList, loading } = useSelector(
        s => s[entity.pluralizeName]
    )

    const tabs = [
        {
            title: "محصول",
            render: <Product data={dataList[0]} />
        },
        {
            title: "نظر ",
            render: <Comment data={dataList[0]} setValue={setValue} />
        },
    ]

    const changeStatus = (changedValues) => {
        changeCommentStatus({
            ID,
            ...changedValues,
        })
    }

    return (
        <div className='section-card'>
            <h1>نظر با کد {ID}</h1>
            <Skeleton
                avatar
                active
                loading={loading}
            >
                <ColumnGrid col={fieldCol}>
                    <Form
                        initialValues={dataList[0]}
                        onValuesChange={changeStatus}
                    >
                        <FormSelect
                            name="status"
                            label="تغییر وضعیت"
                            items={[
                                {
                                    text: "در انتظار تایید",
                                    value: 0,
                                },
                                {
                                    text: "تایید نشده",
                                    value: 1,
                                },
                                {
                                    text: "تایید شده",
                                    value: 2,
                                },
                            ]}
                        />
                    </Form>
                </ColumnGrid>

                <Tabs tabs={tabs} position="top" defaultActiveKey="1" />
            </Skeleton>
        </div>
    )
}
