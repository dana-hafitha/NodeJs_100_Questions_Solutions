//connecting mangodb with express using mangoose
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/app';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(url);
        console.log('DataBase connected successfully!');
    } catch (error) {
        console.error('Error connecting to the DataBase:', error.message);
    }
};
connectToDatabase();