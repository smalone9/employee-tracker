const mysql = require ("mysql2");

// db connection
const db = mysql.createConnection({
    host: "localhost",
    // sql username
    user: "root", password: "root", database: "employees",
});
db.connect();
// export
module.exports = db