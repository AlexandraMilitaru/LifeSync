import { PrismaClient } from '@prisma/client';
import { CommentCreateRepoDto } from '../types/comment-types';

class CommentRepository {
    private client: PrismaClient;

    constructor(client: PrismaClient) {
        this.client = client;
    }

    async create(data: CommentCreateRepoDto) {
        return this.client.comment.create({
            data,
            include: {
                member: {
                    include: {
                        user: true
                    }
                }
            }
        });
    }

    async findAll() {
        return this.client.comment.findMany();
    }

    async findById(id: string) {
        return this.client.comment.findUnique({ where: { id } });
    }
}

export default CommentRepository;
