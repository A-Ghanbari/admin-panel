import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Form as AntForm } from "antd"
import { dispatch } from 'store'
import { useNavigate } from 'react-router-dom'
import { setFormStep } from 'store/actions/public'
import Steps from 'components/utils/steps'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import useWindowSize from 'hooks/useWindowSize'
import { Col, Row } from 'components/utils/grid'
import 'components/utils/form/form.scss'

function FormStep({
    items,
    initialValues,
    values = {},
    onFinish,
    ...rest }) {
    const [current, setCurrent] = useState(0)
    const [completedSteps, setCompletedSteps] = useState([0])
    const navigate = useNavigate()
    const { width } = useWindowSize()
    const [form] = AntForm.useForm()

    const formStep = useSelector(
        (s) => s.formStep
    )

    useEffect(() => {
        form.setFieldsValue(initialValues)
    }, [form, initialValues])

    const stepHandler = () => {
        form.validateFields()
            .then((values) => {
                dispatch(setFormStep({
                    ...formStep,
                    ...values
                }))
                setCurrent(current + 1)
                setCompletedSteps(s => [...s, current + 1])
            })
    }

    const onChange = (value) => {
        if (completedSteps.includes(value)) {
            form.validateFields()
                .then((values) => {
                    dispatch(setFormStep({
                        ...formStep,
                        ...values,
                        FilePath: undefined
                    }))
                    setCurrent(value)
                })
        }
    }

    return (
        <div className='form-step-container'>
            <Row>
                <Col xs={2} sm={2} md={2} lg={24} xl={24} xxl={24}>
                    <Steps
                        className="form-step"
                        direction={width > 991 ? "horizontal" : "vertical"}
                        current={current}
                        items={items}
                        onChange={onChange}
                        responsive={false}
                        size="small"
                    />
                </Col>
                <Col xs={22} sm={22} md={22} lg={24} xl={24} xxl={24}>
                    {items[current].withoutForm ?
                        items[current].content
                        :
                        <AntForm form={form} {...rest} >
                            {items[current].content}
                        </AntForm>
                    }
                </Col>
            </Row>
            {items[current].withoutForm ?
                <ActionButton position="center">
                    <Button
                        label="انصراف"
                        type="secondary-warning"
                        onClick={() => navigate(-1)}
                    />
                </ActionButton>
                :
                <ActionButton position="center">
                    <Button
                        label="انصراف"
                        type="secondary-warning"
                        onClick={() => navigate(-1)}
                    />
                    {current > 0 && (
                        <Button
                            label="مرحله قبل"
                            type="secondary-accent"
                            onClick={() => setCurrent(current - 1)}
                        />
                    )}
                    {current === items.length - 1 && (
                        <Button
                            label="تایید"
                            type="primary-dark"
                            onClick={onFinish}
                        />
                    )}
                    {current < items.length - 1 && (
                        <Button
                            label="مرحله بعد"
                            type="secondary-accent"
                            onClick={() => stepHandler()}
                        />
                    )}
                </ActionButton>
            }
        </div>
    )
}

export default FormStep
