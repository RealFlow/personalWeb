
DG.Work.BAAS = {

	workBase: null,

	initialize: function(workBase){
		this.workBase = workBase;
	},

	setHeader: function(){

		$('#dg_header').empty();

		var html = 	'<div id="workwrap" class="workwrap-baas">'+
					'<div class="container">'+
					'<div class="row">'+
					'<div class="col-lg-6 col-lg-offset-3">'+
					'<h1>BAAS</h1>'+
					'<h4>(Building As A Service)</h4>'+
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
		this.initContentDescription();
		// this.initContentGallery();
		// this.initContentExtra();

	},

	initContentPlatforms:function(){

		$('#dg_contentplatforms').empty();

		var html = 	'<div class="row centered mt">'+
					'<img class="centered platform" width="60px" src="images/portfolio_platform/work_web.png">'+
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
					'The work consists in a 3D Web Visualization for Real-Time Maintenance of Smart Buildings, divided in:'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Client side:</span> Web globe based on WebGL standard, where buildings, floors, rooms and sensors are geolocated and rendered. The solution provides free scene navigation along with semantic navigation where the user gets translated from building to building, to a specific floor, room or even sensor by just clicking the desired element in the information panel. The information panel allows not only to check real time status of a building and its sensors, but also monitor certain parts of it, receive notification and alerts, log modifications and control each particular sensor individually if desired.'+
					'</p>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Server side:</span> Web Services providing building geometries, updated sensor data and control gateways.'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-book" aria-hidden="true"></span><a href="http://ercim-news.ercim.eu/en101/special/3d-web-visualization-for-real-time-maintenance-of-smart-buildings" target="_blank"> Ercim News 101 - 3D Web Visualization for Real-Time Maintenance of Smart Buildings</a> '+
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
					'<img class="img-responsive img-thumbnail" src="images/portfolio_content/work_sostre_1.png">'+
					'<br>'+
					''+
					'<div id="gallery-title-1" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Web Application</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-2" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Advanced Building Visibility Processing</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-3" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Advanced Solar Incidence Processing</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-4" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Cadaster Geo-Data</h4>'+
					'</div>'+
					'</div>'+
					''+
					'<ul id="light-gallery" class="gallery centered">'+
					'<li data-src="images/portfolio_content/work_sostre_1.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_sostre_1_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_sostre_2.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_sostre_2_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_sostre_3.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_sostre_3_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_sostre_4.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_sostre_4_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_sostre_5.jpg"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_sostre_5_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_sostre_6.png"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_sostre_6_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_sostre_7.png"'+
					'data-sub-html="#gallery-title-3">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_sostre_7_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_sostre_8.png"'+
					'data-sub-html="#gallery-title-4">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_sostre_8_thumb.png" />'+
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

