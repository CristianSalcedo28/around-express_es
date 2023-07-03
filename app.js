import express  from "express";
import userRoutes from "./routes/users.js";
import cardsRoutes from "./routes/cards.js"

const app = express()

app.get('/', (req, res)=> {
    res.status(404).send('<h1>Página no encontrada</h1>');
})

app.get('/cards', (req, res)=> {
    res.send('')
})

app.get('/users/8340d0ec33270a25f2413b69', (req, res)=> {
    res.send('')
})

app.listen(3000)