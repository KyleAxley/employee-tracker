const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "employee_db",

    },
    console.log("You have connected to the employee database.")
);

// export for db connection
module.exports = db.promise();