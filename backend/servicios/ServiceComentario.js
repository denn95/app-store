//importamos
const conexion = require('../conexion/conexionDB')
const propertiesConsulta = require('../utilidades/ConsultaComentario.json')


//agregado, funcion consulta general
function seleccionarComentario() {
    return new Promise((resolve, reject) => {
        conexion.query(propertiesConsulta.SelectComentario, (err, resultado) => {
            if (err) reject(err)
            else resolve(resultado)
        });
    });
}


//agregado, funcion agregar comentario
function agregarComentario(comentario,codigoAplicacion){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.InsertarComentario,[comentario,codigoAplicacion],(err,resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}


//agregado, funcion actualizar comentario
function actualizarComentario(comentario,codigoAplicacion,idImagen){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.UpdateComentario,[comentario,codigoAplicacion,idImagen], (err, resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}


//agregado, funcion eliminar comentario
function eliminarComentario(idImagen){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.DeleteComentario,[idImagen], (err, resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}


//agregado, funcion consultar comentario por app
function seleccionarComentarioPorApp(codigoAplicacion) {
    return new Promise((resolve, reject) => {
        conexion.query(propertiesConsulta.SelectComentarioPorApp,[codigoAplicacion], (err, resultado) => {
            if (err) reject(err)
            else resolve(resultado)
        });
    });
}


module.exports = {
    seleccionarComentario: seleccionarComentario,
    agregarComentario: agregarComentario,
    actualizarComentario: actualizarComentario,
    eliminarComentario: eliminarComentario,
    seleccionarComentarioPorApp: seleccionarComentarioPorApp
}