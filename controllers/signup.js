const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');

const signup = async (req, res) => {
    
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({email: email, password: hashedPassword});
        res.status(StatusCodes.CREATED).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.log(error);
    }
}

module.exports = { signup };