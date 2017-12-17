window.DG = window.DG || {};
var DG = window.DG;


DG.Base = {

	opts: null,
	work: null,


	initializeHome: function(base){

		DG.Home.initialize(this);
	},

	initializeAbout: function(base){

		DG.About.initialize(this);
	},

	initializeWorks: function(base){

		DG.Work.initialize(this);
	},

	setSocial: function(){
	
		//clean previous
		$('#social').empty();

		var html = 	'<div class="container">' +
					'<div class="row centered">' +
					'<div class="col-lg-4">' +
					'<a href="https://www.facebook.com/CosechaDel84"><i class="fa fa-facebook"></i></a>' +
					'</div>' +
					'<div class="col-lg-4">' +
					'<a href="https://twitter.com/reservadel84"><i class="fa fa-twitter"></i></a>' +
					'</div>' +
					'<div class="col-lg-4">' +
					'<a href="http://es.linkedin.com/in/danigaston" target="_blank"><i class="fa fa-linkedin"></i></a>' +
					'</div>' +
					'</div>' +
					'</div>';

		$('#social').append(html);

	},

	setFooter: function(){
	
		//clean previous
		$('#dg_footer').empty();

		var html = 	'<div id="footerwrap">'+
					'<div class="container">'+
					'<div class="row centered">'+
					'<div class="col-lg-4">'+
					'<p>Thanks for scrolling<span class="text-highlighted">...</span></p>'+
					'</div>'+
					'<div class="col-lg-4">'+
					'<p>me<span class="text-highlighted">[at]</span>danielgaston<span class="text-highlighted">[dot]</span>com</p>'+
					'</div>'+
					'<div class="col-lg-4">'+
					'<p><span style="color:gray">© 2018 Daniel Gastón</span></p>'+
					'</div>'+
					'</div>'+
					'</div>'+
					'</div>';

		$('#dg_footer').append(html);

	}
	
};

