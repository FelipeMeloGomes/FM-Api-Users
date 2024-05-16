export interface User {
    name: string;
    email: string;
}

const db = [
    {
        name: "Felipe",
        email: "Felipe@gmail.com",
    },
];

export class UserService {
    db: User[];

    constructor(database = db) {
        this.db = database;
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email,
        };
        this.db.push(user);
        console.log("DB Atualizado", this.db);
    };

    deleteUser = (name: string, email: string) => {
        const index = this.db.findIndex(
            (user) => user.name === name && user.email === email
        );
        if (index !== -1) {
            this.db.splice(index, 1);
            console.log("Usuário excluído:", name);
        } else {
            console.log("Usuário não encontrado:", name);
        }
        console.log("DB Atualizado", this.db);
    };

    getAllUsers = () => {
        return this.db;
    };
}
