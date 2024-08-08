const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5555;

// Middleware
app.use(cors());
app.use(express.json());

const petshops = [
  {
    name: 'Meu Canino Feliz',
    distance: 2,
    weekdays: { small: 20, large: 40 },
    weekends: { small: 24, large: 48 },
  },
  {
    name: 'Vai Rex',
    distance: 1.7,
    weekdays: { small: 15, large: 50 },
    weekends: { small: 20, large: 55 },
  },
  {
    name: 'ChowChawgas',
    distance: 0.8,
    weekdays: { small: 30, large: 45 },
    weekends: { small: 30, large: 45 },
  },
];

// Função para calcular o melhor petshop
const calculateBestPetshop = (date, smallDogs, largeDogs) => {
  const dayOfWeek = new Date(date).getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  return petshops.map(petshop => {
    const prices = isWeekend ? petshop.weekends : petshop.weekdays;

    if (!prices) {
      throw new Error(`Prices not defined for ${petshop.name}`);
    }

    const totalPrice = (prices.small * smallDogs) + (prices.large * largeDogs);
    return { ...petshop, totalPrice };
  }).sort((a, b) => a.totalPrice - b.totalPrice || a.distance - b.distance)[0];
};

// Rota para calcular o melhor petshop
app.post('/calculate', (req, res) => {
  console.log('Request body:', req.body);

  const { date, smallDogs, largeDogs } = req.body;

  if (!date || typeof smallDogs !== 'number' || typeof largeDogs !== 'number') {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    const bestPetshop = calculateBestPetshop(date, smallDogs, largeDogs);
    res.json({ name: bestPetshop.name, price: bestPetshop.totalPrice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
