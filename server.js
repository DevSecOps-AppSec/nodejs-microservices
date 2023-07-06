const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define your API endpoint
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'Anonymous';
  const greeting = `Hello, ${name}!`;
  res.json({ message: greeting });
});

// Start the server
const port = 80;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
