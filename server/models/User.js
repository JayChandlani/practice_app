const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true, min: 2, max: 50 },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, min: 8 }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;