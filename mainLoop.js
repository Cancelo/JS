//ls = 1000ms

var mainLoop = {
	idEjecucion: null,
	ultimoRegistro: 0,
	aps: 0,
	fps: 0,
	start: function(registroTemporal) {
		mainLoop.idEjecucion = window.requestAnimationFrame(mainLoop.start);

		mainLoop.refresh(registroTemporal);
		mainLoop.draw();

		if(registroTemporal - mainLoop.ultimoRegistro > 999) {
			mainLoop.ultimoRegistro = registroTemporal;
			console.log("APS: " + mainLoop.aps + " | FPS: " + mainLoop.fps);
			mainLoop.aps = 0;
			mainLoop.fps = 0;
		}
	},
	stop: function() {

	},
	refresh: function(registroTemporal) {
		mainLoop.aps++;
	},
	draw: function(registroTemporal) {
		mainLoop.fps++;
	}
}