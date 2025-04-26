const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, // port 5432
  ssl: process.env.DB_SSL === "true", // Untuk koneksi ke Supabase nanti
});

module.exports = pool;
