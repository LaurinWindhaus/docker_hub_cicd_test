const express = require('express');
const app = express();
const port = 3000;

const calculateSum = (num1, num2) => {
  return num1 - num2;
};

app.get('/calc', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Invalid input. Please provide valid numbers.');
  }

  const sum = calculateSum(num1, num2);
  res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
});

app.get('/', (req, res) => {
  res.send('Hello, World! - CI/CD works fine!');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;
