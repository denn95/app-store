var express = require('express')
const jwt = require('jsonwebtoken')

var service = require('../../servicios/serviceUsuario')

const mensajes = require('../../utilidades/Mensajes.json')
const validador = require('../../servicios/Validate')

const TOKEN_SECRET = "bytheone$2021";

var router = express.Router();

router.post('/consultar-usuario', function (req, res) {

    let nombre = req.body.nombre;
    let password = req.body.password;
    console.log(nombre);
    console.log(password);
    service.seleccionarUsuarios(nombre, password)
        .then(result => {
            console.log(result);
            if (result.length > 0) {
                var token = generarJWT(nombre, password);
                res.status(200).json(token)
            }else{
              res.status(500).json({"status":500,
            "response":"No se encontro el usuario"})
            }
            
        })
        .catch(err => {
            res.status(500).json({"error":err}) 
        })
});

function generarJWT(userName, pass) {
    // return jwt.sign(userName, TOKEN_SECRET, { expiresIn: 60 * 60 })
    return jwt.sign({nombre:userName, password:pass}, TOKEN_SECRET);

}




module.exports=router;