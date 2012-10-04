(function($){
	$.fn.jqImageZoomer = function(){
		$("body").append("<div id='blackoverlay'></div><div id='whitecanvas'></div>");
		$("#blackoverlay").css({
			position:'fixed',
			top:0,
			left:0,
			height:'100%',
			width:'100%',
			background:'black',
			opacity:0.6,
			filter:'alpha(opacity = 60)'
		});
		
		$("#whitecanvas").css({
			position:'fixed',
			top:'10%',
			left:'20%',
			height:'80%',
			width:'60%',
			background:'white'
		});
		
		return this.each(function(){
			var containerRef = $(this);
			containerRef
			
			
		});
		
	};
	
	
})(jQuery);