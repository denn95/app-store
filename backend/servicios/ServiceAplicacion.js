const conexion = require('../conexion/conexionDB')
const propertiesConsulta = require('../utilidades/ConsultaAplicacion.json')

function seleccionarAplicaciones() {
    return new Promise((resolve, reject) => {
        conexion.query(propertiesConsulta.SelectAplicaciones, (err, resultado) => {
            if (err) reject(err)
            else resolve(resultado)
        });
    });
}

function seleccionarAplicacionesPorCategoria(idCategoria) {
    return new Promise((resolve, reject) => {
        conexion.query(propertiesConsulta.SelectAplicacionesPorCategoria,[idCategoria], (err, resultado) => {
            if (err) reject(err)
            else resolve(resultado)
        });
    });
}

function agregarAplicacion(nombre,precio,descripcion,icono,idCategoria){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.InsertarAplicacion,[nombre,precio,descripcion,icono,idCategoria],(err,resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}

function actualizarAplicacion(nombre,precio,descripcion,icono,idCategoria,codigo){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.UpdateAplicacion,[nombre,precio,descripcion,icono,idCategoria,codigo], (err, resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}

function eliminarAplicacion(idCategoria){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.DeleteAplicacion,[idCategoria], (err, resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}


module.exports = {
    seleccionarAplicaciones: seleccionarAplicaciones,
    seleccionarAplicacionesPorCategoria: seleccionarAplicacionesPorCategoria,
    agregarAplicacion: agregarAplicacion,
    actualizarAplicacion: actualizarAplicacion,
    eliminarAplicacion: eliminarAplicacion
}