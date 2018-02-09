const {Router} = require('express');
const controller = require('./posts.controller');

const router = new Router();

router.get('/', controller.getAll);

module.exports = router;
