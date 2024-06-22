import { TokenExpiredError } from "jsonwebtoken";
import { ErrorResponsePayload } from "../responses/error-response-payload";
import {
    Request,
    Response,
    NextFunction,
} from "express";

export interface CustomError extends Error {
    statusCode?: number;
}

export default (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
    console.log("Error: ", err);

    if (err instanceof TokenExpiredError) {
        return res.status(401).json(new ErrorResponsePayload('Token has expired!'));
    }

    res.status(err.statusCode || 500).json(new ErrorResponsePayload(err.message || 'An unexpected error occurred!'))
}