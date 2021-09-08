var express = require('express')
const jwt = require('jsonwebtoken')

var service = require('../../servicios/ServiceAplicacion')

const mensajes = require('../../utilidades/Mensajes.json')
const validador = require('../../servicios/Validate')
const TOKEN_SECRET = "bytheone$2021";
var router = express.Router();

router.get('/consultar-aplicacion', autenticarToken, function (req, res) {
    service.seleccionarAplicaciones()
        .then(result => {

            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.post('/agregar-aplicacion', (req, res)=>{
    let nombre = req.body.nombre;
    let precio = req.body.precio;
    let descripcion = req.body.descripcion;
    let icono = req.body.icono;
    let idCategoria = req.body.idCategoria;

    let respuesta = {
        status: 200,
        mensaje: ""
    }

    if (!validador.validarDatos(nombre) || !validador.validarDatos(precio)
     || !validador.validarDatos(descripcion) || !validador.validarDatos(icono) || !validador.validarDatos(idCategoria)) {
        respuesta.status = 400;
        respuesta.mensaje = mensajes.MensajeValidador

        return res.status(400).json(respuesta);

    }

    service.agregarAplicacion(nombre,precio,descripcion,icono,idCategoria)
    .then(data=>{
        respuesta.mensaje = mensajes.mensajeOK
            
            res.status(200);
    })
    .catch(err=>{
        respuesta.status = 500;
            
            respuesta.mensaje = mensajes.mensajeError
            res.status(500);
    })
    res.json(respuesta);
})

function autenticarToken(req, res, next) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).json({"Mensaje":"Debe iniciar sesion"})

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.status(401).json({"Mensaje":"Debe iniciar sesion"})

        req.user = user

        next();
    })

}

module.exports=router;
