const conexion = require('../conexion/conexionDB')
const propertiesConsulta = require('../utilidades/ConsultaUsuario.json')

function seleccionarUsuarios(nombre, password) {
    return new Promise((resolve, reject) => {
        conexion.query(propertiesConsulta.SelectUsuarios,[nombre,password], (err, resultado) => {
            if (err) reject(err)
            else resolve(resultado)
        });
    });
}


module.exports = {
    seleccionarUsuarios: seleccionarUsuarios
}