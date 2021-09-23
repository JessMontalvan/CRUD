require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000)

//express
const app = express();

app.use(express.json())

//config
app.set('port', port)

//rutas
app.use('/api', require('./rutas'))

//Iniciar express
app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('Error al iniciar el server' + error)
    }else{
        console.log('Server iniciado')
    }
})