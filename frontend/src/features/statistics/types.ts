import { Status } from "../../enums/status-enum"
import { StatisticsFunctionality } from "./constants"

export interface StatisticsState {
    timeSpentPerDay: { day: string, hours: number }[],
    totalExpensesPerMonth: { month: string, expenses: number }[]
    numberOfEventsPerCategory: { name: string, events: number }[]
    statuses: Record<StatisticsFunctionality, Status>
}

export interface GetTimeSpentPerDayResponsePayload {
    timeSpentPerDay: { day: string, hours: number }[]
}
export interface GetTotalExpensesPerMonthResponsePayload {
    totalExpensesPerMonth: { month: string, expenses: number }[]
}
export interface GetNumberOfEventsPerCategoryResponsePayload {
    numberOfEventsPerCategory: { name: string, events: number }[]
}