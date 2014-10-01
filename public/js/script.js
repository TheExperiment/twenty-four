$( document ).ready(function() {
	/*
	var s = Snap("#svg");
	var eight;
	var innerX;
	
	Snap.load("svg/number.svg", function (f) {
		
		eight = f.select('#SHAPE_8');
		eight.attr({
			opacity: 0
		});
		innerX = f.select('#SHAPE_X');
		innerX.attr({
			opacity: 0
		});
	    s.append(f);
	    
	    addMe();
	});
	
	function addMe() {
		Snap.animate(0, 1, function (val) {
		    eight.attr({
				opacity: val
			});
		}, 1000);
	}
	*/
	
	var im = new IntroModule();
	im.init('#numbers-svg-container');
	
});