const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    mongoose.connect('mongodb+srv://uxdilshan:admin123@freelance.awionct.mongodb.net/beliver?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));
};

module.exports = connect;