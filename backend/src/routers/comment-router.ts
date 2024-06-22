import authMiddleware from "../middlewares/auth-middleware";
import { Router } from "express";
import { commentsController } from "../controllers";

const router: Router = Router();

const {
    create
} = commentsController;

router.post('/', authMiddleware, create);

export default router;