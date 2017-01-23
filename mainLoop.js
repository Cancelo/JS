var mainLoop = {
	idEjecucion: null,
	ultimoRegistro: 0,
	aps: 0,
	fps: 0,
	start: function(registroTemporal) {
		mainLoop.idEjecucion = window.requestAnimationFrame(mainLoop.iterar);

		mainLoop.refresh();
	},
	stop: function() {

	},
	refresh: function(registroTemporal) {

	},
	draw: function(registroTemporal) {

	}
}