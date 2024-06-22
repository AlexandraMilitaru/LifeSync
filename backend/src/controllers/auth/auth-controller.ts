import AuthService from "../../services/auth-service";
import asyncHandler from "express-async-handler"
import AuthValidator from "../../validators/auth-validator"
import { MessageResponsePayload } from "../../responses/message-response-payload";

class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    register = asyncHandler(async (req, res) => {
        const requestPayload = AuthValidator.validateRegister(req.body);
        await this.authService.register(requestPayload);
        res.json(MessageResponsePayload.info('Registration success, check the email for registration link!'));
    })

    activate = asyncHandler(async (req, res) => {
        const requestPayload = AuthValidator.validateActivate(req.body);
        await this.authService.activate(requestPayload);
        res.json(MessageResponsePayload.success('The account has been activated, now you can log in!'));
    })

    login = asyncHandler(async (req, res) => {
        const requestPayload = AuthValidator.validateLogin(req.body);
        const token = await this.authService.login(requestPayload);
        res.cookie(
            'access-token',
            token,
            {
                httpOnly: true,
                secure: false,
                maxAge: 3600000 * 24,
                sameSite: 'strict',
            }
        );
        res.json(MessageResponsePayload.success('You have logged in successfully!'));
    })

    user = asyncHandler(async (req, res) => {
        const user = req.user;
        res.json(user);
    });

    logout = asyncHandler(async (_req, res) => {
        res.clearCookie('access-token');
        res.json(MessageResponsePayload.success('You have logged out successfully!'));
    });
}

export default AuthController;