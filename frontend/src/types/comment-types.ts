import { Member } from "./member-types"

export type Comment = {
    id: string,
    title: string,
    text: string,
    member: Member,
    postedAt: string
}

