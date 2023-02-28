<?php $age = (new DateTime('now'))->diff(new DateTime('1988-02-14'))->y ?>
<!DOCTYPE html>
<html lang="de">
<head>
    <title>Martin Neundorfer | Neunerlei.eu</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="dist/css/bundle.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="dist/bundle.js"></script>
    <link rel="canonical" href="https://www.neunerlei.eu" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
	
	<meta name="description" content="Guten Tag! Ich heiße Martin, bin <?= $age ?> Jahre alt und mache Sachen.">
	
	<meta property="og:title" content="Martin Neundorfer">
	<meta property="og:site_name" content="Neunerlei.eu">
	<meta property="og:url" content="https://neunerlei.eu">
	<meta property="og:description" content="Guten Tag! Ich heiße Martin, bin <?= $age ?> Jahre alt und mache Sachen.">
	<meta property="og:type" content="profile">
	<meta property="og:image" content="https://neunerlei.eu/images/photo-martin-neundorfer-neunerlei-mobile-20200406.jpg">
	
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content="neunerlei.eu">
	<meta property="twitter:url" content="https://www.neunerlei.eu/">
	<meta name="twitter:title" content="Martin Neundorfer">
	<meta name="twitter:description" content="Guten Tag! Ich heiße Martin, bin <?= $age ?> Jahre und mache Sachen.">
	<meta name="twitter:image" content="https://neunerlei.eu/images/photo-martin-neundorfer-neunerlei-mobile-20200406.jpg">

</head>
<body>
	<div class="container">
		<div class="grid">
			<div class="grid__item grid__item--portrait">
				<picture class="portrait">
					<source srcset="/images/photo-martin-neundorfer-neunerlei-mobile-20200406.jpg" media="print, (max-width: 800px)">
					<source srcset="/images/photo-martin-neundorfer-neunerlei-20200406.jpg" media="only screen and (min-width: 800px)">
					<img src="/images/photo-martin-neundorfer-neunerlei-20200406.jpg" alt="Portrait von Martin Neundorfer">
				</picture>
				<picture class="portrait__logo">
					<source srcset="/images/martin-neundorfer-logo-mobile-20160801.png" media="print, (max-width: 800px)">
					<source srcset="/images/martin-neundorfer-logo-desktop-20160801.png" media="screen and (min-width: 800px)">
					<img src="/images/martin-neundorfer-logo-desktop-20160801.png" alt="Martin Neundorfer">
				</picture>
			</div>
			<div class="grid__item grid__item--halfLeft grid__item--defaultHeight">
				<div class="box box--colorC">
					<h3>Wer ich bin?</h3>
					<p>
						Guten Tag! Ich heiße Martin, bin <?= $age ?> Jahre alt und mache Sachen.
					</p>
					<p>
						Als Kind wollte ich immer Erfinder werden; heute bin ich Web-Entwickler und <a href="https://github.com/neunerlei" target="_blank" rel="noopener">erfinde Dinge</a>.
					</p>
					<p>
						Ist doch nah dran, am Kindheitstraum <span class="cool"></span>
					</p>
				</div>
			</div>
			<div class="grid__item grid__item--halfRight grid__item--defaultHeight">
				<div class="box box--colorB">
					<h3>Kontakt</h3>
					<p>
						<span class="subheadline">Brieftaube:</span><br>
						Robert-Koch-Straße 9<br>
						67823 Obermoschel
					</p>
					<p>
						<span class="subheadline">Digitale Brieftaube:</span><br>
						<span id="mail">hallo#at#neunerlei#dot#eu</span>
					</p>
					<p>
						<span class="subheadline">Fernsprechgerät:</span><br>
						<span id="phone">+49#172#/#6#50#97#40</span>
					</p>
				</div>
			</div>
			<div class="grid__item grid__item--defaultHeight grid__item--halfLeft">
				<div class="box box--colorA">
					<h3>Internetz</h3>
					<p class="narrow">Die Weiten des Netzes sind, wie es so schön heißt, unergründlich.
						Damit wir uns trotzdem finden, wie wäre es mit ein paar Links?</p>
					<ul class="socialLinks">
						<li class="socialLinks__item">
							<a href="https://www.xing.com/profile/Martin_Neundorfer" rel="noopener" target="_blank" class="fa fa-xing" title="Xing"></a>
						</li>
						<li class="socialLinks__item">
							<a href="https://github.com/neunerlei" rel="noopener" target="_blank" class="fa fa-github" title="Github"></a>
						</li>
						<li class="socialLinks__item">
							<a href="https://vimeo.com/neunerlei" rel="noopener" target="_blank" class="fa fa-vimeo" title="Vimeo"></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="grid__item grid__item--halfRight grid__item--defaultHeight">
				<div class="box box--colorD">
					<h3>Was ich kann?</h3>
					<p>
						Was man halt so können muss (keine bestimmte Ordnung): PHP, Javascript, Typescript, Vue.js, Node, TYPO3, CakePHP, CSS, SASS, OOP, Docker(Compose), Webpack, AWS, API's, GraphQL, Linux(Ubuntu) &hellip;
					</p>
				</div>
			</div>
		</div>
	</div>
</body>
</html>