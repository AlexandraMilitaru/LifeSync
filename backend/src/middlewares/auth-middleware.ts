import JwtUtils from "../utils/jwt-utils";
import { userService } from "../services";
import {
    Request,
    Response,
    NextFunction
} from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies['access-token'];

    if (!accessToken) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }

    try {
        const email = JwtUtils.verifyAccessToken(accessToken);
        const user = await userService.getByEmailDto(email);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
}