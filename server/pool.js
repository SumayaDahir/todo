const pg = require("pg");
let pool;

  pool = new pg.Pool({
  user: "sumaiadahirow",
  password: "12345",
  host: "localhost",
  port: 5432,
  database: "todoapp" 	
  });


module.exports = pool;
