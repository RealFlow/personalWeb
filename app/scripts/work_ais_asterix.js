
DG.Work.AisAsterix = {

	workBase: null,

	initialize: function(workBase){
		this.workBase = workBase;
	},

	setHeader: function(){

		$('#dg_header').empty();

		var html = 	'<div id="workwrap" class="workwrap-aisasterix">'+
					'<div class="container">'+
					'<div class="row">'+
					'<div class="col-lg-6 col-lg-offset-3">'+
					'<h1>AIS & ASTERIX</h1>'+
					'<h4>(Vessel Signal Processing)</h4>'+
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
		this.initContentGallery();

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
					'This project is about monitoring in real time the vessel traffic of an area. For this purpose it is necessary to receive and process the signals that ships emit, coming mainly from the Automatic Identification System (<span class="text-highlighted">AIS</span>) on board.'+
					'</p>'+
					'<p align="justify">'+
					'The AIS is a system used by Vessel Traffic Services for identifying, locating and getting ship navigation parameters such as speed, orientation, course, dimensions and type of ship. This system provides a unique way to track and monitor in realtime a huge amount of vessel movements at a time typically on a map.'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'In addition to AIS, port authorities relies also on their own radar systems to complement AIS information emitted from the vessels, with radar information acquired by the own port systems. The radar data follows <span class="text-highlighted">ASTERIX</span> format, standing for All Purpose Structured Eurocontrol SuRveillance Information Exchange, allowing the transmission of harmonized information between surveillance and automation systems.'+
					'</p>'+
					'<p align="justify">'+
					'Merging both data sources provides a unique extra value information system used in state-of-the-art installations.'+
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
					'<img class="img-responsive img-thumbnail" src="images/portfolio_content/work_ais_asterix_1.jpg">'+
					'<br>'+
					''+
					'<div id="gallery-title-1" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">AIS vessel tracking</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-2" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">RAW AIS messages example</h4>'+
					'</div>'+
					'</div>'+
					''+
					'<ul id="light-gallery" class="gallery centered">'+
					'<li data-src="images/portfolio_content/work_ais_asterix_1.jpg"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_ais_asterix_1_thumb.jpg"/>'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_ais_asterix_2.jpg"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_ais_asterix_2_thumb.jpg"/>'+
					'</a>'+
					'</li>'+
					'</ul>'+
					'</div>'+
					'</div>';

		$('#dg_contentgallery').append(html);
	}
};

