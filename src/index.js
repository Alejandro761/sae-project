const express = require ('express')
const router = require('./routes') //solo si se llama index
const resourcesRouter = require('./routes') //solo si se llama index

const app = express()
const PORT = process.env.PORT || 3000

// app.get ('/', (req, res) => {
//     res.send("Holi");
// })

app.use("/api", router)

app.use("/api/resources", resourcesRouter)

app.listen (PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT} siuuu 🖥️`);
})