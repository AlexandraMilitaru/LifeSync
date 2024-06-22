import UserMapper from "./user-mapper";
import { User } from "@prisma/client";

class HostMapper {
    public static userToHostDto(user: User) {
        return UserMapper.repoToService(user);
    }
}

export default HostMapper;