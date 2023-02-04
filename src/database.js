const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://carolina:12345@cluster0.ta72pe2.mongodb.net/api-retaurante';

mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))