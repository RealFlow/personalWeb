window.DG = window.DG || {};
var DG = window.DG;


DG.About = {

	base: null,

	initialize: function(base){

		this.base = base;
		this.initUI();
	},

	initUI: function(){

		this.setNavigation();
		this.setHeader();
		this.setContent();
		this.base.setSocial();
		this.base.setFooter();
	},

	initContentContainer: function(){

		$('#dg_content').empty();

		$("#dg_content").addClass("container");

		$("#dg_content").append('<div id="dg_contentplatforms"></div>');
		$("#dg_content").append('<div id="dg_contentdescription"></div>');
		$("#dg_content").append('<div id="dg_contentgallery"></div>');
		$("#dg_content").append('<div id="dg_contentextra"></div>');
	},

	getURLFilePath: function(){
		var urlArray = location.href.split('id=');
		return urlArray.pop()
	},

	setNavigation: function(){

		//clean previous
		$('#dg_navigation').empty();

		var html = 	'<div class="navbar navbar-default navbar-fixed-top" role="navigation">'+
					'<div class="container">'+
					'<div class="navbar-header">'+
					'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
					'<span class="sr-only">Toggle navigation</span>'+
					'<span class="icon-bar"></span>'+
					'<span class="icon-bar"></span>'+
					'<span class="icon-bar"></span>'+
					'</button>'+
					'</div>'+
					'<div class="navbar-collapse collapse">'+
					'<ul class="nav navbar-nav navbar-right">'+
					'<li><a href="index.html">Home</a></li>'+
					'<li class="active"><a href="about.html">About</a></li>'+
					'<li><a href="index.html#works">Works</a></li>'+
					'</ul>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_navigation').append(html);
	},

	setHeader: function(){

		$('#dg_header').empty();

		var html = 	'<div id="aboutwrap">'+
					'<div class="container">'+
					'<div class="row">'+
					'<div class="col-lg-6 col-lg-offset-3">'+
					'</div>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_header').append(html);
	},

	setContent: function(){

		$('#dg_content').empty();

		var html = 	'<div class="container">'+
					'<div class="row centered mt mb">'+
					'<div class="col-lg-8 col-lg-offset-2">'+
					'<h3 class="text-highlighted">About me</h3>'+
					'<p align="justify">It happens before its noticed. It started as a game, the naive challenge to transform an abstract idea in your mind into the most beautiful, optimized and practical creation you can ever imagine. After facing the uncertainties, learning from the errors and celebrating the success, one day I realized that the imperceptible venom of passion for development and management was already deep inside of me. Too late to ignore it, its time to enjoy it.</p>'+
					'<p align="justify">I have been enjoying creating software to this day. I feel lucky to have had the chance to program in many different languages (ObjC, Swift, JavaScript, Java...) and platforms (iOS, macOS, Android, Web Frontend and Backend). Although I deeply enjoy what I do, I still have a voracious need to experiment new challenges. On the one hand the amount of changes in this industry is fascinating and impressing, on the other hand that also requires I, as developer, need to be in a continuous learning process. Continuous challenges where to apply the best agile methodology, a suitable continuous integration process, or the best design pattern to better scale and maintain an app.</p>'+
					'<p align="justify">The acquired experience helps me daily to understand the software\'s big picture, and at the same time it makes me realize the amount of new fields available to be discovered. Consequently, having the aim to progress personally and professionally, I try that all aspects of my life gravitate towards concepts as innovation, optimization and practicality. For this reason, my interests have range from native iOS & MacOS applications, to 3D GIS Web clients; from creative business industry to automotive or aerospatial ones.</p>'+
					'<p align="justify">There will always be a place where to create an innovative app, where to apply the latest methodology, where to enjoy your creations and learn from the others. Wherever that place is, I want to be there.</p>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_content').append(html);
	}
};

