import { Title } from './styles';
import { useGetTotalExpensesPerMonth } from '../../../../features/statistics/hooks';
import {
    Area,
    Label,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

function ExpensesPerMonthAreaChart() {
    const title = 'Expenses per month';

    const { totalExpensesPerMonth } = useGetTotalExpensesPerMonth();

    const renderColorfulLegendText = () => {
        return <Title>{title}</Title>;
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={500}
                data={totalExpensesPerMonth}
                margin={{
                    top: 20,
                    right: 10,
                    left: 5,
                    bottom: 15,
                }}
            >
                <Legend verticalAlign="top" height={36} content={renderColorfulLegendText} />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month">
                    <Label value="Month" offset={-10} position="insideBottom" />
                </XAxis>
                <YAxis>
                    <Label value="Expenses" angle={-90} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Area type="monotone" dataKey="expenses" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default ExpensesPerMonthAreaChart;