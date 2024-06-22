import {
    Admin,
    PrismaClient
} from '@prisma/client';

class AdminRepository {
    private client: PrismaClient;

    constructor(client: PrismaClient) {
        this.client = client;
    }

    async create(data: Admin) {
        return this.client.admin.create({ data });
    }

    async findById(id: string) {
        return this.client.admin.findUnique({
            where: {
                id
            },
            include: {
                user: true
            }
        });
    }

    async findByEmail(email: string) {
        return this.client.admin.findFirst({
            where: {
                user: {
                    email
                }
            }
        });
    }

    async findAll() {
        return this.client.admin.findMany(
            {
                include: {
                    user: true
                }
            }
        );
    }
}

export default AdminRepository;
