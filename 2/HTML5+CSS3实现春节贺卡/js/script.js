
window.onload = function(){
	/*获取元素*/
	console.log("网页可见区域宽:"+document.body.clientWidth);
	console.log("网页可见区域高:"+document.body.clientHeight);
	console.log("网页正文全文宽:"+document.body.scrollWidth);
	console.log("网页正文全文高:"+document.body.scrollHeight);
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	music.onclick = function(){
	if(audio.paused)
	{
		audio.play();
		//这个方法每次停下会回到原始位置
		//this.setAttribute("class","play");
		//此方法兼容性不好
		this.style.animationPlayState = "running";
		this.style.webkitAnimationPlayState = "running";
	}
	else
	{
		audio.pause();
		//this.setAttribute("class","");
		this.style.animationPlayState = "paused";
		this.style.webkitAnimationPlayState = "paused";
	}
}

//当音乐停止的时候，旋转停止

audio.addEventListener("ended",function(event){
	music.setAttribute("class","");

},false);
//因为 click事件 有300毫秒的延迟，所以在移动端为了提高性能和体验，
//可以使用 touchstart来代替click事件。
audio.addEventListener("touchstart",function(event){
	if(audio.paused)
	{
		audio.play();
		//这个方法每次停下会回到原始位置
		//this.setAttribute("class","play");
		//此方法兼容性不好
		this.style.animationPlayState = "running";
		this.style.webkitAnimationPlayState = "running";
	}
	else
	{
		audio.pause();
		//this.setAttribute("class","");
		this.style.animationPlayState = "paused";
		this.style.webkitAnimationPlayState = "paused";
	}

},false);
/*点击屏幕  页面交替*/
page1.addEventListener("touchstart",function(event){
	page1.style.display = "none";
	page2.style.display = "block";
	page3.style.display = "block";
	/*使页面处于最下面*/
	page3.style.top = "100%";

	setTimeout(function(){
		page2.setAttribute("class","page fadeOut");
		page3.setAttribute("class","page fadeIn");
	},5500);
},false);

};