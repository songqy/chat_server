/**
 *
 */

const mongodb = require('../db/mongodb');

module.exports.addUser = addUser;

module.exports.getUserById = getUserById;

module.exports.updateUser = updateUser;



async function addUser(user_name, password) {
    let data = await mongodb.Users.insertMany({ name: user_name, password: password });

    return data;
}



async function getUserById(id) {
    let data = await mongodb.Users.findById(id);

    return data;
}


async function updateUser(id, name, password) {
    let data = await mongodb.Users.updateOne({ _id: id }, { name: name, password: password });

    return data;
}
