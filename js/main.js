function main() {
	var mas = $(".slide");
	var active = 0;
	var width = $('.gallery').width();
	mas.width(width);
	$('#img').width(width*mas.length);
	function leftSoft () {
		for(var a = 0; a < mas.length; a++) {
			if (a == active) {
				$('#img').animate({
					'left': -width * active
				}, 500)
			}
		}
	}
	
	function rightSoft () {
		for(var a = 0; a < mas.length; a++) {
			if (a == active) {
				$('#img').animate({
					'left': -width * active
				}, 500)
			}
		}
	}
	
	rightSoft();
	
	$("#up").click(function() {
		if(active == mas.length - 1) {
			active = - 1;
		}
		active++;
		leftSoft();
	} )
	
	$('#down').click(function() {
		if(active == 0) {
			active = mas.length;
		}
		active--;
		rightSoft();
	} )
	
	$("li").click(function () {
		var currentLi = $(this);
		var currentIndex = $('li').index(currentLi);
		active = currentIndex;
		rightSoft();
	});
}
$(main);
document.addEventListener("DOMContentLoaded", main);