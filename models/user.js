const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('MongoDB Atlas connection error:', err);
});
const userSchema = new mongoose.Schema({
  image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('user', userSchema);