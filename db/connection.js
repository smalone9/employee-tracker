const mysql = require ("mysql2");

// connection connection
const connection = mysql.createConnection({
    host: "localhost",
    // sql username
    user: "root", password: "root", database: "employees",
});

// error handling
connection.connect(function(err){
    if(err) throw err;
});

// connection.connect();
// export
module.exports = connection