
DG.Work.GVSIGMINI = {

	workBase: null,

	initialize: function(workBase){
		this.workBase = workBase;
	},

	setHeader: function(){

		$('#dg_header').empty();

		var html = 	'<div id="workwrap" class="workwrap-gvsigmini">'+
					'<div class="container">'+
					'<div class="row">'+
					'<div class="col-lg-6 col-lg-offset-3">'+
					'<h1>GV SIG MINI</h1>'+
					'<h4>(TO BE COMPLETED)</h4>'+
					'<h4>ROLE: LEAD DEVELOPER</h4>'+
					'</div>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_header').append(html);
	},

	setContent: function(){
		
		this.workBase.initContentContainer();

		this.initContentPlatforms()
		// this.initContentDescription();
		this.initContentGallery();
		// this.initContentExtra();

	},

	initContentPlatforms:function(){

		$('#dg_contentplatforms').empty();

		var html = 	'<div class="row centered mt">'+
					'<img class="centered platform" width="60px" src="images/portfolio_platform/work_android.png">'+
					'</div>';

		$('#dg_contentplatforms').append(html);
	},

	initContentDescription: function(){
		
		$('#dg_contentdescription').empty();

		var html = 	'<div class="row centered mb">'+
					'<div class="col-lg-8 col-lg-offset-2">'+
					'<h3 class="text-highlighted">ABOUT THE PROJECT</h3>'+
					'<p align="justify">'+
					'Design and Development of Geospatial Building Web Application, based on WebGL standard, within a buildings energy saving framework, modelled for Valencian Community.'+
					'</p>'+
					'<p align="justify">'+
					'The project&#39;s main purpose is to research into accurate buildings&#39;s energy demand models, relying on modeling technologies, building design and a 3D analysis of the buildings&#39;s geolocation on the ground. It is possible thus to have an energy consumption estimation for each particular building and conditions, minimizing from the design stage in a passive way the amount of greenhouse gases the buildingsd will produce. Additionally it is also performed a 3D geospatial analysis to obtain the corresponding landscape impact footprint.'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> 3D Geospatial Web Application:</span> Renders a 3D Web globe along with the buildings extracted, processed and extruded of the Valencian community cadastre. Additionally architectural FIDE building files are parsed, processed and rendered in order to apply the following calculus on them.'+
					'</p>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Building Visibility Web Service:</span> Calculates "how much" a bulding is seen from a given set of location taking into account the possible overlapping of both the terrain and surrounding buildings.'+
					'</p>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Building Solar Incidence Web Service:</span> Calculates the solar incidence in the geometry of a given building, taking into account the possible overlapping of both the terrain and surrounding buildings, for a given simulation period and ephemerides.'+
					'</p>'+
					'</div>'+
					'</div>';

  		$('#dg_contentdescription').append(html);

	},

	initContentGallery: function() {

		$('#dg_contentgallery').empty();

		var html =  '<div class="row centered mb">'+
					'<div class="col-lg-10 col-lg-offset-1">'+
					'<h4>GALLERY</h4>'+
					'<img class="img-responsive img-thumbnail" src="images/portfolio_content/work_gvsigmini_1.png">'+
					'<br>'+
					''+
					'<div id="gallery-title-1" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Android Application</h4>'+
					'</div>'+
					'</div>'+
					''+
					'<ul id="light-gallery" class="gallery centered">'+
					'<li data-src="images/portfolio_content/work_gvsigmini_1.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_gvsigmini_1_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_gvsigmini_2.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_gvsigmini_2_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_gvsigmini_3.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_gvsigmini_3_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_gvsigmini_4.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_gvsigmini_4_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_gvsigmini_5.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_gvsigmini_5_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_gvsigmini_6.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_gvsigmini_6_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_gvsigmini_7.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_gvsigmini_7_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_gvsigmini_8.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_gvsigmini_8_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'</ul>'+
					'</div>'+
					'</div>';

		$('#dg_contentgallery').append(html);
	},


	initContentExtra: function(){
		
		$('#dg_contentextra').empty();

		var html = 	'<div class="row centered">'+
					'<div class="col-lg-6 col-lg-offset-3">'+
					'<h4>SLIDES</h4>'+
					'<iframe src="//www.slideshare.net/slideshow/embed_code/key/AShj8hsTSp61Y9" width="800" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen Without related content> </iframe>'+
					'</div>'+
					'</div>';

  		$('#dg_contentextra').append(html);

	}

};

