const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const Order = require('../models/Order');

// Route to display all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();  // Fetch products from the database
        res.render('index', { products });  // Pass the products array to the EJS template
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Admin route to add a new product (For now, not secured)
router.post('/add-product', async (req, res) => {
    const { name, price, description, imageUrl } = req.body;

    const newProduct = new Product({
        name,
        price,
        description,
        imageUrl,
        category,
    });

    try {
        await newProduct.save();
        res.redirect('/');  // Redirect to the homepage after adding the product
    } catch (error) {
        res.status(500).send('Error adding product');
    }
});

// Route to view product details (optional)
router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.render('product-details', { product });
    } catch (error) {
        res.status(404).send('Product not found');
    }
});


router.get('/cart', (req, res) => {
    res.render('cart', { cartItems: [] });  // Initially render the cart with an empty array
});
router.post('/api/cart-items', async (req, res) => {
    const { ids } = req.body;  // Get array of product IDs from the request body
    try {
        const products = await Product.find({ '_id': { $in: ids } });  // Fetch products from MongoDB
        res.json(products);  // Return the products as JSON
    } catch (error) {
        res.status(500).send('Error fetching cart items');
    }
});
router.post('/checkout', async (req, res) => {
    const { userId, products } = req.body;

    // Log the request data for debugging
    console.log('Checkout Request:', req.body);

    // Create a new cart document
    const cart = new Cart({ userId, products });

    try {
        await cart.save();  // Save the cart in the database
        res.status(201).json({ message: 'Cart saved successfully', cart });
    } catch (error) {
        console.error('Error saving cart:', error);
        res.status(500).json({ message: 'Error saving cart: ' + error.message });
    }
});
router.post('/place-order', async (req, res) => {
    try {
        const { items, shippingAddress } = req.body;

        // Calculate total amount based on cart items
        let totalAmount = 0;
        for (const item of items) {
            const product = await Product.findById(item.productId); // Fetch product details
            totalAmount += item.quantity * product.price; // Calculate total based on actual product price
        }

        // Create a new order
        const newOrder = new Order({
            items,
            shippingAddress,
            totalAmount,
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully', order: savedOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to place order' });
    }
});
module.exports = router;
