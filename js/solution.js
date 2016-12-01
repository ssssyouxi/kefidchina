window.onload=function(){
		var w=$(".img-responsive").width();
		$(".solution_flo").width(w);
		var pl=($(".solution_div").width()-$(".img-responsive").width())*0.5;
		$(".img-responsive").css('padding-left', pl);
		$(".solution_flo").css('margin-left',pl);
		var p_lh=$(".solution_flo").height();
		if(p_lh==0){
			p_lh=66;
		}
		$(".solution_flo p").css('line-height',p_lh+"px");
}