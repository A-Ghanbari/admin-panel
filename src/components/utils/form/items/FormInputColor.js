import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import { useState } from 'react'
import Checkbox from 'components/utils/checkbox'
import { Input } from 'components/utils/field/input'
import "components/utils/form/items/formItem.scss"

export function FormInputColor({ name, label, isColorLess, ...props }) {
    const [checked, setChecked] = useState(false)

    const onChange = () => {
        setChecked(!checked)
    }

    return (
        <>
            {isColorLess ?
                <div className='color-input-color-less'>
                    <Checkbox
                        label="بی رنگ"
                        checked={checked}
                        onChange={onChange}
                    />

                    {!checked ?
                        <AntForm.Item
                            name={name}
                            label={label}
                        >
                            <input type="color" className='color-input-color-less' {...props} />
                        </AntForm.Item>
                        :
                        <AntForm.Item />
                    }
                </div>
                :
                <div className='color-input'>
                    <AntForm.Item
                        name={name}
                        label={label}
                    >
                        <Input type="color"  {...props} />
                    </AntForm.Item>
                </div>
            }
        </>
    )
}

export default ACL(FormInputColor)