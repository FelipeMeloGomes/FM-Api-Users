import express = require("express");
import { AppDataSource } from "./database";
import { router } from "./routes";
import { Request, Response } from "express";

const server = express();

AppDataSource.initialize()
    .then(() => {
        console.log("Conectado ao banco de dados");
    })
    .catch((error) => {
        console.log(error);
    });

server.use(express.json());
server.use(router);

server.get("/", (request: Request, response: Response) => {
    return response.status(200).json({ message: "Dio bank Api" });
});

server.listen(5000, () => console.log("Server on"));
