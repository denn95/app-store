var configuraciones = config;

function consultarCategorias() {

    let token = sessionStorage.getItem('token');
    $.ajax(configuraciones.hostApi + configuraciones.selectAplicacion, {
        type: "GET",
        datatype: 'Json',
        headers:{
            authorization:'Bearer '+ token
        },
        //data:
        success: function (data, status) {

            let listaCategorias = data;
            let j=0;
            let id="app-item"
            for (let i of listaCategorias) {
                $('#apps').append('<div class="col-md-1 mr-3 app"><img src="'+
                i.icono+'" alt="appstore" width="70" height="70">' + i.nombre 
                +'</br>'+'$'+ i.precio+ '</div>');
                /*const div=document.createElement("div")
                j++;
                id=id+j;
                div.id=id;
                document.body.appendChild(div);
                $('#'+id).append('<p>' + i.nombre + '</p>');
                $('#'+id).addClass("app");
                id="app-item"*/
            }

        },
        error: function (jqXhr, textStatus, erroMensaje) {
            console.log("Error" + jqXhr)
            console.log("Error detalle" + erroMensaje)
        }
    })
}

$('#btnLogin').click(function(){
    let nombre=$('#txtusername').val();
    let password=$('#txtpass').val();
    login(nombre,password);
})

function login(txtnombre, txtpass){
  
    $.ajax(configuraciones.hostApi + configuraciones.loginUser, {
        type: "POST",
        datatype: 'Json',
        contentType: 'application/json',
        data: JSON.stringify({
            nombre: txtnombre,
            password: txtpass
        }),
        success: function (data, status) {
            console.log(status);
            console.log(data);
            sessionStorage.setItem('token', data);
           window.location="../app.html";
        },
        error: function (jqXhr, textStatus, erroMensaje) {
            console.log("Error " + jqXhr)
            console.log("Error detalle " + erroMensaje)
            alert("No se encontro el usuario")
        }
    })
}

function guardarAplicacion(txNombre,txtPrecio,txtDescripcion,txtIcono,txtIdCategoria) {
    $.ajax(configuraciones.hostApi + configuraciones.insertarAplicacion, {

        type: "post",
        datatype: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
            nombre: txNombre,
            precio: txtPrecio,
            descripcion: txtDescripcion,
            icono: txtIcono,
            idCategoria: txtIdCategoria
        }),
        success: function (data, status) {
           alert("Se agregó correctamente");
        },
        error: function (jqXhr, textStatus, erroMensaje) {
            console.log(jqXhr)
            if (jqXhr.responseJSON.status == 400) {
                alert(jqXhr.responseJSON.mensaje);
            } else {
                alert('Ocurrio un error');
            }
        }
    })

}

function guardarApp() {

    let nombre = $('#txtNombre').val();
    let precio = $('#txtPrecio').val();
    let descripcion = $('#txtDescripcion').val();
    let icon=$('#txtIcono').val().split('\\')[2];
    let icono = `img/app-icons/` + icon;
    let idCategoria = $('#txtCategoria').val();
    console.log(nombre);
    console.log(precio);
    console.log(descripcion);
    console.log(icono);
    console.log(idCategoria);
    guardarAplicacion(nombre,precio,descripcion,icono,idCategoria);
}

function cancelar(){
    $('#txtNombre').val('');
    $('#txtPrecio').val('');
    $('#txtDescripcion').val('');
    $('#txtIcono').val('');
    $('#txtCategoria').val('');
}
consultarCategorias();