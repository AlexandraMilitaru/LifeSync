import TypesUtils from "../../utils/types-utils";
import LocalStorageUtils from "../../utils/local-storage-utils";
import { User } from "../../types/user-types";
import { Status } from "../../enums/status-enum";
import { AuthState } from "./types";
import { AuthFunctionality } from "./constants";

const user = LocalStorageUtils.getItem('user') as User | null;

const initialState: AuthState = {
    user: user,
    statuses: TypesUtils.initRecord(Object.values(AuthFunctionality), Status.Idle)
}

export default initialState;