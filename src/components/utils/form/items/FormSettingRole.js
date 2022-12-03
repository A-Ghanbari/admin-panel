import ACL from 'components/ACL'
import {
    Checkbox as AntCheckbox,
    Collapse as AntCollapse,
    Form as AntForm
} from 'antd'
import Checkbox from 'components/utils/checkbox'
import "components/utils/form/items/formItem.scss"

const { Panel } = AntCollapse

function FormSettingRole({ name, items, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            name={name}
        >
            <AntCheckbox.Group>
                <AntCollapse {...props} accordion>
                    {items.map(pages => (
                        <Panel
                            header={
                                <div className='flex-row'>
                                    {pages.value === 1 ?
                                        <Checkbox
                                            label={pages.label}
                                            value={pages.value}
                                            disabled
                                        />
                                        :
                                        <span>
                                            {pages.label}
                                        </span>
                                    }
                                    <span className='internal-pages'>
                                        {pages.children.length} زیر صفحه
                                    </span>
                                </div>
                            }
                            key={pages.value}
                            forceRender
                        >
                            {pages.value === 1 ?
                                pages.children.map(page => (
                                    <div className='last-permission' key={page.value}>
                                        <Checkbox
                                            label={page.label}
                                            value={page.value}
                                        />
                                    </div>
                                ))
                                :
                                <AntCollapse collapsible="icon" accordion>
                                    {pages.children.map(page => (
                                        page.children.length > 0 ?
                                            <Panel
                                                forceRender
                                                header={
                                                    <div className='flex-row'>
                                                        <span>
                                                            <Checkbox
                                                                label={page.label}
                                                                value={page.value}
                                                            />
                                                        </span>
                                                        <span className='internal-pages'>
                                                            {page.children.length} دسترسی
                                                        </span>
                                                    </div>

                                                }
                                                key={page.value}
                                            >
                                                {page.children.map(child => (
                                                    <div className='last-permission' key={child.value}>
                                                        <Checkbox
                                                            label={child.label}
                                                            value={child.value}
                                                        />
                                                    </div>
                                                ))}
                                            </Panel>
                                            :
                                            <div className='last-permission' key={page.value}>
                                                <Checkbox
                                                    label={page.label}
                                                    value={page.value}
                                                />
                                            </div>
                                    ))}

                                </AntCollapse>

                            }
                        </Panel>
                    ))}
                </AntCollapse>
            </AntCheckbox.Group>
        </AntForm.Item>
    )
}

export default ACL(FormSettingRole)
