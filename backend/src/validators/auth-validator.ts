import BadRequestException from "../exceptions/bad-request-exception";
import {
    LoginRequestPayload,
    RegisterRequestPayload,
    ActivateRequestPayload
} from "../requests/auth-request-payload";

class AuthValidator {
    public static validateRegister(data: Record<string, any>): RegisterRequestPayload {
        const fields: string[] = ["firstName", "lastName", "email", "password"];

        for (const field of fields) {
            if (!(field in data)) {
                throw new BadRequestException(`The field '${field}' is missing from request body!`);
            }
        }

        return {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            tags: data.tags
        }
    }

    public static validateActivate(data: Record<string, string>): ActivateRequestPayload {
        const fields: string[] = ["token"];

        for (const field of fields) {
            if (!(field in data)) {
                throw new BadRequestException(`The field '${field}' is missing from request body!`);
            }
        }

        return {
            token: data.token
        }
    }

    public static validateLogin(data: Record<string, string>): LoginRequestPayload {
        const fields: string[] = ["email", "password"];

        for (const field of fields) {
            if (!(field in data)) {
                throw new BadRequestException(`The field '${field}' is missing from request body!`);
            }
        }

        return {
            email: data.email,
            password: data.password
        }
    }
}

export default AuthValidator;