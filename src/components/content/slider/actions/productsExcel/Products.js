import { useSelector } from "react-redux"
import { changeSortContentSliderProducts, deleteContentSliderProduct, getContentSlider } from "store/actions/content"
import { CONTENT_SLIDER as entity } from "tools/utils/entities"
import Button from "components/utils/field/button"
import Icon from "components/utils/field/Icon"
import Form from "components/utils/form"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import Skeleton from "components/utils/skeleton"
import TableWithoutEntity from "components/utils/table/TableWithoutEntity"
import Popconfirm from "components/utils/popconfirm"
import { useEffect } from "react"

export default function Products({ ID }) {

    const reload = useSelector((s) => s.reloadList)

    useEffect(() => {
        getContentSlider({ ID })
    }, [reload])

    const { dataList, loading } = useSelector(
        s => s[entity.pluralizeName]
    )

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "کد کالا",
            key: "productID",
            width: "5%",
        },
        {
            title: "نام کالا",
            key: "productName",
            width: "10%",
        },
        {
            title: "عکس کالا",
            key: "productPiclink",
            width: "5%",
            render: (f) =>
                <a href={f} target="blank">
                    <img src={f} width="32" height="32" />
                </a>,
        },
        {
            title: "ترتیب",
            key: "Sort",
            width: "10%",
            render: (r, f) =>
                <Form
                    className="change-count-form"
                    initialValues={{ ...f }}
                    onFinish={onFinish}
                >
                    <FormInputNumber
                        className="hidden"
                        name="ID"
                    />
                    <FormInputNumber
                        name="Sort"
                        label="ترتیب"
                        max={r.availableCount}
                    />
                    <Button
                        name="submit"
                        label={<Icon key="edit" type="edit" title="ویرایش" />}
                        htmlType="submit"
                    />
                </Form>,
        },
        {
            title: "عملیات",
            key: "actions",
            width: "5%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف کالا   "${r.productName}" اطمینان دارید؟`}
                        onConfirm={() => deleteContentSliderProduct({ ID: r.ID })}
                    >
                        <Icon title="حذف" key="delete" type='delete' />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    const onFinish = (values) => {
        changeSortContentSliderProducts(values)
    }

    return (
        <Skeleton
            loading={loading}
            avatar
            active
        >
            <TableWithoutEntity
                dataSource={dataList[0]?.products}
                columns={columns}
            />
        </Skeleton>
    )
}
