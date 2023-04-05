const router = require('express').Router()
const scoresCtrl = require('../controllers/scores.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*----------------- Public Routes -----------------*/


/*---------------- Protected Routes ---------------*/
router.use(decodeUserFromToken)


module.exports = router