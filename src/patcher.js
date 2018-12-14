patcher = {
	dagger: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'WEAP',
				filter: function(record) {
					return xelib.HasKeyword(record, 'WeapTypeDagger') &&
						!xelib.HasElement(record, 'CNAM');
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'INAM', locals.daggerImpact);
			if (!xelib.GetFlag(record, 'DNAM\\Flags2', 'Bound Weapon')) {
				xelib.AddElementValue(record, 'NAM9', locals.daggerEquip);
				xelib.AddElementValue(record, 'NAM8', locals.daggerUnequip);
			}
		}
	},
	giantClub: {
		load: function(plugin, helpers, settings, locals) {
			return {
				signature: 'WEAP',
				filter: function(record) {
					if (xelib.HasElement(record, 'INAM')) {
						let impact = xelib.GetLinksTo(record, 'INAM');
						let impactFormID = xelib.GetHexFormID(impact, false, false);
						return (impactFormID === locals.giantClubImpact);
					}
					return false;
				}
			}
		},
		patch: function(record, helpers, settings, locals) {
			xelib.AddElementValue(record, 'BIDS', locals.bluntImpact);
		}
	}
}
