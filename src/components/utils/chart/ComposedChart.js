import { addCommaToNumber } from "tools/utils";
import "components/utils/chart/chart.scss"

import { ComposedChart as ReComposedChart, Tooltip, Legend, XAxis, ResponsiveContainer } from 'recharts';

function ComposedChart({ children, XAxisKey, tick, ...props }) {
    return (
        <ResponsiveContainer
            width="100%"
            minHeight={200}
            minWidth={600}
            aspect={3}
        >
            <ReComposedChart
                {...props}
            >
                <XAxis dataKey={XAxisKey} tick={tick} height={50} />
                <Tooltip formatter={(value) => addCommaToNumber(value)} />
                <Legend
                    align='left'
                    height={20}
                    iconType='line'
                />
                {children}
            </ReComposedChart>
        </ResponsiveContainer>
    );
}

export default ComposedChart;
