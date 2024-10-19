const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());
// Set EJS as the template engine
app.set('view engine', 'EJS');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Import the product routes
const productRoutes = require('./routes/productRoutes');

// Use the product routes
app.use('/', productRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
