import Icon from 'components/utils/field/Icon'
import FormList from 'components/utils/form/FormList'
import { FormInput } from 'components/utils/form/items/FormInput'
import { ColumnGrid } from 'components/utils/grid'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function BarcodeForm() {
    return (
        <FormList name="barcodes" permission="policyProductBarcode">
            {(fields, { add, remove }) => (
                <>
                    <ActionButton >
                        <Button
                            onClick={() => add()}
                            icon={<Icon type='plus' />}
                        />
                    </ActionButton>
                    <ColumnGrid col={fieldCol}>
                        {fields.map(({ key, name, ...restField }) => (
                            <FormInput
                                className="product-barcode-list"
                                key={key}
                                name={name}
                                allowClear={false}
                                prefix={<Icon type='minus' onClick={() => remove(name)} />}
                            />
                        ))}
                    </ColumnGrid>
                </>
            )}
        </FormList>
    )
}