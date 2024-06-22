import UserService from "./user-service";
import AdminRepository from "../repositories/admin-repository";
import { Role } from "../enums/role-enum";
import { AdminCreateServiceDto } from "../types/admin-types";

class AdminService {
    private userService: UserService;
    private adminRepository: AdminRepository;

    constructor(
        userService: UserService,
        adminRepository: AdminRepository
    ) {
        this.userService = userService;
        this.adminRepository = adminRepository;
    }

    async create(data: AdminCreateServiceDto) {
        const createdUser = await this.userService.create({ ...data, role: Role.Admin }, false);
        await this.adminRepository.create({ id: createdUser.id });
    }

    async getById(id: string) {
        return this.adminRepository.findById(id);
    }

    async existsByEmail(email: string) {
        const admin = await this.adminRepository.findByEmail(email);
        return !!admin;
    }
}

export default AdminService;
