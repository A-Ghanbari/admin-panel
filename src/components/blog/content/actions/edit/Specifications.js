import FormSelect from "components/utils/form/items/FormSelect"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import { FormUpload } from "components/utils/form/items/FormUpload"
import { ColumnGrid } from "components/utils/grid"
import { useSelector } from "react-redux"
import { API_BASE_URL } from "tools/shared/constants"
import { getSelectItems } from "tools/utils"
import {
    BLOG_AUTHOR as authorEntity,
    BLOG_GROUP as groupEntity,
    BLOG_TAG as tagEntity,
} from "tools/utils/entities"

export default function Specifications({ dataList }) {

    const { dataList: authorList } = useSelector((s) => s[authorEntity.pluralizeName])
    const { dataList: groupList } = useSelector((s) => s[groupEntity.pluralizeName])
    const { dataList: tagList } = useSelector((s) => s[tagEntity.pluralizeName])
    const authors = getSelectItems(authorList)
    const groups = getSelectItems(groupList)
    const tags = getSelectItems(tagList)

    return (
        <>
            <FormUpload
                name="picLink"
                label="بارگذاری تصویر"
                maxCount={1}
                defaultFileList={[{
                    status: 'done',
                    url: `${API_BASE_URL}${dataList.picLink}`,
                }]}
            />
            <ColumnGrid>
                <FormSelectSearch
                    name="authorId"
                    label="نویسنده"
                    items={authors}
                />
                <FormSelectSearch
                    name="categoryId"
                    label="گروه"
                    items={groups}
                />
                <FormSelectSearch
                    name="labels"
                    label="برچسب"
                    allowClear
                    mode="multiple"
                    items={tags}
                />
                <FormSelect
                    name="statusCode"
                    label="کد وضعیت"
                    required={true}
                    items={[
                        {
                            text: "301",
                            value: 301
                        },
                        {
                            text: "302",
                            value: 302
                        },
                        {
                            text: "404",
                            value: 404
                        },
                        {
                            text: "410",
                            value: 410
                        },
                    ]}
                />
                <FormSelect
                    name="position"
                    label="موقعیت نمایش"
                    required={true}
                    items={[
                        {
                            text: "راست بالا",
                            value: 1
                        },
                        {
                            text: "راست پایین",
                            value: 2
                        },
                        {
                            text: "چپ بالا",
                            value: 3
                        },
                        {
                            text: "چپ پایین",
                            value: 4
                        },
                        {
                            text: "وسط",
                            value: 5
                        },
                    ]}
                />
            </ColumnGrid>
        </>
    )
}
