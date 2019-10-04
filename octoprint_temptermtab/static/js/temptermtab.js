$(function() {
	function tempTermTabViewModel(parameters) {
		var self = this;

		self.navigationViewModel = parameters[0];

		self.onBeforeBinding = function() {
			$('li#term_link').attr('data-bind',function() { 
				var data_bind = $(this).attr('data-bind');
				data_bind = data_bind.replace('visible: loginState.hasPermissionKo(access.permissions.MONITOR_TERMINAL)','');
				return data_bind; 
			}).addClass('hidden');
		}

		self.onAfterBinding = function() {
			//Check for TouchUIPlugin, if not loaded apply special class.
			var htmlId = $("html").attr("id");
			if (htmlId != "touch") {
				$('div#temp').append($('div#term').removeClass('tab-pane'));
				if(!$('#terminal-filterpanel input[type=checkbox]:eq(0)').prop('checked')){$('#terminal-filterpanel input[type=checkbox]:eq(0)').trigger('click');}
				if(!$('#terminal-filterpanel input[type=checkbox]:eq(2)').prop('checked')){$('#terminal-filterpanel input[type=checkbox]:eq(2)').trigger('click');}
				$('pre#terminal-output').css({'min-height':'125px','max-height':'125px','height':'125px'}).on('DOMNodeInserted',function(){if($('button').filter(function(index){return $(this).text() === "Autoscroll";}).hasClass('active')){$(this).scrollTop($(this)[0].scrollHeight);}});
			}
		}
	}

	OCTOPRINT_VIEWMODELS.push([
		tempTermTabViewModel,
		["navigationViewModel"],
		[]
	]);
});
