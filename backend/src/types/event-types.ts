import { Event } from "@prisma/client";

export type EventCreateRepoDto = Omit<Event, "id" | "createdAt">;

export type EventCreateServiceDto =
    Omit<Event, "id" | "address" | "createdAt" | "lat" | "lng" | "spent">
    & {
        lat: string,
        lng: string,
        spent: string
    };