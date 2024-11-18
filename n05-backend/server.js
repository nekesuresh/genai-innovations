const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const chartRoutes = require('./routes/charts');
const app = express();

app.use('/api/charts', chartRoutes); // Add the charts route


// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes); // Add the login route

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
