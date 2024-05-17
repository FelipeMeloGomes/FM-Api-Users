import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private userRepository: UserRepository;

    constructor(userRepostitory = new UserRepository(AppDataSource.manager)) {
        this.userRepository = userRepostitory;
    }
    createUser = async (
        name: string,
        email: string,
        password: string
    ): Promise<User> => {
        const user = new User(name, email, password);
        return this.userRepository.createUser(user);
    };

    deleteUser = (name: string, email: string) => {};

    getUser = () => {};
}
