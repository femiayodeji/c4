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

// asyncrhonously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
function loadHTML(url, id) {
    $.ajax({
        type: "get",
        url: url,
        contentType: "text/plain; charset=utf-8",
        async: true,
        dataType: "text",
        success: function (res) {
    		$("#"+id).html(res);
        },
        error: function (error) {
        	if(error.status != 200){
	        	alert("Error 404")
        	}
        	console.log(error)
        }
    });
}
