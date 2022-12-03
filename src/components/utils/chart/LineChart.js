import { addCommaToNumber } from "tools/utils";
import "components/utils/chart/chart.scss"

import { LineChart as ReLineChart, Tooltip, Legend, XAxis, ResponsiveContainer } from 'recharts';

function LineChart({ children, XAxisKey, ...props }) {
    return (
        <ResponsiveContainer
            width="100%"
            minHeight={250}
            minWidth={750}
            aspect={3}
        >
            <ReLineChart
                {...props}
            >
                <XAxis dataKey={XAxisKey} />
                <Tooltip fill="#e3e4e5" formatter={(value) => addCommaToNumber(value)} />
                <Legend
                    align='left'
                    height={36}
                    margin={{ top: 20 }}
                    iconType='line'
                />
                {children}
            </ReLineChart>
        </ResponsiveContainer>
    );
}

export default LineChart;
