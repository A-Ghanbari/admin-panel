import FormList from 'components/utils/form/FormList'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 }
export default function WarehoiuseForm() {
    return (
        <FormList name="ServiceGarrantyOption" permission="policyProductWarehouseService">
            {() => (
                <ColumnGrid col={fieldCol}>
                    <FormInputNumber
                        label="درصد شارژ انبار خدمات"
                        name="serviceGarrantyPercent"
                    />
                    <FormInputNumber
                        label="حداقل موجودی انبار خدمات"
                        name="minimumProductCount"
                    />
                    <FormInputNumber
                        label="حداقل موجودی لحظه ای انبار خدمات"
                        name="minimumServiceGarrantyCurrentCount"
                    />
                    <FormInputNumber
                        label="حداقل میزان شارژ انبار خدمات"
                        name="minimumServiceGarrantyChargeCount"
                    />
                    <FormInputNumber
                        label="حداکثر میزان شارژ انبار خدمات"
                        name="maximumServiceGarrantyChargeCount"
                    />
                </ColumnGrid>
            )}
        </FormList>)
}
