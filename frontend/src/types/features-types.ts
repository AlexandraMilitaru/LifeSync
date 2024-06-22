import { Severity } from "../enums/severity-enum";

export interface Message {
    message: string,
    severity: Severity
}

export interface ResponseError extends Message { }