/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /posts               ->  getAll
 */

const MODEL_PATH = './model/posts';
const MODEL_SERVICE = require(MODEL_PATH);

exports.getAll = function (req, res) {
    res.json({
        name: 'dsad'
    });
};


