
import RoleMapper from "./role-mapper";
import UserMapper from "./user-mapper";
import {
    User,
    Role,
    PendingMember
} from "@prisma/client";

class MemberMapper {
    public static repoToService(member: { user: User }) {
        return UserMapper.repoToService(member.user);
    }

    public static repoDetailsToServiceDetails(member: { user: User & { role: Role } }) {
        return {
            ...UserMapper.repoToService(member.user),
            role: RoleMapper.repoToService(member.user.role)
        };
    }

    public static pendingMemberToCreateServiceDto(pendingMember: PendingMember) {
        return {
            email: pendingMember.email,
            firstName: pendingMember.firstName,
            lastName: pendingMember.lastName,
            password: pendingMember.password
        };
    }
}

export default MemberMapper;