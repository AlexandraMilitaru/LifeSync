import { PrismaClient } from '@prisma/client';
import { MemberCreateRepoDto } from '../types/member-types';

class MemberRepository {
    private client: PrismaClient;

    constructor(client: PrismaClient) {
        this.client = client;
    }

    async create(data: MemberCreateRepoDto) {
        return this.client.member.create({ data });
    }

    async findById(id: string) {
        return this.client.member.findUnique({
            where: {
                id
            },
            include: {
                user: true
            }
        });
    }

    async findAll() {
        return this.client.member.findMany(
            {
                include: {
                    user: {
                        include: {
                            role: true
                        }
                    }
                }
            }
        );
    }
}

export default MemberRepository;
