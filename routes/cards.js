import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
  const cards = fs.readFileSync('./data/cards.json', { encoding: 'utf8' });

  res.json({ cards: JSON.parse(cards) });
});

export default router;
