import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("API para bibliotecas");
});

export default app;

