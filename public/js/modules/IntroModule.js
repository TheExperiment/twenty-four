var IntroModule = function() {

	var _domTarget;
	var _eightRef;
	var _xRef;
	var _eightBits;
	var _xBits;
	var _index = 0;
	var _dispBitCol;
	var _introBlurLevel = 2;

	var init = function(t) {
		_domTarget = t;
		var n1 = '<div id="n1" class="intro-mod" />';
		$(_domTarget).append(n1);
		_componentStrRef1 = '#n1';
		loadAsset();

	}, loadAsset = function() {

		var s1 = Snap(_componentStrRef1);
		Snap.load("svg/number2.svg", function(fragment) {
			_eightRef = fragment.select('#SHAPE_8');
			_xRef = fragment.select('#SHAPE_X');
			
			// clone it twice to use in DOM
			s1.append(fragment);
			initAudio();
		});

	}, initAudio = function() {
		$('body').append('<div id="jp_intro" />');
		$("#jp_intro").jPlayer({
			preload : 'auto',
			loadeddata : function() {
				console.log('jPlayer loadeddata, init UI');
				initUI();
			},
			ready : function() {
				console.log('jPlayer ready');
				$(this).jPlayer("setMedia", {
					mp3 : "/mp3/24_intro.mp3"
				});
			},
			ended : introEnded,
			supplied : "mp3",
			swfPath : "/web/js/libs/bower_components/jplayer/jquery.jplayer"
		});

	}, initUI = function() {
		_eightRef.selectAll('#SHAPE_8 g').attr({
			opacity : 0,
			fill : "r()#F8F1D2-#5F3A00"
		});
		_xRef.selectAll('#SHAPE_X g').attr({
			opacity : 0,
			fill : "r()#F8F1D2-#5F3A00"
		});
		
		var n2 = $('#n1').clone();
		n2.attr({
			id : 'n2'
		});
		$(_domTarget).append(n2);
		var n3 = $('#n1').clone();
		n3.attr({
			id : 'n3'
		});
		$(_domTarget).append(n3);
		var n4 = $('#n1').clone();
		n4.attr({
			id : 'n4'
		});
		$(_domTarget).append(n4);
		
		beginIntroSequence();

	}, beginIntroSequence = function() {

		// play preloaded intro audio clip
		$("#jp_intro").jPlayer('play');

		// instantiate a TimelineLite
		var tl = new TimelineMax({
			onComplete : enterRapidfireSequence
		});

		tl.fromTo('#n1 #SHAPE_8 #bl', 1, {
			opacity : '1',
			immediateRender : false
		}, {
			opacity : '0'
		}, '+=.2');
		tl.fromTo('#n1 #SHAPE_8 #m', 1, {
			opacity : '1',
			immediateRender : false
		}, {
			opacity : '0'
		});
		tl.fromTo('#n2 #SHAPE_8 #tr', .3, {
			opacity : '1',
			immediateRender : false
		}, {
			opacity : '0'
		}, '-=.2');
		tl.fromTo('#n2 #SHAPE_8 #b', .2, {
			opacity : '1',
			immediateRender : false
		}, {
			opacity : '0'
		}), '-=.2';

	}, enterRapidfireSequence = function() {

		console.log('jPlayer enterRapidfireSequence');

		var _pieces1 = $('#n1 #SHAPE_8 g');
		var _pieces2 = $('#n2 #SHAPE_8 g');
		var _allPieces = $.merge(_pieces1, _pieces2);

		var percDarker = .6; // Adjust this
		var desiredNumberOfPiecesShown = 60; // Adjust this

		var numDarker = Math.floor(percDarker * desiredNumberOfPiecesShown);
		var animationSatisfied = false;

		var _ind = 0;
		while (!animationSatisfied) {
			var goDarker = _ind < numDarker;
			var nextOpacity = (goDarker) ? (Math.random(.2) + .3) : (1);
			var nextPiece = _allPieces[_ind % _allPieces.length];
			TweenMax.fromTo(nextPiece, Math.random(2), {
				opacity : 0
			}, {
				opacity : nextOpacity,
				delay : 3 * (_ind / desiredNumberOfPiecesShown)
			});
			_ind++;
			animationSatisfied = _ind > desiredNumberOfPiecesShown;
		}
		explodeTo24();

	}, explodeTo24 = function() {

		var counter = {
			_blurLevel : 0
		};
		TweenMax.to(counter, 2, {
			_blurLevel : 5,
			onUpdate : function() {
				applyBlur(counter._blurLevel);
				applyGlow(counter._blurLevel);
			},
			onComplete : transitionToClock,
			// ease:RoughEase.ease.config({template:Bounce.easeInOut}),
			ease : Linear.ease,
			delay : 2.5
		});

		TweenMax.to($('#numbers-svg-container'), 1, {
			scale : 1.5,
			delay : 2.5,
			ease : RoughEase.ease.config({
				template : Back.easeOut
			})
		});

		var _pieces1 = $('#n1 #SHAPE_8 #tl, #n1 #SHAPE_8 #br');
		var _pieces2 = $('#n2 #SHAPE_8 #t, #n2 #SHAPE_8 #b, #n2 #SHAPE_8 #bl');
		var _allPieces = $.merge(_pieces1, _pieces2);

		// setTimeout(TweenMax.killTweensOf, 2000, [_pieces1, _pieces2]);
		TweenMax.to(_allPieces, 2, {
			opacity : 0,
			delay : 3,
			ease : Ease.none
		});
	}, transitionToClock = function() {
		var counter = {
			_blurLevel : 5
		};
		TweenMax.to(counter, 1, {
			_blurLevel : 0,
			onUpdate : function() {
				applyBlur(counter._blurLevel);
				applyGlow(counter._blurLevel);
			},
			onComplete : function() {
				transitionClock();
			},
			ease : Linear.ease
		});
	}, applyGlow = function(_blurLevel) {
		var paper = Snap('#n1 #SHAPE_8');
		var f = paper
				.filter(Snap.filter.shadow(0, 0, _blurLevel, '#F8F1D2', 1));
		paper.attr({
			filter : f
		});
		var paper = Snap('#n2 #SHAPE_8');
		var f = paper
				.filter(Snap.filter.shadow(0, 0, _blurLevel, '#F8F1D2', 1));
		paper.attr({
			filter : f
		});
	}, applyBlur = function(_blurLevel) {

		/*
		 * Apply a blur filter to the SVG elements for the intro sequence
		 */
		var paper = Snap('#n1 #SHAPE_8');
		var f = paper.filter(Snap.filter.blur(_introBlurLevel, _blurLevel));
		paper.attr({
			filter : f
		});

		var paper = Snap('#n2 #SHAPE_8');
		var f = paper.filter(Snap.filter.blur(_introBlurLevel, _blurLevel));
		paper.attr({
			filter : f
		});
	}, introEnded = function() {
		console.log('jPlayer introEnded');
	}, transitionClock = function() {
		// Used TweenMax to scale as the CSS didnt work in Safari
		$('#numbers-svg-container').removeAttr( 'style' );
		$('#numbers-svg-container').removeClass('centered').addClass('finalPos');
	};
	return {
		init : init
	};

};
