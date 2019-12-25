let content = $("#content")
$(function(){
	let loginBtn = $("#login");
	let fullScreen = $("#fullScreen");
	let notFullScreen = $("#notFullScreen");

	loginBtn.click(function(e){
		signinForm();
	});

	fullScreen.click(function(e){
		GoInFullscreen(document.querySelector("#content"))
	});

	notFullScreen.click(function(e){
		GoOutFullscreen(document.querySelector("#content"))
	});
})

function signinForm(){
	loadHTML("login.html","content");
}
function questionForm(){
	loadHTML("quform.html","content");
}
