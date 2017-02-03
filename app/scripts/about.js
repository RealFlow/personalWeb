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
					'<h2>Daniel Gastón</h2>'+
					'<p>I am a software engineer with a MSc. in GeoSpatial Technologies. I enjoy machine learning, parallel computing, web programming, physics and chemistry, and all things data science.<p>'
					+
					'<p>I work at Apple on the data stack/back-end of a variety of famous products, but my background is filled with several other interesting computational and scientific research endeavors that are just a bit less well-known. I also maintain a few hobby coding and research projects that I work on whenever I find some spare time and energy, such as an experimental neural network code and a parallel JavaScript library for math and stats.</p>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_content').append(html);
	}
};

