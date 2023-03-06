const User = require('../models/User');
const salytRounds = 10
var jwt = require('jsonwebtoken')

const findAllUsers= async (req, res) => {
    const oldUser = await User.find();
    res.json(oldUser);
};

module.exports = {
    findAllUsers
}