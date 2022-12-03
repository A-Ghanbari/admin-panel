import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { createManualOrder, getOrderInfo } from 'store/actions/order'
import Form from 'components/utils/form'
import { ColumnGrid, Row } from 'components/utils/grid'
import Select from 'components/utils/field/select'
import { getManualOrderTypeList } from "store/actions/manualOrder"
import { checkValidation, convertDigitToChar } from 'tools/utils'
import Collapse from 'components/utils/collapse'
import { ORDER as entity, MANUAL_ORDER_TYPE as filterEntity } from "tools/utils/entities"
import CustomTable from 'components/utils/table/CustomTable'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import ButtonWithConfirm from 'components/utils/formAction/ButtonWithConfirm'

function ManualOrder() {
    const { ID } = useParams()
    let navigate = useNavigate()
    const [productsList, setProductsList] = useState([])

    const { data, loading } = useSelector(
        (s) => s[entity.name]
    )
    const { data: manualOrderType } = useSelector(
        (s) => s[filterEntity.name]
    )

    useEffect(() => {
        getOrderInfo({ originalOrderID: ID })
        getManualOrderTypeList()
    }, [ID])

    const type = []
    for (const item of manualOrderType) {
        type.push({
            text: item.title,
            value: item.ID
        })
    }

    const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            render: (text, record, index) => index + 1
        }, {
            title: 'کد کالا',
            key: "productID"
        }, {
            title: 'شماره حواله',
            key: "commerceID"
        }, {
            title: 'نام کالا',
            key: "productName",
        }, {
            title: 'تعداد کالا',
            key: "productCount",
        }, {
            title: 'موجودی انبار',
            key: "productCurrentCount",
        }, {
            title: 'تعداد در سفارش اپراتوری',
            key: "changeProductCount",
            render: (r, f) => {
                const optionsList = [{
                    text: '--انتخاب کنید--',
                    value: ' '
                }];
                for (let i = 0; i < parseInt(f.productCount); i++) {
                    optionsList.push({
                        text: `${convertDigitToChar(i + 1)} عدد`,
                        value: `${f.productID}_${f.commerceID}_${i + 1}`
                    });
                }
                return (
                    <Select
                        onSelect={(e) => changeProductCountHandler(e, f.productID, f.commerceID)}
                        items={optionsList}
                    />
                )
            }
        }
    ]

    const onFinish = (values) => {
        let serviceModel = {
            manualOrderTypeID: values.manualOrderTypeID,
            originalOrderID: ID,
            ticketID: null,
            userMessage: values.userMessage,
            items: productsList
        }
        const validation = checkValidation({
            model: serviceModel,
            validationList: [
                {
                    key: 'items',
                    message: 'لطفا حداقل یک کالا انتخاب نمایید.'
                }
            ]
        });
        if (validation) {
            createManualOrder(serviceModel)
            navigate(-1)
        }
    };

    const changeProductCountHandler = (count, productID, commerceID) => {
        setProductsList(list => [...list.filter(entry => entry.productID !== productID)])

        if (count !== ' ') {
            setProductsList(s => [...s, {
                productID: productID,
                CommerceID: commerceID,
                productCount: parseInt(count)
            }])
        }
    }

    return (
        <div className="section-card">
            <h1>ایجاد سفارش اپراتوری برای شماره سفارش: {ID}</h1>
            <Form
                name="manualOrderForm"
                onFinish={onFinish}
                initialValues={data.paymentDetails}
                autoComplete="off"
            >
                <Row className="edit-form">
                    <ColumnGrid col={fieldCol}>
                        <FormSelect
                            name='manualOrderTypeID'
                            label='علت ثبت'
                            items={type}
                        />
                        <FormTextArea
                            name='userMessage'
                            label='توضیحات'
                        />
                    </ColumnGrid>
                    <Collapse title="لیست کالاهای اصلی">
                        <CustomTable
                            entity={entity}
                            dataSource="items"
                            columns={columns}
                            rowKey='productID'
                        />
                    </Collapse>
                    <Collapse title="لیست کالاهای جانبی">
                        <CustomTable
                            entity={entity}
                            dataSource="accessories"
                            columns={columns}
                            rowKey='productID'
                        />
                    </Collapse>
                    <ButtonWithConfirm loading={loading} />
                </Row>
            </Form>
        </div>
    )
}

export default ManualOrder