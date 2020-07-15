const dbConnection = require("../config/connection");

const getData = () => {
    const age = (2020 - birth);
    return dbConnection.query(`SELECT * FROM class3 where age > 25 ;`);
};

module.exports = {
    getData
};
