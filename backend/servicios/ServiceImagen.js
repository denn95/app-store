//importamos
const conexion = require('../conexion/conexionDB')
const propertiesConsulta = require('../utilidades/ConsultaImg.json')


//agregado, funcion consulta general
function seleccionarImg() {
    return new Promise((resolve, reject) => {
        conexion.query(propertiesConsulta.SelectImg, (err, resultado) => {
            if (err) reject(err)
            else resolve(resultado)
        });
    });
}


//agregado, funcion agregar imagen
function agregarImg(url,codigoAplicacion){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.InsertarImg,[url,codigoAplicacion],(err,resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}


//agregado, funcion actualizar imagen
function actualizarImg(url,codigoAplicacion,idImagen){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.UpdateImg,[url,codigoAplicacion,idImagen], (err, resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}


//agregado, funcion eliminar imagen
function eliminarImg(idImagen){
    return new Promise((resolve, reject)=>{
        conexion.query(propertiesConsulta.DeleteImg,[idImagen], (err, resultado)=>{
            if(err) reject(err)
            else resolve(resultado)
        });
    });
}


//agregado, funcion consulta de imagenes por app
function seleccionarImgPorApp(codigoAplicacion) {
    return new Promise((resolve, reject) => {
        conexion.query(propertiesConsulta.SelectImgPorApp,[codigoAplicacion], (err, resultado) => {
            if (err) reject(err)
            else resolve(resultado)
        });
    });
}


module.exports = {
    seleccionarImg: seleccionarImg,
    agregarImg: agregarImg,
    actualizarImg: actualizarImg,
    eliminarImg: eliminarImg,
    seleccionarImgPorApp: seleccionarImgPorApp
}