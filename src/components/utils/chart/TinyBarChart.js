import "components/utils/chart/chart.scss"

import { BarChart as ReBarChart } from 'recharts';

function TinyBarChart({ children, ...props }) {
    return (
        <ReBarChart
            {...props}
        >
            {children}
        </ReBarChart>
    );
}

export default TinyBarChart;
