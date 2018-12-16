localsBuilder = {
	setLocals: function(patch, helpers, settings, locals) {
		let skyrim = xelib.FileByName('Skyrim.esm');
		let aos = xelib.FileByName('AOS.esp');

		let skyrimIndex = xelib.Hex(xelib.GetFileLoadOrder(skyrim), 2);
		let aosIndex = xelib.Hex(xelib.GetFileLoadOrder(aos), 2);

		locals.daggerImpact = `${aosIndex}05B6EA`;
		locals.daggerEquip = `${skyrimIndex}03CED9`;
		locals.daggerUnequip = `${skyrimIndex}03CEDB`;
		locals.bluntImpact = `${skyrimIndex}0193C7`;
		locals.giantClubImpact = `${skyrimIndex}0C4E32`;
	}
}
