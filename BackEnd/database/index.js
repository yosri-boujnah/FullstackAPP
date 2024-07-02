const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'root', 
  database: 'TalentLink',
}).promise()


  connection.connect()
  .then(() => {console.log("data base connect with success") })
  .catch((err) => { console.log(err) })
      
 
module.exports = connection