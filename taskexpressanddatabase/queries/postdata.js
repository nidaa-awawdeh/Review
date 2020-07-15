
const connection = require('../config/connection');

const postdata = userData => {

 
    const sql = {
        text: `INSERT INTO class3 (name , age ) VALUES ($1, $2, $3);`,
        values: [name, age, ]
    };

    
    connection.query(sql.text, sql.values, (err, results) => {
        if (err) {
            throw err

        }
    });
}

module.exports = postdata