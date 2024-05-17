import { UserService } from "./UserService";

jest.mock("../repositories/UserRepository");
jest.mock("../database", () => {
    initialize: jest.fn();
});

const mockUserRepositoriy = require("../repositories/UserRepository");

describe("User service", () => {
    const userService = new UserService(mockUserRepositoriy);

    it("Add new user", async () => {
        mockUserRepositoriy.createUser = jest.fn().mockImplementation(() =>
            Promise.resolve({
                id_user: "1",
                name: "Felipe",
                email: "Felipe@gmail.com",
                password: "123456",
            })
        );
        const rep = await userService.createUser(
            "Felipe",
            "Felipe@gmail.com",
            "123456"
        );
        expect(mockUserRepositoriy.createUser).toHaveBeenCalled();
        expect(rep).toMatchObject({
            id_user: "1",
            name: "Felipe",
            email: "Felipe@gmail.com",
            password: "123456",
        });
    });
});
