import { EntityManager } from "typeorm";
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock";
import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";

describe("User repositories", () => {
    let userRepository: UserRepository;
    let managerMock: Partial<EntityManager>;

    const mockUser: User = {
        user_id: "1",
        name: "Felipe",
        email: "teste@gmail.com",
        password: "password",
    };

    beforeAll(async () => {
        managerMock = await getMockEntityManager({ saveReturn: mockUser });
        userRepository = new UserRepository(managerMock as EntityManager);
    });

    it("Deve cadastrar um novo usuário no banco de dados", async () => {
        const rep = await userRepository.createUser(mockUser);
        expect(managerMock.save).toHaveBeenCalled();
        expect(rep).toMatchObject(mockUser);
    });
});
