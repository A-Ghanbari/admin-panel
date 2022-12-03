
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import { Input } from 'components/utils/field/input'
import Select from 'components/utils/field/select'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 12, xl: 8, xxl: 6 }
export default function LabelController() {

    return (
        <div className='label-counter'>
            <ColumnGrid col={fieldCol}>
                <div className='section-1'>
                    <div>
                        <span>جعبه فعال:</span>
                        5
                    </div>
                    <div>
                        <span>کل جعبه ها:</span>
                        5 عدد
                    </div>
                    <div>
                        <span>
                            کالای درون جعبه:
                        </span>
                        2 عدد
                    </div>
                </div>
                <div className='section-2'>
                    <ActionButton position="center">
                        <Button
                            type="primary-dark"
                            name='addBox'
                            label='افزودن جعبه'
                        />
                        <Button
                            type="secondary-dark"
                            name='emptyBox'
                            label='تخلیه جعبه'
                        />
                    </ActionButton>
                    <Select
                        name="boxSelect"
                        label="جعبه"
                        defaultValue={1}
                        items={[
                            {
                                text: "جعبه اول",
                                value: 1,
                            }, {
                                text: "جعبه دوم",
                                value: 2,
                            }, {
                                text: "جعبه سوم",
                                value: 3,
                            }
                        ]}
                    />
                    <Input
                        autoFocus
                        name="boxWeight"
                        placeholder="وزن جعبه"
                    />
                </div>
            </ColumnGrid>
        </div>
    )
}