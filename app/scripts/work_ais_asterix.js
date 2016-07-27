
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
					'The AIS is a system used by Vessel Traffic Services (VTS) for identifying, locating and getting ship navigation parameters such as speed, orientation, course, dimensions and type of ship. This system provides a unique way to track and monitor in realtime a huge amount of vessel movements at a time typically on a map.'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'In addition to the AIS system, port authorities rely also on their own active radar systems. Thus the radars complement the AIS information coming from vessels, with radar information acquired by the own port radar reception systems. There are many different types of radars however the ones present in ports correspond to those specifically designed to meet the requirements of VTS systems, using mostly bands X and S to provide data with the speed, distance and bearing of all vessels in range. This system is the  essential active safety element not only to monitor and regulate all the vessels maneuvers, but also to obtain early warning of any kind of risk of collision.'+
					'</p>'+
					'<p align="justify">'+
					'The radar data provided by our radar systems follows ASTERIX format, (All Purpose Structured Eurocontrol SuRveillance Information Exchange), and allows the transmission of harmonized information between surveillance and automation systems. Merging AIS and radar data sources provides a unique extra valued information system used in state-of-the-art installations.'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'This project implemented the signal reception, signal processing and posterior data processing to easy the visualization of real time port scenes and the decision taking by using the data on an event monitoring engine.'+
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
					'<h4 style="color: white">Radar vessel tracking</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-3" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Radar vessel tracking</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-4" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Radar vessel tracking</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-5" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Radar vessel tracking</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-6" style="display:none">'+
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
					'<li data-src="images/portfolio_content/work_ais_asterix_3.jpg"'+
					'data-sub-html="#gallery-title-3">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_ais_asterix_3_thumb.jpg"/>'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_ais_asterix_4.jpg"'+
					'data-sub-html="#gallery-title-4">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_ais_asterix_4_thumb.jpg"/>'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_ais_asterix_5.jpg"'+
					'data-sub-html="#gallery-title-5">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_ais_asterix_5_thumb.jpg"/>'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_ais_asterix_6.jpg"'+
					'data-sub-html="#gallery-title-6">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_ais_asterix_6_thumb.jpg"/>'+
					'</a>'+
					'</li>'+
					'</ul>'+
					'</div>'+
					'</div>';

		$('#dg_contentgallery').append(html);
	}
};

