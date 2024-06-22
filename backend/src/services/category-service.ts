import NotFoundException from "../exceptions/not-found-exception";
import CategoryRepository from "../repositories/category-repository";
import { CategoryCreateServiceDto } from "../types/category-types";

class CategoryService {
    private categoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async getAll() {
        return this.categoryRepository.findAll();
    }

    async getById(id: string) {
        const role = await this.categoryRepository.findById(id);

        if (!role) {
            throw new NotFoundException(`There is no role with id ${id}`);
        }

        return role;
    }

    async create(data: CategoryCreateServiceDto) {
        return this.categoryRepository.create(data);
    }

    async gerOrCreate(data: CategoryCreateServiceDto) {
        const category = await this.categoryRepository.findById(data.name);

        if (category) {
            return category;
        }

        return this.categoryRepository.create(data);
    }

    async existsByName(name: string) {
        const category = await this.categoryRepository.findByName(name);
        return !!category;
    }
}

export default CategoryService;