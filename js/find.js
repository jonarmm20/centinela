
$(document).ready(function(){
	
	var enviar = "";

	$.get('config/config.txt', function(data) {
		actuali()
        var content = JSON.parse(data);
        enviar = content[0].rastreo
        getUbic(enviar, options)
    })

    

	$("#activar").click(function(){
		if (enviar == 0) {
			enviar = 1
			getUbic(enviar, options)
	
		}else{
			enviar = 0
			getUbic(enviar, options)
		}
	});



	
	var options = {
	  enableHighAccuracy: true,
	  timeout: 5000,
	  maximumAge: 0
	};
	getUbic(enviar, options)

	 
})


function infoRastreo(){
	$.ajax()
}


function actuali(){
	$.ajax({
		url: "config/api/api.user.php",
		success: function(){
			console.log("leion")
		}
	});
}



function getJSON(){
	var nombre = "";
	$.get('config/config.txt', function(data) {
        var content = JSON.parse(data);
        console.log(content);
        // alert(content[0].squadName)
        nombre = content[0].squadName
    })
    return nombre
}



function success(pos) {
  var crd = pos.coords;

  $("#cord").html(`Latitude : ${crd.latitude}`+`Longitude: ${crd.longitude}`)

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function getUbic(estado, options){
	if (estado == 1) {		
		navigator.geolocation.getCurrentPosition(success, error, options);
	}else{
		$("#cord").html("Activar Ubicacion");
	}	
}

// function leerTXT(){
// 	$.ajax({
//         	url : "config/config.txt",
// 			dataType: "text",
// 			success : function (data){
//             	 // $(".text").html("<pre>"+data+"</pre>");
//             	var content = JSON.parse(data);
//         		console.log(content);
//         		alert(content[homeTown])
//             	// return data;
// 			}
// 	});
   
// }

