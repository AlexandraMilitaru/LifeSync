import { useGetTimeSpentPerDay } from '../../../../features/statistics/hooks';
import { Title } from './styles';
import {
    Bar,
    Label,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    BarChart,
    Rectangle,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

function TimeSpentPerDayBarChart() {
    const title = 'Time spent per day';

    const { timeSpentPerDay } = useGetTimeSpentPerDay();

    const renderColorfulLegendText = () => {
        return <Title>{title}</Title>;
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={timeSpentPerDay}
                margin={{
                    top: 20,
                    right: 10,
                    left: 5,
                    bottom: 15,
                }}
            >
                <Legend verticalAlign="top" height={36} content={renderColorfulLegendText} />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day">
                    <Label value="Day" offset={-10} position="insideBottom" />
                </XAxis>
                <YAxis>
                    <Label value="Hours" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="hours" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default TimeSpentPerDayBarChart;