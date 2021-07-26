const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Listening for cool grooves on port: ', PORT);
});