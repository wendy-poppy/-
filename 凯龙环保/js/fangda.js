window.onload=function () { 
	var oDiv=document.getElementById('div1'); 
	// var oDiv = document.querySelector('#div1');
	var oShow=oDiv.getElementsByTagName('div')[0];
	// var oShow = document.querySelector("#div1 div") 
	var oSpan=oDiv.getElementsByTagName('span')[0]; 
	// var oSpan = document.querySelector("#div1 span");
	var oImg=document.getElementById('img1');
	// var oImg = document.querySelector("#img1");
	// parentNode获得父节点
	oShow.onmouseover=function() { 
		oSpan.style.display='block'; 
		oImg.parentNode.style.display='block'; 
	}; 
	oShow.onmouseout=function() { 
		oSpan.style.display='none'; 
		oImg.parentNode.style.display='none'; 
	}; 
	// 放大器移动
	oShow.onmousemove=function(ev) { 
		// 浏览器兼容
		var oEvent=ev||event; 
		// 获得鼠标的位置
		var x=oEvent.offsetX-oSpan.offsetWidth/2; 
		var y=oEvent.offsetY-oSpan.offsetHeight/2; 

		if(x<0) { 
			x=0; 
		} else if(x>oShow.offsetWidth-oSpan.offsetWidth) { 
			x=oShow.offsetWidth-oSpan.offsetWidth; 
		} if(y<0) { 
			y=0; 
		} else if(y>oShow.offsetHeight-oSpan.offsetHeight) { 
			y=oShow.offsetHeight-oSpan.offsetHeight;
		} 
		// 给选中框定位
		oSpan.style.left=x+'px'; 
		oSpan.style.top=y+'px'; 
		// 给放大器定位
		var percentX=x/(oShow.offsetWidth-oSpan.offsetWidth); 
		var percentY=y/(oShow.offsetHeight-oSpan.offsetHeight); 
		var oImgparent=oImg.parentNode; 
		oImg.style.left=-percentX*(oImg.offsetWidth-oImgparent.offsetWidth)+'px'; 
		oImg.style.top=-percentY*(oImg.offsetHeight-oImgparent.offsetHeight)+'px'; 
		// console.log(x);
		// console.log(y);
	}
}