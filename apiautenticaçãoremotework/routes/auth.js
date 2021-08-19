const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const db = require('../db')
const config = require('../config')

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body.userData

    if( email === undefined || password === undefined){
        res.status(401).json({
            success: false,
            code: 'DATA_INVALID',
            message: 'E-mail e/or password invalid'
        })
    } else {
        const user = await db.findEmail(email)
        console.log(user);
        if(user !== null && bcrypt.compareSync(password, user.password)){
            let tokenData = {
                id: user.id,
                email: user.email
            }
            let generatedToken = jwt.sign(tokenData, config.KEY_FROM_GENERATED_TOKEN, { expiresIn: '1m' });
            res.json({
                success: true,
                token: generatedToken,
            })
        } else {
            res.status(401).json({
                success: false,
                message: 'Senha ou email inválidos'
            })
        }
    }
})

router.get('/verifytoken', (req, res, next) => {
    const headerToken = req.headers['authorization']
    if(!headerToken){
        res.status(406).json({
            success: false,
            message: 'Dont have autorization headers'
        })
    } else {
        let token = headerToken.split(' ')[1];
        jwt.verify(token, config.KEY_FROM_GENERATED_TOKEN, (err, encoded) => {
            if(!err){
                res.json({
                    success: true,
                    message: 'Token is valid'
                })
            } else {
                res.json({
                    success: false,
                    message: err
                })
            }
        })
    }
})
module.exports = router