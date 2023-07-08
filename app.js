import express from 'express';
import users from './routes/users.js';
import cards from './routes/cards.js';

const app = express();
app.use('/users', users);
app.use('/cards', cards);

app.get('/', (req, res) => {
  res.status(500).send({ message: 'An error has ocurred on the server' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
