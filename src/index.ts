import {server} from "./server/server";
import express from "express";
import {router} from "./server/routes";

server.use(express.json());
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));