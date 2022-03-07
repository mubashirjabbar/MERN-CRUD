process.env.USER = "postgres";
const config = {
  DIALECT: process.env.DIALECT || "postgres",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 5432,
  USER: process.env.USER || "postgres",
  PASSWORD: process.env.PASSWORD || "1234",
  DATABASE: process.env.DATABASE || "CRUD",
};
module.exports = config;
