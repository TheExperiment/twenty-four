<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
	<!--<![endif]-->
	<head>
		<meta charset="UTF-8">
		<link rel="shortcut icon" href="{% static 'img/favicon.ico' %}" />
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" /	>
		<meta description="Take control of your time."/>
		<meta property="og:site_name" content="24 pomodairo"/>
		<meta property="og:url" content="http://www.24pomodairo.com"/>
		<meta property="og:image" content="http://www.24pomodairo.com/img/ogimg.jpg"/>
		<title>24pomodairo</title>
		<link rel="stylesheet" type="text/css" href="css/style.css"/>
		<link rel="stylesheet" type="text/css" href="css/MyFontsWebfontsKit.css">
	</head>
	<body>
		<!-- Use this one when live --
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script>
			window.jQuery || document.write('<script src="js/libs/jquery-1.11.1.min.js"><\/script>');
		</script>
		-->
		<!-- Swap with hosted one later -->
			<script src="js/libs/jquery-1.11.1.min.js"></script>
		<!-- Don't forget -->
		<script src="js/libs/jquery.cookie.js"></script>
		<script src="js/libs/bower_components/jplayer/jquery.jplayer/jquery.jplayer.min.js"></script>
		<script src="js/libs/sn/snap.svg-min.js"></script>
		<script src="js/libs/gs/TweenMax.min.js"></script>
		<script src="js/libs/gs/TimelineMax.min.js"></script>
		<script src="js/modules/IntroModule.js"></script>
		<script src="js/utils.js"></script>
		<script src="js/script.js"></script>
		<script src="js/vo/TimerEvent.js"></script>
		<!--
		<script>
			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] ||
				function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o), m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

			ga('create', 'UA-XXXXXXX-XX');
			ga('require', 'displayfeatures');
			ga('send', 'pageview');
		</script>
		
		-->
	<div class="border">
		<div class="innerBorder"></div>
	</div>
	<div id="numbers-svg-container" class="numbers-svg centered"></div>
	</body>
</html>
