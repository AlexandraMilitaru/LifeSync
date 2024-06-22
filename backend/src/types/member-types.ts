import {
    User,
    Member
} from "@prisma/client";

export type MemberCreateRepoDto = Member;
export type MemberCreateServiceDto = Omit<User, "id" | "imageUri" | "roleId">;