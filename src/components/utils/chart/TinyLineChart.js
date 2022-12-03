import "components/utils/chart/chart.scss"

import { LineChart as ReLineChart } from 'recharts';

export default function TinyLineChart({ children, ...props }) {
    return (

        <ReLineChart
            {...props}
        >
            {children}
        </ReLineChart>
    );
}