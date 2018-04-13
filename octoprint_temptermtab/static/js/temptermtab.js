$(function() {
	function tempTermTabViewModel(parameters) {
		var self = this;

		self.navigationViewModel = parameters[0];

		self.onAfterBinding = function() {
			//Check for TouchUIPlugin, if not loaded apply special class.
			var htmlId = $("html").attr("id");
			if (htmlId != "touch") {
				$('div#temp').append($('div#term').removeClass('tab-pane'));
				$('li#term_link').hide();
				if(!$('#terminal-filterpanel input[type=checkbox]:eq(0)').prop('checked')){$('#terminal-filterpanel input[type=checkbox]:eq(0)').trigger('click');}
				if(!$('#terminal-filterpanel input[type=checkbox]:eq(2)').prop('checked')){$('#terminal-filterpanel input[type=checkbox]:eq(2)').trigger('click');}
				$('pre#terminal-output').off('scroll');
				$('pre#terminal-output').css({'min-height':'125px','max-height':'125px','height':'125px'}).on('DOMNodeInserted',function(){if($('button').filter(function(index){return $(this).text() === "Autoscroll";}).hasClass('active')){$(this).scrollTop($(this)[0].scrollHeight);}});
			}
		}
	}

	// This is how our plugin registers itself with the application, by adding some configuration
	// information to the global variable OCTOPRINT_VIEWMODELS
	OCTOPRINT_VIEWMODELS.push([
		// This is the constructor to call for instantiating the plugin
		tempTermTabViewModel,

		// This is a list of dependencies to inject into the plugin, the order which you request
		// here is the order in which the dependencies will be injected into your view model upon
		// instantiation via the parameters argument
		["navigationViewModel"],

		// Finally, this is the list of selectors for all elements we want this view model to be bound to.
		[]
	]);
});
