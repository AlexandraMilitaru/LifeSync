import TypesUtils from "../../utils/types-utils";
import { Status } from "../../enums/status-enum";
import { EventsState } from "./types";
import { EventsFunctionality } from "./constants";

const initialState: EventsState = {
    event: null,
    events: [],
    statuses: TypesUtils.initRecord(Object.values(EventsFunctionality), Status.Idle)
}

export default initialState;