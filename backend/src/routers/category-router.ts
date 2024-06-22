import { Router } from "express";
import { categoryController } from "../controllers";

const router: Router = Router();

const {
    getAll
} = categoryController;

router.get('/', getAll);

export default router;