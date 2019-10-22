# coding=utf-8

import octoprint.plugin

class temptermtab(octoprint.plugin.AssetPlugin):
	def get_assets(self):
		return dict(js=["js/temptermtab.js"])
		
	def get_version(self):
		return self._plugin_version
		
	##~~ Softwareupdate hook
	def get_update_information(self):
		return dict(
			temptermtab=dict(
				displayName="OctoPrint-TempTermTab",
				displayVersion=self._plugin_version,

				# version check: github repository
				type="github_release",
				user="jneilliii",
				repo="OctoPrint-TempTermTab",
				current=self._plugin_version,

				# update method: pip
				pip="https://github.com/jneilliii/OctoPrint-TempTermTab/archive/{target_version}.zip"
			)
		)

__plugin_name__ = "TempTermTab"
__plugin_pythoncompat__ = ">=2.7,<4"

def __plugin_load__():
	global __plugin_implementation__
	__plugin_implementation__ = temptermtab()

	global __plugin_hooks__
	__plugin_hooks__ = {
		"octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information
	}