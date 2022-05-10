const {connectdb, disconnectdb} = require('../db');

const users = require('./users.mongo');

async function addUser(email, password){
    await connectdb();
    const user = await users.findOne({email: email}).exec();
    if (await !user) {
        await users.create({
            email: email,
            password: password,
        });
        await disconnectdb();
        return true;
    }
}

async function verifyUser(email, password){
     await connectdb();
     const user = await users.findOne({
         email: email,
         password: password,
     }).exec();
     await disconnectdb();
     if (user) {
         return true;
     }
}

module.exports = {
    addUser,
    verifyUser,
}