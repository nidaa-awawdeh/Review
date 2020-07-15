const fs = require('fs');

const buildDatabase = () => {
    const connection = require('./connection');
    const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err, "error");
        } else {
            console.log("database created");
            connection.end(() => {
                console.log('connection closed')
            })
        }
    });
};

buildDatabase();

module.exports = buildDatabase;