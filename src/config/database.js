require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  port: 25060,
  host: 'app-a654fa7a-2311-458e-ab61-7bf64f091dd9-do-user-11941045-0.b.db.ondigitalocean.com',
  username: 'finderdb',
  password: 'AVNS_GS0CJ4_atuTO0TTBP9N',
  database: 'finderdb',
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