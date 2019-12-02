'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  const ret = users.filter((users) => {
    return users.id == req.params.id
  });
  res.json(ret);
};

module.exports = {
  user_list_get,
  user_get,
};