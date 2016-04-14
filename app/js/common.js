$(function(){
	
    checkSize();
    $(window).resize(checkSize);
	
});

function checkSize(){
	if ($(".main__label").css("display") == "none" ){
		$(".main__input:eq(0)").attr("placeholder", 'email');
		$(".main__input:eq(1)").attr("placeholder", 'password');
	} else {
		$(".main__input:eq(0)").attr("placeholder", '');
		$(".main__input:eq(1)").attr("placeholder", '');
	}
}