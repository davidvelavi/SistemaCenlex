
	var $menu = $("#menu-registro");
	var $iconos = $("#menu-registro ul");
	function mostrarMenu(){
		

		
		$iconos.animate({width: 'toggle'},'fast');

		//console.log("te lo muestro");
	};
	


	$menu.hover(mostrarMenu);

