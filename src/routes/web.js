
const express = require('express')
const {getHomepage, getHoiDanit} = require('../controllers/homeControllers')
const router = express.Router()

router.get('/', getHomepage);
  
router.get('/hoidanit', getHoiDanit)
module.exports = router; // export default