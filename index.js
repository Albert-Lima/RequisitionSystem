const express = require("express")
const axios = require("axios")
const cron = require("node-cron")

const app = express()
const PORT = process.env.PORT || 8081

cron.schedule('*/5 * * * *', async () => {
    try {
      await axios.get('https://wppchatbotfe.onrender.com/ping');
      console.log("reqisição bem sucedida")
      console.log('Ping bem-sucedido!');
    } catch (error) {
      console.error('Erro ao fazer o ping:', error);
    }
});



app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta: ${PORT}`)
})