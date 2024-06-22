import UserMapper from "./user-mapper";
import { User } from "@prisma/client";

class AttendeeMapper {
    public static userToAttendeeDto(user: User) {
        return UserMapper.repoToService(user);
    }
}

export default AttendeeMapper;