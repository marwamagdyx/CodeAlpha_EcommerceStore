// const mongoose = require('mongoose');
// const Product = require('./models/Product');  // Assuming your Product model is here

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/ecommerce', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// // Dummy products array
// const products = [
//     {
//         name: 'Product 1',
//         price: 29.99,
//         description: 'This is a test product.',
//         imageUrl: 'https://via.placeholder.com/150'
//     },
//     {
//         name: 'Product 2',
//         price: 39.99,
//         description: 'This is another test product.',
//         imageUrl: 'https://via.placeholder.com/150'
//     },
//     {
//         name: 'Product 3',
//         price: 49.99,
//         description: 'Yet another test product.',
//         imageUrl: 'https://via.placeholder.com/150'
//     },
//     {
//         name: 'Product 4',
//         price: 59.99,
//         description: 'This is yet another test product.',
//         imageUrl: 'https://via.placeholder.com/150'
//     },
//     {
//         name: 'Product 5',
//         price: 69.99,
//         description: 'This is the last test product.',
//         imageUrl: 'https://via.placeholder.com/150'
//     }
// ];

// // Function to seed the products
// const seedProducts = async () => {
//     try {
//         // Clear existing products
//         await Product.deleteMany({});
//         console.log('Existing products cleared.');

//         // Insert new products
//         await Product.insertMany(products);
//         console.log('Dummy products added.');
        
//         // Close the connection after the operation
//         mongoose.connection.close();
//     } catch (error) {
//         console.log('Error seeding products:', error);
//         mongoose.connection.close();
//     }
// };

// // Call the seed function
// seedProducts();
const mongoose = require('mongoose');
const Product = require('./models/Product');  // Assuming your Product model includes a category field

 mongoose.connect('mongodb://localhost:27017/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Dummy products array with categories
const products = [
    {
        name: 'Wireless Headphones',
        price: 79.99,
        description: 'High-quality wireless headphones with noise cancellation.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Electronics'
    },
    {
        name: 'Smartphone Stand',
        price: 19.99,
        description: 'Adjustable stand for smartphones and tablets.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Accessories'
    },
    {
        name: 'Bluetooth Speaker',
        price: 59.99,
        description: 'Portable Bluetooth speaker with excellent sound quality.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Electronics'
    },
    {
        name: 'Laptop Backpack',
        price: 49.99,
        description: 'Durable backpack with padded compartments for laptops.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Bags'
    },
    {
        name: 'Running Shoes',
        price: 89.99,
        description: 'Lightweight running shoes with superior grip and comfort.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Footwear'
    },
    {
        name: 'Wristwatch',
        price: 199.99,
        description: 'Luxury wristwatch with stainless steel strap.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Accessories'
    },
    {
        name: 'Graphic T-shirt',
        price: 29.99,
        description: '100% cotton T-shirt with stylish graphic design.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Clothing'
    },
    {
        name: 'Gaming Mouse',
        price: 39.99,
        description: 'Ergonomic gaming mouse with customizable DPI settings.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Electronics'
    },
    {
        name: 'Yoga Mat',
        price: 25.99,
        description: 'Non-slip yoga mat perfect for home or studio workouts.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Fitness'
    },
    {
        name: 'Leather Wallet',
        price: 49.99,
        description: 'Premium leather wallet with multiple card slots.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Accessories'
    },
    {
        name: 'Water Bottle',
        price: 15.99,
        description: 'Stainless steel water bottle with thermal insulation.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Fitness'
    },
    {
        name: 'Sunglasses',
        price: 89.99,
        description: 'Polarized sunglasses with UV protection.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Accessories'
    },
    {
        name: 'Office Chair',
        price: 149.99,
        description: 'Ergonomic office chair with lumbar support.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Furniture'
    }
];

// Function to seed the products
const seedProducts = async () => {
    try {
        // Clear existing products
        await Product.deleteMany({});
        console.log('Existing products cleared.');

        // Insert new products
        await Product.insertMany(products);
        console.log('Dummy products added.');
        
        // Close the connection after the operation
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding products:', error);
        mongoose.connection.close();
    }
};

// Call the seed function
seedProducts();
