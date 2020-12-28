const dotenv = require('dotenv');
const path = require('path');


dotenv.config({ path: path.resolve(__dirname, '../.env.development') });

module.exports.development = {
    dialect: 'mysql',
    seederStorage: 'sequelize',
    url: process.env.DB_URL
};

module.exports.production = {
    dialect: 'mysql',
    url: process.env.DB_URL
};