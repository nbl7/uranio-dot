
import urn_core from 'urn_core';

const core_atoms_book = {
	superuser: {
		security: {
			type: urn_core.types.BookSecurityType.UNIFORM,
			_r: null
		},
		api:{
			url: 'superuser'
		},
		properties: {
			email: {
				type: urn_core.types.BookPropertyType.EMAIL,
				label: 'Email',
				unique: true,
				on_error: () => {
					return 'email@email.com';
				}
			},
			password: {
				type: urn_core.types.BookPropertyType.ENCRYPTED,
				label: 'Password'
			}
		}
	},
	user: {
		securiy: {
			type: urn_core.types.BookSecurityType.GRANULAR
		},
		api:{
			url: 'user'
		},
		properties: {
			email: {
				type: urn_core.types.BookPropertyType.EMAIL,
				label: 'Email',
				unique: true,
			},
			password: {
				type: urn_core.types.BookPropertyType.ENCRYPTED,
				label: 'Password'
			},
			groups: {
				type: urn_core.types.BookPropertyType.ATOM_ARRAY,
				atom: 'group',
				label: 'Groups',
				optional: true
			}
		}
	},
	group: {
		api:{
			url: 'group'
		},
		properties: {
			name: {
				type: urn_core.types.BookPropertyType.TEXT,
				label: 'Name'
			}
		}
	}
} as const;

export const atom_book = {
	...core_atoms_book,
} as const;
