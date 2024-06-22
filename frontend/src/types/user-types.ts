import { Role } from "./role-types"

export type User = {
    id: string,
    lastName: string,
    firstName: string,
    email: string,
    password: string,
    avatarUri: string | null
}

export type UserDetails = User & {
    role: Role
}