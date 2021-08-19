const config = require('../config')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})
.then(() => console.log('Connected in the database'))
.catch(e => console.log('[ERRO]', e))

const UserSchema = new mongoose.Schema({
    user: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

const UserModel = mongoose.model('Users', UserSchema)

module.exports = {
    addToDatabase: async (dataToInsert) => {
        const newUser = await UserModel.create(dataToInsert)
        
        return {
            newUser,
            success: 'Usuário registrado com sucesso'
        }
    },
    findEmail: async (dataEmail) => {
        const user = await UserModel.findOne({email: dataEmail})
    
        return user
    },
    findUser: async (dataUser) => {
        const user = await UserModel.findOne({user: dataUser})
    
        return user
    }
}
