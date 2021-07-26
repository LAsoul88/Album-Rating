// brings mongoose into file
const mongoose = require('mongoose');

// connection string
const connectionStr = "mongodb://localhost:27017/albums";

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
    console.log('Mongodb connected...');
});

mongoose.connection.on('error', error => {
    console.log('Mongodb error...', error);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongodb disconnected...');
});