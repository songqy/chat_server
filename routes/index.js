/**
 * koa-router
 */

const Router = require('koa-router');
const router = new Router();

const userC = require('../controller/userC');

// router.all('/user/:id', user_c.get_user);

// router.all('/user/:id', user_c.get_user);

router.all('/add_user', userC.addUser);

module.exports = router;
