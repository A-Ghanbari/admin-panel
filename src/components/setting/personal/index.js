import { useState } from "react"
import { useSelector } from "react-redux"
import { USER as entity } from "tools/utils/entities"
import ActionButton from 'components/utils/actionsButton'
import Collapse from 'components/utils/collapse'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormInputPassword from 'components/utils/form/items/FormInputPassword'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function Personal() {
    const [visible, setVisible] = useState(false)

    const { data } = useSelector(
        (s) => s[entity.name]
    )

    return (
        <div>
            <Collapse
                title="تغییر کلمه عبور"
            >
                <Form>
                    <ColumnGrid col={fieldCol}>
                        <FormInputPassword
                            label="کلمه عبور فعلی"
                            required={true}
                        />
                        <FormInputPassword
                            label="کلمه عبور جدید"
                            required={true}
                        />
                        <FormInputPassword
                            label="تکرار کلمه عبور جدید"
                            required={true}
                        />
                    </ColumnGrid>
                    <ActionButton position="center">
                        <Button name="submit" label="تغییر کلمه عبور" htmlType="submit" />
                    </ActionButton>
                </Form>
            </Collapse>
            <Collapse
                title="تنظیمات شخصی"
            >
                {!visible ?
                    <>
                        <div className="center" style={{ marginBottom: 16 }}>
                            <img src={data.photo} width={200} />
                        </div>
                        <ActionButton position="center">
                            <Button
                                label="حذف تصویر"
                                onClick={() => setVisible(true)}
                            />
                        </ActionButton>
                    </>
                    :
                    <ActionButton position="center">
                        <Button
                            label="بارگذاری تصویر"
                            onClick={() => setVisible(false)}
                        />
                    </ActionButton>
                }
            </Collapse>
        </div>
    )
}
