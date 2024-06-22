import FileUtils from "../utils/file-utils";
import PathUtils from "../utils/path-utils";
import AdminService from "./admin-service";
import CategoryService from "./category-service";
import { AdminCreateServiceDto } from "../types/admin-types";
import { CategoryCreateServiceDto } from "../types/category-types";

class GeneratorService {
    private adminService: AdminService;
    private categoryService: CategoryService;

    constructor(
        adminService: AdminService,
        categoryService: CategoryService
    ) {
        this.adminService = adminService;
        this.categoryService = categoryService;
    }

    async generateAll(): Promise<void> {
        await this.generateAdmins();
    }

    async generateAdmins(): Promise<number> {
        const adminsFilePath = PathUtils.getFilePath("admins.json");

        const admins = await FileUtils.readJsonFile<AdminCreateServiceDto>(adminsFilePath);

        let count = 0;

        for (const admin of admins) {
            const existsAdmin = await this.adminService.existsByEmail(admin.email);

            if (!existsAdmin) {
                await this.adminService.create(admin);
                count++;
            }
        }

        return count;
    }

    async generateCategories(): Promise<number> {
        const categoriesFilePath = PathUtils.getFilePath("categories.json");

        const categories = await FileUtils.readJsonFile<CategoryCreateServiceDto>(categoriesFilePath);

        let count = 0;

        for (const category of categories) {
            const existsCategory = await this.categoryService.existsByName(category.name);

            if (!existsCategory) {
                await this.categoryService.create(category);
                count++;
            }
        }

        return count;
    }
}

export default GeneratorService;