import { PrismaClient } from '@prisma/client';
import { CategoryCreateRepoDto } from '../types/category-types';

class CategoryRepository {
    private client: PrismaClient;

    constructor(client: PrismaClient) {
        this.client = client;
    }

    async create(data: CategoryCreateRepoDto) {
        return this.client.category.create({ data });
    }

    async findAll() {
        return this.client.category.findMany();
    }

    async findById(id: string) {
        return this.client.category.findUnique({ where: { id } });
    }

    async findByName(name: string) {
        return this.client.category.findUnique({ where: { name } });
    }
}

export default CategoryRepository;
