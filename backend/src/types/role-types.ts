import { Role } from "@prisma/client";

export type RoleDto = Role;
export type RoleCreateRepoDto = Omit<Role, "id">;
export type RoleCreateServiceDto = Omit<Role, "id">;