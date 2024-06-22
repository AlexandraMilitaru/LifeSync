import { User } from "@prisma/client";
import { RoleDto } from "./role-types";

export type UserDto = Omit<User, "roleId" | "password">;
export type UserDetailsDto = UserDto & { role: RoleDto };
export type UserCreateRepoDto = Omit<User, "id" | "imageUri">;
export type UserCreateServiceDto = Omit<User, "id" | "imageUri" | "roleId"> & { role: string };