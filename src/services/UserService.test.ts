import { User, UserService } from "./UserService";

describe("User service", () => {
    const mockDb: User[] = [];
    const userService = new UserService(mockDb);

    it("Add new user", () => {
        const mockConsole = jest.spyOn(global.console, "log");
        userService.createUser("Felipe", "Felipe@gmail.com");
        expect(mockConsole).toHaveBeenCalledWith("DB Atualizado", mockDb);
    });
});
