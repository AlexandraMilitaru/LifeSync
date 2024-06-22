import { Role } from "@prisma/client";

class RoleMapper {
    public static repoToService(role: Role) {
        return {
            id: role.id,
            name: role.name,
        };
    }
}

export default RoleMapper;