/* === External Modules === */
const express = require('express');
const methodOverride = require('method-override');
require('./config/db.connection');

/* === Module Instance === */
const app = express();

/* === PORT === */
const PORT = 4000;

/* === Internal Modules === */
const controllers = require('./controllers');

/* === App Config === */
app.set('view engine', 'ejs');

/* === Middleware === */
app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

/* === Routes === */
app.use('/', controllers.auth);
app.use('/albums', controllers.album);
app.use('/users', controllers.user);

// listener
app.listen(PORT, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log('Listening for cool grooves on port: ', PORT);
});