const express = require("express");
const axios = require("axios");
const cron = require("node-cron");

const app = express();
const PORT = process.env.PORT || 8081;

// Variável para armazenar o contador
let requestCount = 0;

// Tarefa agendada com cron para realizar o ping a cada minuto
cron.schedule("*/1 * * * *", async () => {
    try {
        await axios.get("https://wppchatbotfe.onrender.com/ping");
        requestCount++; // Incrementa o contador a cada requisição bem-sucedida
        console.log("Requisição bem-sucedida");
    } catch (error) {
        console.error("Erro ao fazer o ping:", error);
    }
});

// Rota GET para exibir a quantidade de requisições
app.get("/", (req, res) => {
    res.send(`Aplicação rodando. Total de requisições bem-sucedidas: ${requestCount}`);
    console.log(requestCount)
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});