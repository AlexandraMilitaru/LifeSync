import { User } from "@prisma/client";

export type AdminCreateServiceDto = Omit<User, "id" | "imageUri" | "roleId">;