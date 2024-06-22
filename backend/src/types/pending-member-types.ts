import { PendingMember } from "@prisma/client";

export type PendingMemberCreateRepoDto = Omit<PendingMember, "id">;
export type PendingMemberCreateServiceDto = Omit<PendingMember, "id" | "token">;