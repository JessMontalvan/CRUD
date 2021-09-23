const rutas = require('express').Router()
const { Router } = require('express');
const conexion = require('./config/conexion')

//Asignar rutas
rutas.get('/', function(req, res){
    res.send('hola')
});
//Lista
rutas.get('/', (req, res)=>{
    let sql = 'select * from tb_clinica'
    conexion.query(sql,(err, rows, fields)=>{
        if(err)throw err;
        else{
            res.json(rows)
        }
    })
});

//Conseguir un paciente
rutas.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'select * from tb_clinica where id_paciente = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err)throw err;
        else{
            res.json(rows)
        }
    })
});

//agregar paciente
rutas.post('/', (req, res)=>{
    const{nombres, apellidos, direccion, telefono, foto} = req.body

    let sql = `insert into tb_clinica(nombres_paciente, apellidos_paciente, direccion, telefono, foto) values('${nombres}','${apellidos}', '${direccion}', '${telefono}', '${foto}')`

    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Paciente agregado'})
        }
    })
});

//eliminar
rutas.delete('/:id', (req, res)=>{
    const{id}=req.params

    let sql = `delete from tb_clinica where id_paciente = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Paciente eliminado'})
        }
    })
})

module.exports = rutas;