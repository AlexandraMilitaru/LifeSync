import { Event } from "../../types/event-types"
import { Status } from "../../enums/status-enum"
import { Message } from "../../types/features-types"
import { EventsFunctionality } from "./constants"

export interface EventsState {
    event: Event | null,
    events: Event[],
    statuses: Record<EventsFunctionality, Status>
}

export interface CreateRequestPayload extends FormData { }

export interface GetAllByDateRequestPayload {
    date: Date
}

export interface GetByIdRequestPayload {
    id: string
}

export interface CreateResponsePayload extends Message {
}

export interface GetAllByDateResponsePayload {
    events: Event[]
}

export interface GetByIdResponsePayload extends Event {
}