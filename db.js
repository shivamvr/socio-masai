
const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://shivam:golmaal5@cluster0.10lgcrz.mongodb.net/SocialMedia')


module.exports = {connection}