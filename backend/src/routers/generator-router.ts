import { Router } from "express";
import { generatorController } from "../controllers";

const router: Router = Router();

const {
    generateAll,
    generateAdmins,
    generateCategories
} = generatorController;

router.post('/', generateAll);
router.post('/admins', generateAdmins);
router.post('/categories', generateCategories);

export default router;
