const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Example route
app.get('/api/products', (req, res) => {
  res.json({ message: 'Products API endpoints' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
