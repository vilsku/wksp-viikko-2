'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const ret = cats.filter((cats) => {
    return cats.id == req.params.id
  });
  res.json(ret);
};

module.exports = {
  cat_list_get,
  cat_get,
};