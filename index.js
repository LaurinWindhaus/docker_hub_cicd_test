const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.get('/api/v2', (req, res) => {
  res.json({ message: 'Hello from the API v2!' });
});

app.get('/api/v3', (req, res) => {
  res.json({ message: 'Hello from the API v2!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
