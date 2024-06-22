import TypesUtils from "../../utils/types-utils";
import { Status } from "../../enums/status-enum";
import { StatisticsState } from "./types";
import { StatisticsFunctionality } from "./constants";

const initialState: StatisticsState = {
    timeSpentPerDay: [],
    totalExpensesPerMonth: [],
    numberOfEventsPerCategory: [],
    statuses: TypesUtils.initRecord(Object.values(StatisticsFunctionality), Status.Idle)
}

export default initialState;