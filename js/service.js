var datos;
var API_URL = "https://dianamex.github.io/zaguateWorld/servicios.json"; //URL del API

function callService() {
    $.ajax({
        type: "GET", //el metodo que vamos a llamar
        url: API_URL,
        dataType: "json",
        success: onSuccess, //la funcion que se debe ejecutar
        error: onError
    });
}

function onSuccess(data) { //por defecto recibe un objeto data con la informacion

    datos = data;//se vuelven a asignar los valores
    cargarServicios();

}

function onError(jqXHR, textStatus, errorThrown) { 
    alert("MENSAJE DE ERROR: " + errorThrown);
}

function cargarServicios() {
    let contenedorPrincipal = document.getElementById("contenedor-cuadros");

    contenedorPrincipal.innerHTML = "";

    const servicios = datos.servicios;

    let seccion = "";

    for (let i = 0; i < servicios.length; i++) {
        
        seccion +=  `
        <div class="service_box" id="service1">
            <h2 class="ceo_sub">${servicios[i].tipo}</h2>
            <P class="services_text">${servicios[i].descripcion}</P>
        </div>
      `;
        
    }

    //se debe de agregar al contenedor
    contenedorPrincipal.innerHTML = seccion;


}


$(document).ready(function () {
    callService();
});




