import { Severity } from "../../enums/severity-enum"

export interface ToastrData {
    message: string | null,
    severity: Severity | null
}

export interface ToastrState {
    open: boolean,
    message: string | null,
    severity: Severity | null
}