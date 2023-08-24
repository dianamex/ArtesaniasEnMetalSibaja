//Google Maps
var map, directionService, directionRenderer;
var source;
var coord = {lat: 9.9341572,lng: -84.1828134}; //coordenadas del local

function iniciarMapa() {


    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: coord
    });

    //crear la marca roja del mapa
    var mark = new google.maps.Marker({
        position: coord,
        map: map
    });

    //calcular la ruta al local
    google.maps.event.addListener(map, "click", function (event){
        this.setOptions({scrollwheel:true})
    })

    directionService = new google.maps.DirectionsService();
    directionRenderer = new google.maps.DirectionsRenderer();
    directionRenderer.setMap(map);

    infoWindow = new google.maps.InfoWindow();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            let latitud = pos.lat;
            let longitud = pos.lng;
            source = {lat: latitud, lng: longitud};
  
            infoWindow.setPosition(pos);
            infoWindow.setContent("Usted está aqui");
            infoWindow.open(map);
            map.setCenter(pos);

            calcRoute();

          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          },
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }


}

function calcRoute() { 
    let request = {
        origin: source,
        destination: coord,
        travelMode: 'DRIVING'
    }

    directionService.route(request, function(result,status){
        //mostrar la linea entre a y b
        if (status == "OK") {
            directionRenderer.setDirections(result);
        }
        else{
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
            console.log("ERROR AL CREAR RUTA");
        }
    })
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation.",
    );
    infoWindow.open(map);
}

//Formulario
function f_datos() {

    var fecha = document.getElementById("fechaNac").value;
    var edad = document.getElementById("edad");
    var fechaNacimiento  = new Date(fecha);
    var mesF = fechaNacimiento.getMonth() +1;
    var anioF = fechaNacimiento.getFullYear();
    var diaF = fechaNacimiento.getDate();
    if (isNaN(mesF)) {
        alert("No se ha definido fecha");
        return;
    }

    var fechaAct = new Date();
    var mesH = fechaAct.getMonth() + 1;
    var anioH = fechaAct.getFullYear();
    var diaH = fechaAct.getDate();
    var diasSum = diasFin(anioF, mesF);
    var mesAdicional = 0;

    if (diaF > diaH) {
        diaH = parseInt(diaH) + parseInt(diasSum);
        mesAdicional = 1;
    }

    var anioAdicional = 0;
    if (mesF > mesH) {
        mesH = parseInt(mesH) + 12;
        anioAdicional = 1;
    }

    var anios = parseInt(anioH) - (parseInt(anioF) + parseInt(anioAdicional));

    edad.value = "Edad: " + anios + " años";
}

function diasFin(anio, mes) {
    var anionAux = anio;
    if (anio < 12) {
        var mesSig = parseInt(mes) + 1;
    }else{
        var mesSig = 1;
        anionAux = anio + 1;
    }
    var fecha = anionAux+"-"+mesSig+"-01"
    MS = Date.parse(fecha);
    fechaD = new Date(MS);
    fechaD.setDate(fechaD.getDate() - 1);
    var diaH = fechaD.getDate();

    return diaH;
}

const slider = document.querySelector("#rango");
const value = document.querySelector(".slider_value");
value.textContent = slider.value;
slider.oninput = function () {
    value.textContent = this.value;
}







