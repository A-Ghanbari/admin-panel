import ACL from 'components/ACL'
import { useSelector } from 'react-redux'
import { addCommaToNumber } from 'tools/utils'
import { PACKING_RANKING as entity } from "tools/utils/entities"

function Report() {
    let orderCount = 0
    let productCount = 0
    const { dataList } = useSelector(
        (s) => s[entity.pluralizeName]
    )

    for (const item of dataList) {
        orderCount += item.totalOrdersCount
        productCount += item.totalOrdersItemsCount
    }

    return (
        <div className='ranking-report'>
            <div className='order'><span>{addCommaToNumber(orderCount)}</span></div>
            <div className='product'><span>{addCommaToNumber(productCount)}</span></div>
        </div>
    )
}

export default ACL(Report)