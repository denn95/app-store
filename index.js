const express = require('express')
const bodyParser = require('body-parser')

const mantenimientos = require('./backend/controllers/Aplicacion/AplicacionController')
const mantenimientoUsers = require('./backend/controllers/Usuario/UsuarioController')

const app = express();

app.use(bodyParser.json({
    type: 'application/json'
}));

app.use('/mantenimiento', mantenimientos)
app.use('/mantenimientoUser', mantenimientoUsers)

app.use(express.static(__dirname + '/appstore'));

app.get('/', (req, res) => {
    res.redirect('/login/index.html')
});


app.listen(3000);