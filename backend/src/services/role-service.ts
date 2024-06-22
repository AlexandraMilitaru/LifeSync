import RoleRepository from "../repositories/role-repository";
import NotFoundException from "../exceptions/not-found-exception";
import { RoleCreateServiceDto } from "../types/role-types";

class RoleService {
    private roleRepository: RoleRepository;

    constructor(roleRepository: RoleRepository) {
        this.roleRepository = roleRepository;
    }

    async getById(id: string) {
        const role = await this.roleRepository.findById(id);

        if (!role) {
            throw new NotFoundException(`There is no role with id ${id}`);
        }

        return role;
    }

    async gerOrCreate(data: RoleCreateServiceDto) {
        const role = await this.roleRepository.findByName(data.name);

        if (role) {
            return role;
        }

        return this.roleRepository.create(data);
    }

    async existsByName(name: string) {
        const role = await this.roleRepository.findByName(name);
        return !!role;
    }
}

export default RoleService;