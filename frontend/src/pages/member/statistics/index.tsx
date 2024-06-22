import TimeSpentPerDayBarChart from "../../../components/member/statistics/time-spent-per-day";
import ExpensesPerMonthAreaChart from "../../../components/member/statistics/expenses-per-month";
import NumberOfActivitiesPieChart from "../../../components/member/statistics/number-of-activities";
import {
    ChartWrapper,
    MainContainer
} from "./styles";

function Statistics() {
    return (
        <MainContainer>
            <ChartWrapper>
                <ExpensesPerMonthAreaChart />
            </ChartWrapper>
            <ChartWrapper>
                <NumberOfActivitiesPieChart />
            </ChartWrapper>
            <ChartWrapper>
                <TimeSpentPerDayBarChart />
            </ChartWrapper>
        </MainContainer>
    );
}

export default Statistics;