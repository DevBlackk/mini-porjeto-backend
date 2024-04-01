import User from "../entity/User.entity.js";

class UserService {
    async createUserService(username, email, hashedPassword, userType) {
        await User.sync();
        return await User.create({
            username,
            email,
            password: hashedPassword,
            userType,
        });
    }

    async getAllUserService() {
        await User.sync();
        return await User.findAll({
            attributes: {
                exclude: ["password"]
            }
        });
    }

    async oldUserService(id) {
        await User.sync();
        return await User.findByPk(id);
    }

    async updateUserService(id, username, hashedPassword, oldUser) {
        await User.sync();
        return await User.update(
            {
                username: username || oldUser.username,
                password: hashedPassword || oldUser.password,
            },
            {
                where: {
                    id: id,
                },
            }
        );
    }

    async deleteUserService(id) {
        await User.sync();
        return await User.destroy({
            where: {
                id,
            },
        });
    }
}

export { UserService };