require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  port: 5432,
  host: 'ec2-44-206-89-185.compute-1.amazonaws.com',
  username:  'kiduwwtzbcuglg',
  password: '2cf612617cae0ceda5bea73b2166a2784eb6d236da4b05d40667718af9bd2e36',
  database: 'd11c5a9lak8ch6',
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