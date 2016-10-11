window.onload=function(){
	var leftWrap = document.getElementById('leftWrap');
var mask = document.getElementById('mask');
var rightWrap = document.getElementById('rightWrap');
var bigImg = rightWrap.firstElementChild;


leftWrap.onmousemove = function(e){
	var event = e || window.event;
	//蒙版和大图出现
	rightWrap.style.display = 'block';
	mask.style.display = 'block';
	var x = event.clientX;
	var y = event.clientY;
	//确定蒙版随着鼠标移动时，鼠标所在区域
	var minX = leftWrap.offsetLeft + mask.offsetWidth/2;
	var maxX = leftWrap.offsetLeft + leftWrap.offsetWidth - mask.offsetWidth/2;
	var minY = leftWrap.offsetTop + mask.offsetHeight/2;
	var maxY = leftWrap.offsetTop + leftWrap.offsetHeight - mask.offsetHeight/2;
	//确定蒙版随着鼠标移动，在移动过程中，鼠标处于蒙版中心
	if(x < minX){
		x = minX;
	}else if(x > maxX){
		x = maxX;
	}
	if(y < minY){
		y = minY;
	}else if(y > maxY){
		y = maxY;
	}
	mask.style.left = x - minX + 'px';
	mask.style.top = y - minY + 'px';
	
	//获取蒙版所在位置占leftWrap区域的比例，对应大图在rightWrap的区域
	var percentX = parseInt(mask.style.left)/leftWrap.offsetWidth;
	var percentY = parseInt(mask.style.top)/leftWrap.offsetHeight;
	//显示大图区域
	//方法1 给大图也添加相对于rightWrap相对定位
	bigImg.style.position = 'absolute';
	bigImg.style.left = -bigImg.offsetWidth*percentX + 'px';
	bigImg.style.top = -bigImg.offsetHeight*percentY + 'px';
	//方法2 给rightWrap添加scrollTop和scrollLeft属性
	// rightWrap.scrollLeft = bigImg.offsetWidth*percentX;
	// rightWrap.scrollTop = bigImg.offsetHeight*percentY;

}
leftWrap.onmouseout = function(){
	rightWrap.style.display = 'none';
	mask.style.display = 'none';
}
}