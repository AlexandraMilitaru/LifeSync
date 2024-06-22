import CommentMapper from "../exceptions/mappers/comment-mapper";
import NotFoundException from "../exceptions/not-found-exception";
import CommentRepository from "../repositories/comment-repository";
import { Comment } from "@prisma/client";
import { CommentCreateServiceDto } from "../types/comment-types";

class CommentService {
    private commentRepository: CommentRepository;

    constructor(commentRepository: CommentRepository) {
        this.commentRepository = commentRepository;
    }

    async create(data: CommentCreateServiceDto) {
        const createdComment = await this.commentRepository.create(data);
        return CommentMapper.repoToService(createdComment);
    }

    async getById(id: string): Promise<Comment> {
        const comment = await this.commentRepository.findById(id);

        if (!comment) {
            throw new NotFoundException(`There is no comment with id ${id}`);
        }

        return comment;
    }
}

export default CommentService;