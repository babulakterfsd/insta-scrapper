const Task = require('../models/Task.model');

module.exports.getAllTheUserNameService = async () => {

    let userNames = []

   const users = await Task.find({}).limit(15)

   users.forEach(user => {
         userNames.push(user?.of_username.slice(1, 50).trim())
   })

   console.log(userNames);

   return users
}