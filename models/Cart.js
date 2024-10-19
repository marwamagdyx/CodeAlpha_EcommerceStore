const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },  // Reference to the Product model
            quantity: { type: Number, required: true, default: 1 }  // Quantity of each product
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;