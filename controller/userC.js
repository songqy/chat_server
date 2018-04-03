/**
 *
 */

const CommomUtil = require('../libs/CommomUtil');

const mongodb = require('../db/mongodb');

module.exports.addUser = addUser;

module.exports.getUser = getUser;

module.exports.updateUser = updateUser;


async function addUser(ctx) {
    return ctx.body = 'test add user';
    let { user_name } = CommomUtil.getReqData(ctx);
    user_name = user_name || 'evan';
    user_name = CommomUtil.getSalt(16);
    password = CommomUtil.getSalt(16);
    // let resData = await test_mongodb.insert('user', { user_name: user_name });
    let resData = await mongodb.Users.insertMany({ name: user_name, password: password });
    resData['add_time'] = new Date(resData['add_time']);

    return ctx.body = resData;
}

async function getUser(ctx) {
    let { user_name } = CommomUtil.getReqData(ctx);
    user_name = user_name || 'evan';

    // console.log(user_name);

    let start_time_i = (new Date()).getTime();
    // let resData = await test_mongodb.find('user', { user_name: user_name });
    let resData = await mongodb.Users.find({ _id: '5abde66363ae8e0060010b8d' });
    let end_time_i = (new Date()).getTime();

    console.log((end_time_i - start_time_i) + 'ms');

    // console.log(resData);
    return ctx.body = resData;
}


async function updateUser(ctx) {
    let { user_name } = CommomUtil.getReqData(ctx);
    user_name = user_name || 'evan';

    console.log(user_name);

    let start_time_i = (new Date()).getTime();
    let resData = await mongodb.Users.update({ _id: '5abde66363ae8e0060010b8d' }, { name: 'evan' }, { multi: true });
    let end_time_i = (new Date()).getTime();
    console.log((end_time_i - start_time_i) + 'ms');
    // let resData = await test_mongodb.update('user', { user_name: user_name }, { $set: { user_name: 'nn,d,fa' } });

    console.log(resData);
    return ctx.body = resData;
}
