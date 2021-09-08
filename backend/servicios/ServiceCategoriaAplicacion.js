const conexion = require('../conexion/conexionDB')
const propertiesConsulta = require('../utilidades/ConsultaCategoria.json')

function seleccionarCategoria() {
    return new Promise((resolve, reject) => {
        conexion.query(propertiesConsulta.SelectCategorias, (err, resultado) => {
            if (err) reject(err)
            else resolve(resultado)
        });
    });
}

function agregarCategoria(descripcion){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.InsertarCategoria,[descripcion],(err,resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}

function actualizarCategoria(descripcion,idCategoria){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.UpdateCategoria,[descripcion,idCategoria], (err, resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}

function eliminarCategoria(idCategoria){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.DeleteCategoria,[idCategoria], (err, resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}


module.exports = {
    seleccionarCategoria: seleccionarCategoria,
    agregarCategoria: agregarCategoria,
    actualizarCategoria: actualizarCategoria,
    eliminarCategoria: eliminarCategoria
}