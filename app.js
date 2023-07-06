import express  from "express";
import users from "./routes/users.js"
import cards from "./routes/cards.js"

const app = express()
app.use(users);
app.use(cards);

app.get('/', (req, res) => {
  res.send('Error 404, Recurso solicitado no encontrado');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});