import { hash } from "bcrypt";
import { UserService } from "../services/user.service.js";

class UserController extends UserService {
    constructor() {
        super();
    }

    async createUser(req, res) {
        try {
            const { username, email, password, userType } = req.body;
            const hashedPassword = await hash(password, 10);
            res.status(201).json({
                message: "User created successfully",
                result: [
                    await super.createUserService(
                        username,
                        email,
                        hashedPassword,
                        userType
                    ),
                ],
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: error.message,
                error: true,
            });
        }
    }

    async getAllUser(req, res) {
        try {
            res.status(200).json({
                result: await super.getAllUserService(),
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: error.message,
                error: true,
            });
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { username, password } = req.body;
            const hashedPassword = await hash(password, 10);
            const oldUser = await super.oldUserService(id);
            await super.updateUserService(
                id,
                username,
                hashedPassword,
                oldUser
            );
            res.status(200).json({
                message: "User updated successfully",
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: error.message,
                error: true,
            });
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            res.status(200).json({
                message: "User deleted successfully",
                result: await super.deleteUserService(id),
                error: false,
            });
        } catch (error) {
            res.status(401).json({
                message: error.message,
                error: true,
            });
        }
    }
}

export { UserController };
