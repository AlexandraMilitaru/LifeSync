import { UserDto } from "../../src/types/user-types";

declare module 'express-serve-static-core' {
    interface Request {
        user: UserDto;
    }
}