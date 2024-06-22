import authMiddleware from "../middlewares/auth-middleware";
import { Router } from "express";
import { authController } from "../controllers";

const router: Router = Router();

const {
    register,
    activate,
    login,
    user,
    logout
} = authController;

router.post("/register", register);
router.post("/activate", activate);
router.post("/login", login);
router.get("/user", authMiddleware, user);
router.post("/logout", authMiddleware, logout);

export default router;
