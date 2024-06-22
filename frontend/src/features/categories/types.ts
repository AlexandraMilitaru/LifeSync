import { Status } from "../../enums/status-enum"
import { Message } from "../../types/features-types"
import { Category } from "../../types/category-types"
import { CategoriesFunctionality } from "./constants"

export interface CategoriesState {
    categories: Category[],
    statuses: Record<CategoriesFunctionality, Status>
}

export interface GetCategoriesResponsePayload extends Message {
    categories: Category[]
}