import { ColumnGrid } from "components/utils/grid"

const fieldCol = { xs: 12, sm: 8, md: 6, lg: 6, xl: 4, xxl: 4 }

export default function BarcodeList({ count, list }) {
    return (
        <div className='waiting-code-wrapper'>
            {(list.length) ?
                <>
                    <div className="barcode-count">تعداد بارکد اسکن شده: <span className="bold">{count}</span> عدد</div>
                    <ColumnGrid col={fieldCol}>
                        {list.map((item) =>
                            <div className='waiting-code-list' key={item}>{item}</div>
                        )}
                    </ColumnGrid>
                </>
                :
                <div>در انتظار اسکن بارکد ...</div>
            }
        </div>
    )
}