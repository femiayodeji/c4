function GoInFullscreen(element){
	if(element.requestFullscreen){
		element.requestFullscreen();
	}
	else if(element.mozRequestFullScreen){
		element.mozRequestFullScreen();
	}
	else if(element.webkitRequestFullscreen){
		element.webkitRequestFullscreen();
	}
	else if(element.msRequestFullscreen){
		element.msRequestFullscreen();
	}
}

function GoOutFullscreen(element){
	if(element.exitFullscreen){
		element.exitFullscreen();
	}
	else if(element.mozCancelFullScreen){
		element.mozCancelFullScreen();
	}
	else if(element.webkitExitFullscreen){
		element.webkitExitFullscreen();
	}
	else if(element.msExitFullscreen){
		element.msExitFullscreen();
	}
}