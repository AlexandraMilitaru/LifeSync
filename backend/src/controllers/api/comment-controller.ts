import asyncHandler from "express-async-handler"
import CommentService from "../../services/comment-service";
import { MessageResponsePayload } from "../../responses/message-response-payload";

class CommentController {
    private commentService: CommentService;

    constructor(commentService: CommentService) {
        this.commentService = commentService;
    }

    create = asyncHandler(async (req, res) => {
        await this.commentService.create({ ...req.body, memberId: req.user.id });
        res.json(MessageResponsePayload.success('Comment was added successfully!'));
    })
}

export default CommentController;