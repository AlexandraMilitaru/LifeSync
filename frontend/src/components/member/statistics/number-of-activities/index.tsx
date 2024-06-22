import { Title } from "./styles";
import { useState } from "react";
import { useGetNumberOfEventsPerCategory } from "../../../../features/statistics/hooks";
import {
    Pie,
    Sector,
    Legend,
    PieChart,
    ResponsiveContainer
} from "recharts";

const RADIAN = Math.PI / 180;
const labelOffset = 10;
const lineOuterRadiusOffset = 30;
const lineLength = 22;
const circleRadius = 2;

const renderActiveShape = (props: any) => {
    const { cx, cy, midAngle, outerRadius, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + labelOffset) * cos;
    const sy = cy + (outerRadius + labelOffset) * sin;
    const mx = cx + (outerRadius + lineOuterRadiusOffset) * cos;
    const my = cy + (outerRadius + lineOuterRadiusOffset) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * lineLength;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize={12}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={props.innerRadius}
                outerRadius={props.outerRadius}
                startAngle={props.startAngle}
                endAngle={props.endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={props.startAngle}
                endAngle={props.endAngle}
                innerRadius={props.outerRadius + 6}
                outerRadius={props.outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={circleRadius} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={12}>{`Activities: ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fontSize={12} fill="#999">
                {`(Percentage ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

function NumberOfActivitiesPieChart() {
    const title = 'Number of activities';

    const { numberOfEventsPerCategory } = useGetNumberOfEventsPerCategory();

    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_: any, index: number) => {
        setActiveIndex(index);
    };

    const renderColorfulLegendText = () => {
        return <Title>{title}</Title>;
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Legend verticalAlign="top" height={36} content={renderColorfulLegendText} />
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={numberOfEventsPerCategory}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={85}
                    fill="#8884d8"
                    dataKey="events"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

export default NumberOfActivitiesPieChart;