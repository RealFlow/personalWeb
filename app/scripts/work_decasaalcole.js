
DG.Work.DECASAALCOLE = {

	workBase: null,

	initialize: function(workBase){
		this.workBase = workBase;
	},

	setHeader: function(){

		$('#dg_header').empty();

		var html = 	'<div id="workwrap" class="workwrap-decasaalcole">'+
					'<div class="container">'+
					'<div class="row">'+
					'<div class="col-lg-6 col-lg-offset-3">'+
					'<h1>DE CASA AL COLE</h1>'+
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
		this.initContentDescription();
		this.initContentGallery();
		// this.initContentExtra();

	},

	initContentPlatforms:function(){

		$('#dg_contentplatforms').empty();

		var html = 	'<div class="row centered mt">'+
					'<img class="centered platform" width="60px" src="images/portfolio_platform/work_web.png">'+
					'<img class="centered platform" width="60px" src="images/portfolio_platform/work_android.png">'+
					'<img class="centered platform" width="60px" src="images/portfolio_platform/work_ios.png">'+
					'</div>';

		$('#dg_contentplatforms').append(html);
	},

	initContentDescription: function(){
		
		$('#dg_contentdescription').empty();

		var html = 	'<div class="row centered mb">'+
					'<div class="col-lg-8 col-lg-offset-2">'+
					'<h3 class="text-highlighted">ABOUT THE PROJECT</h3>'+
					'<p align="justify">'+
					'DeCasaAlCole is a travel time calculation tool from your home to all schools of the city of Valencia, being the result of a weekend hackathon with friends. '+
					'</p>'+
					'<p align="justify">'+
					'Currently, teachers of public education of the Valencian Community have the ability to apply for several work centers. In general this is a quite time-consuming task, considering the offer of schools of many different types, and the fact that most of them are not geolocated in the application form, so that users have to manually check one by one where are them located. The motivation behind this project is to facilitate that task, getting a list of educational centers ordered by travel time attending to their destination preferences.'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Various Clients:</span> Web and multi-platform mobile applicatons'+
					'</p>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Server Side:</span> Processing Web Services'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-modal-window" aria-hidden="true"></span><a href="http://decasaalcole.com" target="_blank"> LIVE SITE</a>'+
					'</p>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span><a href="http://decasaalcole.com/about.html" target="_blank"> TEAM</a>'+
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
					'<img class="img-responsive img-thumbnail" src="images/portfolio_content/work_decasaalcole_1.jpg">'+
					'<br>'+
					''+
					'<div id="gallery-title-1" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Web Application</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-2" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Android & iOS Mobile Application</h4>'+
					'</div>'+
					'</div>'+
					''+
					'<ul id="light-gallery" class="gallery centered">'+
					'<li data-src="images/portfolio_content/work_decasaalcole_1.jpg"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_decasaalcole_1_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_decasaalcole_2.jpg"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_decasaalcole_2_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_decasaalcole_3.jpg"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_decasaalcole_3_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_decasaalcole_4.png"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_decasaalcole_4_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_decasaalcole_5.png"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_decasaalcole_5_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_decasaalcole_6.png"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_decasaalcole_6_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_decasaalcole_7.png"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_decasaalcole_7_thumb.jpg" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_decasaalcole_8.png"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_decasaalcole_8_thumb.jpg" />'+
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

