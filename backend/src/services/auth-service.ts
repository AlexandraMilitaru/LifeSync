import JwtUtils from "../utils/jwt-utils";
import UserService from "./user-service";
import MemberMapper from "../exceptions/mappers/member-mapper";
import MemberService from "./member-service";
import PasswordUtils from "../utils/password-utils";
import PendingMemberService from "./pending-member-service";
import UnauthorizedException from "../exceptions/unauthorized-exception";
import {
    LoginDto,
    RegisterDto,
    ActivateDto
} from "../types/auth-types";

class AuthService {
    private userService: UserService;
    private memberService: MemberService;
    private pendingMemberService: PendingMemberService;

    constructor(
        userService: UserService,
        memberService: MemberService,
        pendingMemberService: PendingMemberService
    ) {
        this.userService = userService;
        this.memberService = memberService;
        this.pendingMemberService = pendingMemberService;
    }

    async register(data: RegisterDto) {
        await this.pendingMemberService.create(data);
    }

    async activate(data: ActivateDto) {
        const { token } = data;

        const pendingMember = await this.pendingMemberService.getByToken(token);

        JwtUtils.verifyActivateToken(token);

        await this.memberService.create(MemberMapper.pendingMemberToCreateServiceDto(pendingMember));

        await this.pendingMemberService.deleteById(pendingMember.id);
    }

    async login(data: LoginDto) {
        const { email, password } = data;

        const user = await this.userService.getByEmailModel(email);

        if (!PasswordUtils.comparePassword(password, user.password)) {
            throw new UnauthorizedException('Invalid password!');
        }

        return JwtUtils.generateAccessToken(email);
    }
}

export default AuthService;