import TypesUtils from "../../utils/types-utils";
import { Status } from "../../enums/status-enum";
import { CommentsState } from "./types";
import { CommentsFunctionality } from "./constants";

const initialState: CommentsState = {
    comments: [],
    statuses: TypesUtils.initRecord(Object.values(CommentsFunctionality), Status.Idle)
}

export default initialState;