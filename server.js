// Import required modules
const express = require('express');
const app = express();
const PORT = 3000; // Define the port to run the server

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route - Home
app.get('/', (req, res) => {
  res.send('Welcome to Express Backend!');
});

// Example route - API endpoint
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// POST request example
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// 404 Route
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
