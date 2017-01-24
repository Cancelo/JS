document.addEventListener('DOMContentLoaded', function() {
	init.startProcess();
}, false);

var init = {
	startProcess: function() {
		console.log("Process initiation");
		mainLoop.start();
	}
};