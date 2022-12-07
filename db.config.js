const { ConnectionAcquireTimeoutError } = require("sequelize");
let sequelize = require("sequelize");
let sequelizeInstance = new sequelize(
    "ecomm_db",
    "root",
    "chaitanyak0324@",
    {
        host:"localhost",
        dialect:"mysql",
        operatoersAliases:0,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
    }
);
module.exports = sequelizeInstance;