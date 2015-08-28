window.DG = window.DG || {};
var DG = window.DG;


DG.Work = {

	base: null,
	WORK_ID: 0,
	factory: null,
	ID_SOSTRE: 1,
	ID_AIS_ASTERIX: 2,
	ID_AVT: 3,
	ID_BAAS: 4,
	ID_BICICAS: 5,
	ID_DE_CASA_AL_COLE: 6,
	ID_GIS3D: 7,
	ID_GVSIGMINI: 8,
	ID_IRENA: 9,
	ID_MONEYJOURNEY: 10,
	ID_SEACARE: 11,
	ID_SEMOSA: 12,
	ID_GIS_VARIOUS: 13,
	ID_WOO: 14,

	initialize: function(base){

		this.base = base;
		var workFilePath = this.getURLFilePath();
		this.setWorkId(workFilePath);
		this.initWorkFactory();
		this.initUI();
	},

	setWorkId: function(filePath){

		var id = 0;
		filePath = Number.parseInt(filePath);

		switch (filePath) {
		    
		    case this.ID_AIS_ASTERIX:
		        id = this.ID_AIS_ASTERIX;
		        break;
		    case this.ID_AVT:
		        id = this.ID_AVT;
		        break;
		    case this.ID_BAAS:
		        id = this.ID_BAAS;
		        break;
		    case this.ID_BICICAS:
		        id = this.ID_BICICAS;
		        break;
		    case this.ID_DE_CASA_AL_COLE:
		        id = this.ID_DE_CASA_AL_COLE;
		        break;
		    case this.ID_GIS3D:
		        id = this.ID_GIS3D;
		        break;
		    case this.ID_GIS_VARIOUS:
		        id = this.ID_GIS_VARIOUS;
		        break;
		    case this.ID_GVSIGMINI:
		        id = this.ID_GVSIGMINI;
		        break;
		    case this.ID_IRENA:
		        id = this.ID_IRENA;
		        break;
		    case this.ID_MONEYJOURNEY:
		        id = this.ID_MONEYJOURNEY;
		        break;
		    case this.ID_SEACARE:
		        id = this.ID_SEACARE;
		        break;
		    case this.ID_SEMOSA:
		        id = this.ID_SEMOSA;
		        break;
		    case this.ID_SOSTRE:
		        id = this.ID_SOSTRE;
		        break;
		    case this.ID_WOO:
		        id = this.ID_WOO;
		        break;
		    default:
		        break;
		}

		this.WORK_ID = id;
	},

	initWorkFactory: function(){

		switch (this.WORK_ID) {
		    
		    case this.ID_AIS_ASTERIX:
		    	this.factory = DG.Work.AisAsterix;
		        this.factory.initialize(this);
		        break;
		    case this.ID_AVT:
		        this.factory = DG.Work.AVT;
		        this.factory.initialize(this);
		        break;
		    case this.ID_BAAS:
		        this.factory = DG.Work.BAAS;
		        this.factory.initialize(this);
		        break;
		    case this.ID_BICICAS:
		        this.factory = DG.Work.BICICAS;
		        this.factory.initialize(this);
		        break;
		    case this.ID_DE_CASA_AL_COLE:
		        this.factory = DG.Work.DECASAALCOLE;
		        this.factory.initialize(this);
		        break;
		    case this.ID_GIS3D:
		        this.factory = DG.Work.GIS3D;
		        this.factory.initialize(this);
		        break;
		    case this.ID_GIS_VARIOUS:
		        this.factory = DG.Work.GISVARIOUS;
		        this.factory.initialize(this);
		        break;
		    case this.ID_GVSIGMINI:
		        this.factory = DG.Work.GVSIGMINI;
		        this.factory.initialize(this);
		        break;
		    case this.ID_IRENA:
		        this.factory = DG.Work.IRENA;
		        this.factory.initialize(this);
		        break;
		    case this.ID_MONEYJOURNEY:
		        this.factory = DG.Work.MONEYJOURNEY;
		        this.factory.initialize(this);
		        break;
		    case this.ID_SEACARE:
		        this.factory = DG.Work.SEACARE;
		        this.factory.initialize(this);
		        break;
		    case this.ID_SEMOSA:
		        this.factory = DG.Work.SEMOSA;
		        this.factory.initialize(this);
		        break;
		    case this.ID_SOSTRE:
		        this.factory = DG.Work.SOSTRE;
		        this.factory.initialize(this);
		        break;
		    case this.ID_WOO:
		        this.factory = DG.Work.WOO;
		        this.factory.initialize(this);
		        break;
		    default:
		        break;
		}
	},

	initUI: function(){

		this.setNavigation();
		if (this.factory) {
			this.factory.setHeader();
			this.factory.setContent();
		}
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

		var html = 	'<div class="container">'+
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
					'<li><a href="about.html">About</a></li>'+
					'<li class="active"><a href="index.html#works">Works</a></li>'+
					'</ul>'+
					'</div>'+
					'</div>';

		$('#dg_navigation').append(html);
	}
};

