module.exports = {
  dialect: 'postgres',
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
  sslmode: "required",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}