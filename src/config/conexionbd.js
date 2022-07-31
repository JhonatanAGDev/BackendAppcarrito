const mysql = require("mysql2");
const conecta = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"appcarrito"
});
conecta.connect();
module.exports = conecta;