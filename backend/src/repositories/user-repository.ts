import {
    User,
    PrismaClient
} from '@prisma/client';

class UserRepository {
    private client: PrismaClient;

    constructor(client: PrismaClient) {
        this.client = client;
    }

    async create(data: User) {
        return this.client.user.create({ data });
    }

    async findAll() {
        return this.client.user.findMany();
    }

    async findByEmail(email: string) {
        return this.client.user.findUnique({
            where: {
                email
            },
        });
    }
}

export default UserRepository;
