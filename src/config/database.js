require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timeStamps: true,
    underscored: true,
    underscoredAll: true,
  },
  ssl: true,
  sslmode: "required",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}