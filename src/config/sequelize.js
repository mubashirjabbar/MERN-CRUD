const {
  DIALECT,
  HOST,
  PORT,
  USER,
  PASSWORD,
  DATABASE,
} = require("../../config");

module.exports = {
  development: {
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: DIALECT,
    // "operatorsAliases": 0,
  },
  test: {
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: DIALECT,
    // "operatorsAliases": 0,
  },
  production: {
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: DIALECT,
    // "operatorsAliases": 0,
  },
};
