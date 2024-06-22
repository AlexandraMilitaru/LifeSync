import { User } from "@prisma/client";

class UserMapper {
    public static repoToService(user: User) {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            imageUri: user.imageUri
        };
    }
}

export default UserMapper;