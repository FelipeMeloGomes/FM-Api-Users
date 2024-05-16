import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
    userService: UserService;

    constructor(userService = new UserService()) {
        this.userService = userService;
    }

    verifyRequiredField = (
        objeto: any,
        field: string,
        message: string,
        res: Response
    ) => {
        if (!objeto[field]) {
            return res
                .status(400)
                .json({ message: `Bad request! ${message} obrigatório` });
        }
    };

    createUser = (req: Request, res: Response) => {
        const user = req.body;

        this.verifyRequiredField(user, "name", "Name", res);
        this.verifyRequiredField(user, "email", "Email", res);

        this.userService.createUser(user.name, user.email);

        return res.status(201).json({ message: "Created User" });
    };

    deleteUser = (req: Request, res: Response) => {
        const { name, email } = req.body;

        this.verifyRequiredField({ name, email }, "name", "Name", res);
        this.verifyRequiredField({ name, email }, "email", "Email", res);

        this.userService.deleteUser(name, email);

        return res.status(200).json({ message: "User deleted successfully" });
    };

    getAllUsers = (req: Request, res: Response) => {
        const users = this.userService.getAllUsers();
        return res.status(200).json(users);
    };
}
