$(function (){
	var jMask = $(".work-display .mask");
	/*jMask.css("left",-jMask.width()).css("top",-jMask.height());
	$(window).resize(function() {
		jMask.css("left",-jMask.width()).css("top",-jMask.height());
	});*/
	
	$(".service-range .container div").hover(
		function(){
			$(this).children("p").css("color","#333");
		},
		function(){
			$(this).children("p").css("color","#9F9F9F");
		}
	);
	//处理作品展示的特效
	$(".work-display .container li").on("mouseenter mouseleave",function(e) {
	
		var jthis=$(this);
		var w = jthis.width();
		var h = jthis.height();
		var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);
		var y=(e.pageY-this.offsetTop-(h/2))*(h>w?(w/h):1);
		var dirNum=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
		var aPos=[{left:0,top:-jMask.height()},{left:jMask.width(),top:0},{left:0,top:jMask.height()},{left:-jMask.width(),top:0}];
		if(e.type == 'mouseenter'){
			jthis.find(".mask").css(aPos[dirNum]).stop(true,true).animate({left:0,top:0},200);
		}else{
			jthis.find(".mask").stop(true,true).animate(aPos[dirNum],200,function (){
				jthis.find(".mask").css("left",-10000).css("top",-10000);
			});
			
		}
		
	});
	//给导航栏添加点击事件
	$("header .nav-custom .nav a").click(function (){
		$(this).addClass("active");
		$("html,body").animate({scrollTop: $("#"+$(this).attr("data-target")).offset().top}, 500);
	});
});
//服务范围移入特效
