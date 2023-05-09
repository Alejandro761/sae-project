const express = require ('express')
// const router = require('./routes') //solo si se llama index
const resourcesRouter = require('./routes/resources') //solo si se llama index

const app = express()
const PORT = 3001

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use("/api/resources", resourcesRouter)

app.listen (PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT} siuuu 🖥️`);
})