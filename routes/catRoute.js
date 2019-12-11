'use strict';
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', upload.single('avatar'), function (req, res, next) {
  router.post('/', catController.cat_create_post);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  // tiedostonnimi bodyyn, jos haluaa
  // req.body.filename = req.file.filename; // if you want to save filename to body
  next();
});

router.post('/', catController.cat_create_post);

router.put('/', catController.cat_update_put);

router.delete('/:id', catController.cat_delete);

module.exports = router;
