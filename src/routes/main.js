const express = require ('express');
const router = express.Router();
const {index,contact,about,music,admin,login,noEntry} = require('../controllers/mainController')

const userLogs = require ('../middlewares/usersLogs'); //traigo userLogs
router
    .get('/',  userLogs,index )
    .get('/contact', contact )
    .get('/about', about)
    .get('/music', music )
    .get('/admin', admin )
    .get('/login', login )
    .get('/noEntry', noEntry )


module.exports = router