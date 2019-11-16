$(document).ready(function(){
  

    setRastreo("sssssss", "")
});




function getUser(){
    //tomar los datos de local storage


}

function getRastreo(iduser){
    //extrae el campo de rastreo, si este esta activo activara el rastreo de otro modo no.
    var user = { "iduser":iduser}

    $.ajax({
        data: user,
        type: "post",
        url: "",
        success: function(response){
            if(response==1){
                setRastreo(iduser,"true")
            }else{
                setRastreo(iduser,"false")
            }
        }
    });    
}

function setRastreo(iduser, option){
    //recibe como parametros el usuario y la opcion de  activar o desactivar el rastreo
    //la opcion es:  "true"->activa  y "false"->desactiva
    var parametros = { "iduser": iduser, "option":option }

    $.ajax({
        data: parametros,
        type: "POST",
        url: "http://scangoo.com/centinela/test.php",
        crossDomain: true,
        success: function(response){
            console.log(response)
        }
    });

}


function sendUbication(lat, long){

    var parametros = { "lat" : lat, "long": long}

    $.ajax({
        data: parametros,
        type: "post",
        url: "",
        success: function(response){

        }

    });

}
