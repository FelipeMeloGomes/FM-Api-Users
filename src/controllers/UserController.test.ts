import { makeMockRep } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";

describe("UserController", () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        deleteUser: jest.fn(),
        getAllUsers: jest.fn(),
    };

    const userController = new UserController(mockUserService as UserService);

    it("Delete User", () => {
        const mockReq = {
            body: {
                name: "Felipe",
                email: "lucas@gmail",
            },
        } as Request;
        const mockRep = makeMockRep();
        userController.deleteUser(mockReq, mockRep);
        expect(mockUserService.deleteUser).toHaveBeenCalledWith(
            "Felipe",
            "lucas@gmail"
        );
        expect(mockRep.state.status).toBe(200);
        expect(mockRep.state.json).toMatchObject({
            message: "User deleted successfully",
        });
    });
});
