/**
 * Created by Evan on 2018/3/28.
 * mongoDB
 */

const mongoose = require('mongoose');
const mongodb_config = require('../config/db_config').mongodb_config;
mongoose.Promise = global.Promise;

mongoose.connect(mongodb_config.db);

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


//users 用户
const usersSchema = new Schema({
    name: String,
    password: String,
    add_time: { //创建时间
        type: Date,
        default: Date.now
    },
});

usersSchema.index({
    name: 1
}, {
    unique: true
});

exports.Users = mongoose.model('Users', usersSchema);


//message 信息
const messagesSchema = new Schema({
    message: String,
    add_id: ObjectId,
    type: Number, //1 私聊  2群聊
    to_id: ObjectId, //接收信息对象的id，个人或者群
    add_time: { //创建时间
        type: Date,
        default: Date.now
    },
});

messagesSchema.index({
    add_id: 1,
    to_id: 1,
    add_time: -1,
});

exports.Messages = mongoose.model('Messages', messagesSchema);



//群
const groupsSchema = new Schema({
    group_name: String,
    group_key: String,
    create_id: ObjectId,
    add_time: { //创建时间
        type: Date,
        default: Date.now
    },
})

exports.Groups = mongoose.model('Groups', groupsSchema);


//加群列表
const groupJoinSchema = new Schema({
    group_id: ObjectId,
    join_id: ObjectId,
    add_time: { //创建时间
        type: Date,
        default: Date.now
    },
})

groupJoinSchema.index({
    join_id: 1,
    group_id: 1,
});

exports.GroupJoin = mongoose.model('GroupJoin', groupJoinSchema);
