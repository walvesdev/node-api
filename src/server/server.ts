import express from 'express';
import 'dotenv/config';

const server = express();

// server.get("/", (req, res) => {
//     return res.send("Welcome to Node.js API!");
// })

export {server}