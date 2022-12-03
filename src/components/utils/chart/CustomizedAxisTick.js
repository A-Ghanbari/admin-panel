const { resolveDate } = require("tools/utils");

function CustomizedAxisTick({ x, y, payload }) {
    const date = `${resolveDate(payload.value).month}/${resolveDate(payload.value).day}`
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={-16}
                y={0}
                dy={16}
                textAnchor="start"
                fill="#666"
                transform="rotate(-35)"
            >
                {date}
            </text>
        </g>
    );
}

export default CustomizedAxisTick