const mysql = require('mysql');

const connection = {
    host:'localhost',
    port:3306,
    database:'backend',
    user:'root',
    password: ''
};

const conn = mysql.createConnection(connection);

conn.connect((err)=>{
    if(err){
       res.json({msg : "Error ocurred while connecting to MySQL database: ." + err})
    } else {
       res.json({msg: "Connected to MySQL database created successfully."})

};
})
conn.end();


module.exports=conn;