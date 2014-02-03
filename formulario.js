var $ordenadores = $(".ordenadores");
var $enviar = $("#enviar");
var $salir = $("#salir");
var $formulario = $("#registrar");


$ordenadores.on("click", function(){
	$formulario.slideDown("slow");
/*fadeIn();*/
});
$salir.on("click", function(){
	$formulario.slideUp();
});