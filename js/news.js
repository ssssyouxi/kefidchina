$(function(){
		var obj=$(window).width();
			if(obj < 1000){
			$(".news_title").removeClass("float-right");
			$(".news_img").addClass("img-responsive");
		}else{
			$(".news_title").addClass('float-right');
			$(".news_img").removeClass("img-responsive")
		};
	$(window).resize(function(){
		var obj=$(window).width();
		if(obj < 1000){
			$(".news_title").removeClass("float-right");
			$(".news_img").addClass("img-responsive");
		}else{
			$(".news_title").addClass('float-right');
			$(".news_img").removeClass("img-responsive")
		};
	})
})