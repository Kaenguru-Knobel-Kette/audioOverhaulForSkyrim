localsBuilder = {
	setLocals: function(patch, helpers, settings, locals) {
		let aos = xelib.FileByName('AOS.esp');
		let skyrim = xelib.FileByName('Skyrim.esm');

		let daggerImpact = xelib.GetRecord(aos, 0x0405B6EA);
		let daggerEquip = xelib.GetRecord(skyrim, 0x0003CED9);
		let daggerUnequip = xelib.GetRecord(skyrim, 0x0003CEDB);
		let bluntImpact = xelib.GetRecord(skyrim, 0x000193C7);
		let giantClubImpact = xelib.GetRecord(skyrim, 0x000C4E32);
		
		locals.daggerImpact = xelib.GetHexFormID(daggerImpact, false, false);
		locals.daggerEquip = xelib.GetHexFormID(daggerEquip, false, false);
		locals.daggerUnequip = xelib.GetHexFormID(daggerUnequip, false, false);
		locals.bluntImpact = xelib.GetHexFormID(bluntImpact, false, false);
		locals.giantClubImpact = xelib.GetHexFormID(giantClubImpact, false, false);
	}
}
