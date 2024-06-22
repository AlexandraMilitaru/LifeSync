import asyncHandler from "express-async-handler"
import CategoryService from "../../services/category-service";

class CategoryController {
    private categoryService: CategoryService;

    constructor(categoryService: CategoryService) {
        this.categoryService = categoryService;
    }

    getAll = asyncHandler(async (_req, res) => {
        const categories = await this.categoryService.getAll();
        res.json({ categories });
    })
}

export default CategoryController;