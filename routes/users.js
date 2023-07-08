import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
  const users = fs.readFileSync('./data/users.json', { encoding: 'utf8' });

  res.json({ users: JSON.parse(users) });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const users = fs.readFileSync('./data/users.json', { encoding: 'utf8' });

  const user = JSON.parse(users).find((item) => item._id === id);

  if (!user) {
    res.status(404).json({ message: 'ID de usuario no encontrado' });
  } else {
    res.json({ user });
  }
});

export default router;
