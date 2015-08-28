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
					'<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>'+
					'<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'+
					'<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_content').append(html);
	}
};

