window.DG = window.DG || {};
var DG = window.DG;


DG.Home = {

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
					'<li class="active"><a href="index.html">Home</a></li>'+
					'<li><a href="about.html">About</a></li>'+
					'<li><a href="#works">Works</a></li>'+
					'</ul>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_navigation').append(html);
	},

	setHeader: function(){

		$('#dg_header').empty();

		var html =  '<div id="headerwrap">'+
					'<div class="container">'+
					'<div class="row">'+
					'<div class="col-lg-6 col-lg-offset-3">'+
					'<h1>DANIEL GASTÓN</h1>'+
					'<h4>MOBILE & WEB DEVELOPER</h4>'+
					'</div>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_header').append(html);
	},

	setContent: function(){

		$('#dg_content').empty();

		var html = 	'<section id="works"></section>'+
					'<div class="container">'+
					'<div class="row centered mt mb">'+
					'<h1>My Portfolio</h1>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=1"><img src="images/portfolio_icon/work_papyrus.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=2"><img src="images/portfolio_icon/work_vipor.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=3"><img src="images/portfolio_icon/work_sostre.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=4"><img src="images/portfolio_icon/work_ais_and_asterix.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=5"><img src="images/portfolio_icon/work_avt.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=6"><img src="images/portfolio_icon/work_baas.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=7"><img src="images/portfolio_icon/work_bicicas.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=8"><img src="images/portfolio_icon/work_decasaalcole.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=9"><img src="images/portfolio_icon/work_gis3d.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=10"><img src="images/portfolio_icon/work_gvsigmini.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=11"><img src="images/portfolio_icon/work_irena.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=12"><img src="images/portfolio_icon/work_moneyjourney.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=13"><img src="images/portfolio_icon/work_seacare.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=14"><img src="images/portfolio_icon/work_semosa.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=15"><img src="images/portfolio_icon/work_variousgis.png" class="img-responsive"></a>'+
					'</div>'+
					'<div class="col-lg-4 col-md-4 col-sm-4 gallery">'+
					'<a href="work.html?id=16"><img src="images/portfolio_icon/work_woo.png" class="img-responsive"></a>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_content').append(html);
	}
};

