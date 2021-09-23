const mysql = require("mysql2");
const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'stivencalde1234',
    port: '3306',
    database: 'db_clinica'
});

conexion.connect((err)=>{
    if(err){
        console.log('Error de conexión' + err)
    }else{
        console.log('Conexión exitosa')
    }
});

module.exports = conexion;
