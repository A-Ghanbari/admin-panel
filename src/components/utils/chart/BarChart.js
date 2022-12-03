import { addCommaToNumber } from "tools/utils";
import "components/utils/chart/chart.scss"
import useWindowSize from "hooks/useWindowSize"

import { BarChart as ReBarChart, Tooltip, Legend, XAxis, ResponsiveContainer } from 'recharts';

function BarChart({ children, XAxisKey, tick, ...props }) {
    const { width } = useWindowSize()
    return (
        <ResponsiveContainer
            width="100%"
            minHeight={200}
            minWidth={width > 767 ? 500 : 1200}
            aspect={width > 767 && width < 900 ? 2 : 3}
        >
            <ReBarChart
                {...props}
            >
                <XAxis dataKey={XAxisKey} tick={tick} />
                <Tooltip fill="#e3e4e5" formatter={(value) => addCommaToNumber(value)} />
                <Legend
                    align='left'
                    height={36}
                    margin={{ top: 20 }}
                    iconType='line'
                />
                {children}
            </ReBarChart>
        </ResponsiveContainer>
    );
}

export default BarChart;
