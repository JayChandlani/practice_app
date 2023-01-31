const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Product = require('../models/Products')

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: passwordHash
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ message: "User does not exists." });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

const getProducts = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json({ product })
    } catch (error) {
        res.status(404).json({ message: err.message })
    }
}
const controller = { register, login, getProducts }
module.exports = controller