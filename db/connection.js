const mysql = require ("mysql2");

// db connection
const db = mysql.createConnection({
    host: "localhost",
    // sql username
    user: "root", password: "root", database: "employees",
});

// export
module.exports = db