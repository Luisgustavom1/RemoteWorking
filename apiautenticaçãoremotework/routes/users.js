var express = require('express');
var bcrypt = require('bcrypt')
var config = require('../config')
var db = require('../db')
var validator = require('validator')

var router = express.Router();

/* GET users listing. */
router.post('/register', async function(req, res, next) {
  const { email, password, user } = req.body.userData;
  
  const dbEmail = await db.findEmail(email)
  
  if(dbEmail !== null){
    return res.status(401).json({
      error: 'Email já cadastrado'
    })
  }
  
  if(!validator.isEmail(email)){
    return res.status(401).json({
      error: 'O email é inválido'
    })
  }

  const dbUser = await db.findUser(user)

  if(dbUser !== null){
    return res.status(401).json({
      error: 'User já cadastrado'
    })
  }
  
  const hash = bcrypt.hashSync(password, config.SALT_ROUNDS)

  const dataToInsert = {
    email, 
    password: hash,
    user
  };

  db.addToDatabase(dataToInsert)
  .then(response => res.json(response))
});

module.exports = router;
