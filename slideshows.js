//****************************************轮播图*******************************//
var slideshows = new Array("url(image/timer/image01.jpg)","url(image/timer/image02.jpg)","url(image/timer/image03.jpg)");
/*获得轮播小按钮*/

var count = 0;
var checks = document.getElementsByName("check");
/*自动切换*/
window.onload = function(){
	setInterval("autoSwitch()",5000);
}
/*手动小圆点切换*/
function switchBg(check){
	for (var i = checks.length - 1; i >= 0; i--) {
		checks[i].src = "image/btn/switch_down.png"
	}
	check.src = "image/btn/switch.png";
	if (check.id == 1) {
		document.getElementById("show_photo").style.background = slideshows[0];
		count = 0;
	}else if (check.id == 2) {
		document.getElementById("show_photo").style.background = slideshows[1];
		count = 1;
	}else{
		document.getElementById("show_photo").style.background = slideshows[2];
		count = 2;
	}
}
function autoSwitch(){
	count++;
	if (count > 2) {
		count = 0;
	}
	document.getElementById("show_photo").style.background = slideshows[count];
	for (var i = checks.length - 1; i >= 0; i--) {
		checks[i].src = "image/btn/switch_down.png";
	}
	checks[count].src = "image/btn/switch.png";
}
