const config = {
    mongo: {
        dbUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/db',
    },
    server: {
        port: process.env.PORT || 8080
    },
};

module.exports = config;
