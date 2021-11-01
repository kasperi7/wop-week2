'use strict';
// userController
'use strict';
const userModel = require('../models/userModel');

// const users = userModel.users;
const { users, getUser } = userModel;

const user_list_get = (req, res) => {
    const newUsers = users.map((user) =>{
        delete user.password;
        return user;
    });
  res.json(newUsers);
};

const user_get = (req, res) => {
    const vastaus = getUser(req.params.id);
    delete vastaus.password;
    res.json(vastaus);
};

const user_post = (req, res) => {
    console.log(req.body);
    res.send('From this enpoint you can add users.');
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
};