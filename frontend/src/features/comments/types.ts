import { Status } from "../../enums/status-enum"
import { Comment } from "../../types/comment-types"
import { Message } from "../../types/features-types"
import { CommentsFunctionality } from "./constants"

export interface CommentsState {
    comments: Comment[],
    statuses: Record<CommentsFunctionality, Status>
}

export interface AddCommentRequestPayload {
    title: string,
    text: string,
    eventId: string
}

export interface AddCommentResponsePayload extends Message {
    comment: Comment
}