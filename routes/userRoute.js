var express = require('express')
var router = express.Router()
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', (req, res, next)=>{
  console.log(req.body)
  res.json(req.body)
});

router.put('/', (req, res)=>{
  res.send('With this endpoint you can edit users.')
});

router.delete('/', (req, res)=>{
  res.send('With this endpoint you can delete users.')
});

module.exports = router;
