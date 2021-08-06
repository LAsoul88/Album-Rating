const express = require('express');
const router = express.Router();
const { Album, User } = require('../models');

/* === Routes === */

// index
router.get('/', (req, res) => {
    res.send('this works');
}); 

// new
router.get('/new', (req, res) => {
    res.send('this new works');
});

// create
// router.put('/', (req, res) => {
//     res.
// })

// show
router.get('/:id', (req, res) => {
    res.send('this specific page works as well');
});

// edit 


// update


// delete

module.exports = router;