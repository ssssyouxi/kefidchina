$(function  () {
			var obj=$(window).width();
			if(obj < 983){
			$(".contact_fl").addClass("clearfix");
		}else{
			$(".contact_fl").removeClass('clearfix');
		};
	$(window).resize(function(){
		var obj=$(window).width();
		if(obj < 983){
			$(".contact_fl").addClass("clearfix");
		}else{
			$(".contact_fl").removeClass('clearfix');
		};
	})
	
			

	$("#contact_che").change(function() {
		if ($("#contact_inp").attr("disabled")) {
			$("#contact_inp").removeAttr('disabled');
		}else{
			$("#contact_inp").attr("disabled",true);
		}
	});
})
function test(){
		document.msgForm.reset(); 
	}