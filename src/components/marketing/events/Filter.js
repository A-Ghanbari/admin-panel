import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getLeaderBoardList } from "store/actions/leaderBoard"
import { LEADER_BOARD as leaderBoardEntity } from "tools/utils/entities"
import Collapse from "components/utils/collapse"
import Form from "components/utils/form"
import { ColumnGrid, Row } from "components/utils/grid"
import Button from "components/utils/field/button"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { getSelectItems } from "tools/utils"

export default function Filter({ initialValues, onFinish }) {
    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const { dataList: leaderBoardList } = useSelector((s) => s[leaderBoardEntity.pluralizeName])
    const leaderBoard = getSelectItems(leaderBoardList)

    useEffect(() => {
        getLeaderBoardList({ pagesize: 10000 })
    }, [])

    return (
        <Collapse title="فیلتر">
            <Form onFinish={onFinish} initialValues={initialValues}>
                <Row className="filter-form">
                    <ColumnGrid col={fieldCol}>
                        <FormSelectSearch
                            name="LeaderBoardID"
                            label="تابلوی امتیاز"
                            items={[{ text: "همه", value: " " }, ...leaderBoard]}
                        />
                    </ColumnGrid>
                    <Button name="submit" label="جستجو" htmlType="submit" />
                </Row>
            </Form>
        </Collapse>
    )
}
