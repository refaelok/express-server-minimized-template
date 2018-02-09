/**
 * Main application routes
**/

const baseAPI = '/api';

const posts = {
    uri: `${baseAPI}/posts`,
    api: require('../api/posts')
};

exports.default = function(app) {
    app.use(posts.uri, posts.api);
};
