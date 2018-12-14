registerPatcher({
	info: info,
	gameModes: [xelib.gmTES5, xelib.gmSSE],
	settings: {
		label: 'Audio Overhaul for Skyrim',
		hide: true,
		templateUrl: `${patcherUrl}/partials/settings.html`,
		defaultSettings: {}
	},
	requiredFiles: ['Skyrim.esm', 'AOS.esp'],
	getFilesToPatch: function(filenames) {
		return filenames;
	},
	execute: {
		initialize: function(patch, helpers, settings, locals) {
			localsBuilder.setLocals(patch, helpers, settings, locals);
		},
		process: [
			patcher.dagger,
			patcher.giantClub
		]
	}
});
