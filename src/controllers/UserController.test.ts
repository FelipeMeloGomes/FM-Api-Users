import { makeMockRep } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Request } from "express";

describe("UserController", () => {
    const mockUserService: Partial<UserService> = { createUser: jest.fn() };

    const userController = new UserController(mockUserService as UserService);

    it("Add new User", () => {
        const mockReq = {
            body: {
                name: "Felipe",
                email: "felipeme@gmail",
            },
        } as Request;
        const mockRep = makeMockRep();
        userController.createUser(mockReq, mockRep);
        expect(mockRep.state.status).toBe(201);
        expect(mockRep.state.json).toMatchObject({ message: "Created User" });
    });
});
