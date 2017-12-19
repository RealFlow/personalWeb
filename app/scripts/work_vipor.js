
DG.Work.VIPOR = {

	workBase: null,

	initialize: function(workBase){
		this.workBase = workBase;
	},

	setHeader: function(){

		$('#dg_header').empty();

		var html = 	'<div id="workwrap" class="workwrap-vipor">'+
					'<div class="container">'+
					'<div class="row">'+
					'<div class="col-lg-6 col-lg-offset-3">'+
					'<h1>VIPOR</h1>'+
					'<h4>Customer Relationship Management (CRM)</h4>'+
					'<h4>ROLE: DESKTOP & MOBILE LEAD DEVELOPER</h4>'+
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
		this.initContentExtra();

	},

	initContentPlatforms:function(){

		$('#dg_contentplatforms').empty();

		var html = 	'<div class="row centered mt">'+
					'<img class="centered platform" width="60px" src="images/portfolio_platform/work_ios.png" title="Includes iOS Development">'+
					'<img class="centered platform" width="60px" src="images/portfolio_platform/work_web.png" title="Includes Backend Development">'+
					'</div>';

		$('#dg_contentplatforms').append(html);
	},

	initContentDescription: function(){
		
		$('#dg_contentdescription').empty();

		var html = 	'<div class="row centered mb">'+
					'<div class="col-lg-8 col-lg-offset-2">'+
					'<h3 class="text-highlighted">ABOUT THE PROJECT</h3>'+
					'<p align="justify">'+
					'Vipor CRM tools has been developed to help people make business relationships more meaningful and effective. Its aim is to provide business people with an affordable, easy-to-use anytime, anywhere solution that allows them to deal with people effectively, elevating the value of their relationship with each of them.'+
					'</p>'+
					'<p align="justify">'+
					'This software provides everything needed to effectively manage contacts and build relationship simply from any iOS or macOS device, making very simple the task to track what you did with your clients, organize what you need to do for them, and get things done – so you can build better business relationships and be even more successful.'+
					'</p>'+
					'<p align="justify">'+
					'The development has included'+
					'</p>'+
					'<br>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Native macOS Application:</span> For all available macOS devices'+
					'</p>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Native iOS Application:</span> For all available iPhone and iPad devices.'+
					'</p>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Native iWatch Application:</span> For all available iWatch devices.'+
					'</p>'+
					'<p align="justify">'+
					'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span><span class="text-highlighted"> Backend:</span> Cloud-based Node.js server and Postgre database. REST interface written in TypeScript'+
					'</p>'+
					'</div>'+
					'</div>';

  		$('#dg_contentdescription').append(html);

	},

	initContentGallery: function() {

		$('#dg_contentgallery').empty();

		var html =  '<div class="row centered mb">'+
					'<div class="col-lg-10 col-lg-offset-1">'+
					'<img class="centered platform" width="60px" src="images/portfolio_misc/gallery.png">'+
					'<h4 class="text-highlighted">GALLERY</h4>'+
					'<img class="img-responsive img-thumbnail" src="images/portfolio_content/work_vipor_4.png">'+
					'<br>'+
					''+
					'<div id="gallery-title-1" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Login Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-2" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Dashboards Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-3" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Activity Edition Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-4" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Activity in Dashboard Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-5" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Orbits Menus</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-6" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Orbit Edition Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-7" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Orbit Detail Edition Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-8" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Contact Activity Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-9" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Empty Contact Activity Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-10" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Contact Demographics Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-11" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Empty Contact Demographics Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-12" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Multi Contact Selection Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-13" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Calendar Month Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-14" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Calendar Week Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-15" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Calendar List Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-16" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Calendar Context Search Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-17" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Contact Edition Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-18" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Log Edition Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-19" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Settings Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-20" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">Menu & Keyboard shortcuts Views</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-21" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">macOS Export All View</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-22" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">macOS Export All Result View</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-23" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">macOS Filtered Export View</h4>'+
					'</div>'+
					'</div>'+
					'<div id="gallery-title-24" style="display:none">'+
					'<div class="custom-html">'+
					'<h4 style="color: white">macOS Filtered Export View</h4>'+
					'</div>'+
					'</div>'+
					'</div>'+
					''+
					'<ul id="light-gallery" class="gallery centered">'+
					'<li data-src="images/portfolio_content/work_vipor_1.png"'+
					'data-sub-html="#gallery-title-1">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_1_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_2.png"'+
					'data-sub-html="#gallery-title-2">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_2_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_3.png"'+
					'data-sub-html="#gallery-title-3">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_3_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_4.png"'+
					'data-sub-html="#gallery-title-4">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_4_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_5.png"'+
					'data-sub-html="#gallery-title-5">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_5_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_6.png"'+
					'data-sub-html="#gallery-title-6">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_6_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_7.png"'+
					'data-sub-html="#gallery-title-7">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_7_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_8.png"'+
					'data-sub-html="#gallery-title-8">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_8_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_9.png"'+
					'data-sub-html="#gallery-title-9">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_9_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_10.png"'+
					'data-sub-html="#gallery-title-10">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_10_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_11.png"'+
					'data-sub-html="#gallery-title-11">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_11_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_12.png"'+
					'data-sub-html="#gallery-title-12">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_12_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_13.png"'+
					'data-sub-html="#gallery-title-13">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_13_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_14.png"'+
					'data-sub-html="#gallery-title-14">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_14_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_15.png"'+
					'data-sub-html="#gallery-title-15">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_15_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_16.png"'+
					'data-sub-html="#gallery-title-16">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_16_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_17.png"'+
					'data-sub-html="#gallery-title-17">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_17_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_18.png"'+
					'data-sub-html="#gallery-title-18">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_18_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_19.png"'+
					'data-sub-html="#gallery-title-19">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_19_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_20.png"'+
					'data-sub-html="#gallery-title-20">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_20_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_21.png"'+
					'data-sub-html="#gallery-title-21">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_21_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_22.png"'+
					'data-sub-html="#gallery-title-22">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_22_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_23.png"'+
					'data-sub-html="#gallery-title-23">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_23_thumb.png" />'+
					'</a>'+
					'</li>'+
					'<li data-src="images/portfolio_content/work_vipor_24.png"'+
					'data-sub-html="#gallery-title-24">'+
					'<a href="#">'+
					'<img src="images/portfolio_content/work_vipor_24_thumb.png" />'+
					'</a>'+
					'</li>'+
					'</ul>'+
					'</div>'+
					'</div>';

		$('#dg_contentgallery').append(html);
	},


	initContentExtra: function(){
		
		$('#dg_contentextra').empty();
	}

};

