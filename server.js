const express = require('express');
const app = express();

const PORT = 4000;



/* === Routes === */


// index
app.get('/', (req, res) => {
    res.send('this works');
});

// new


// create


// show


// edit 


// update


// delete



// listener
app.listen(PORT, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Listening for cool grooves on port: ', PORT);
});