/* === External Modules === */
// imports express module
const express = require('express');
const methodOverride = require('method-override');
require('./config/db.connection');

/* === Module Instance === */
const app = express();

/* === PORT === */
// sets PORT to 4000
const PORT = 4000;

/* === Internal Modules === */
// sets album controllers to variable
const controllers = require('./controllers');

/* === Middleware === */
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

/* === Routes === */

// connects controllers
app.use('/albums', controllers.album);
app.use('/users', controllers.user);

// listener
app.listen(PORT, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Listening for cool grooves on port: ', PORT);
});