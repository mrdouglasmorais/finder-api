require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  port: 5432,
  host: 'jelani.db.elephantsql.com',
  username: 'tguzwtkh',
  password: 'AOpGUOz4YfJvCaCSNE7EjEs08qzBaftG',
  database: 'tguzwtkh',
  define: {
    timeStamps: true,
    underscored: true,
    underscoredAll: true,
  },
  logging:  true,
  ssl: true,
  sslmode: "required",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}