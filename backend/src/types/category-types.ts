import { Category } from "@prisma/client";

export type CategoryDto = Category;
export type CategoryCreateRepoDto = Omit<Category, "id">;
export type CategoryCreateServiceDto = Omit<Category, "id">;