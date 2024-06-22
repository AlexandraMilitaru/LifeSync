import TypeUtils from "../../utils/types-utils";
import { Status } from "../../enums/status-enum";
import { CategoriesState } from "./types";
import { CategoriesFunctionality } from "./constants";

const initialState: CategoriesState = {
    categories: [],
    statuses: TypeUtils.initRecord(Object.values(CategoriesFunctionality), Status.Idle)
}

export default initialState;