<span>const {Client} = require('pg');</span>;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "data",
  password: "!mo36lt8res*",
  port: "5432",
});

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database!");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

try {
  await client.connect();
  console.log("Connected to PostgreSQL database!");
} catch (err) {
  console.error("Error connecting to the database: ", err);
}

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "data",
  password: "!mo36lt8res*",
  port: "5432",
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000,
}); // How long a client is allowed to remain idle before being closed

// Now you can use the pool to execute queries
pool.query("SELECT * FROM your_table", (err, result) => {
  if (err) {
    console.error("Error executing query:", err);
  } else {
    console.log("Query result:", result.rows);
  }
});
