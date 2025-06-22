const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/UserTestappWithEJS");
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