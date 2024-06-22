import RoleService from "./role-service";
import PasswordUtils from "../utils/password-utils";
import UserRepository from "../repositories/user-repository";
import ConflictException from "../exceptions/conflict-exception";
import { UserConstants } from "../constants/user-constants";

class UserService {
    private roleService: RoleService;
    private userRepository: UserRepository;

    constructor(
        roleService: RoleService,
        userRepository: UserRepository
    ) {
        this.roleService = roleService;
        this.userRepository = userRepository;
    }

    async create(data: any, encryptPassword: boolean = true) {
        const user = await this.userRepository.findByEmail(data.email);

        if (user) {
            throw new ConflictException(UserConstants.ALREADY_EXISTS_BY_EMAIL);
        }

        if (encryptPassword) {
            data.password = await PasswordUtils.hashPassword(data.password);
        }

        const { role, ...rest } = data;

        const createdRole = await this.roleService.gerOrCreate({ name: role });

        const createdUser = await this.userRepository.create({
            ...rest,
            roleId: createdRole.id,
        });

        return {
            ...createdUser,
            role: createdRole
        };
    }

    async getByEmailDto(email: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new ConflictException(UserConstants.NOT_FOUND_BY_EMAIL);
        }

        const { roleId, password, ...rest } = user;

        const role = await this.roleService.getById(user.roleId);

        return {
            ...rest,
            role
        };
    }

    async getByEmailModel(email: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new ConflictException(UserConstants.NOT_FOUND_BY_EMAIL);
        }

        return user;
    }

    async existsByEmail(email: string) {
        const user = await this.userRepository.findByEmail(email);
        return !!user;
    }
}

export default UserService;
