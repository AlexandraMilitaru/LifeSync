import authMiddleware from "../middlewares/auth-middleware";
import { Router } from "express";
import { eventController } from "../controllers";
import { uploadMiddleware } from "../middlewares/upload-middleware";

const router: Router = Router();

const {
    create,
    getById,
    getAllByDate
} = eventController;

const fields = [
    { name: 'image', maxCount: 1 },
    { name: 'gallery', maxCount: 10 }
];

router.post('/', [authMiddleware, uploadMiddleware.fields(fields)], create);
router.get('/:id', getById);
router.get('/date/:date', getAllByDate);

export default router;
