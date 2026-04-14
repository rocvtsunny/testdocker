const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: "Backend is online!" });
});

app.listen(3001, () => console.log('Server draait op 3001'));