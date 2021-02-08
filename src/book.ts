
import * as book_types from './types';

const core_atoms_book = {
	debug: {
		connection: 'log',
		security: {
			type: book_types.BookSecurityType.UNIFORM,
			_r: null
		},
		api:{
			url: '/log-debug'
		},
		properties: {
			msg: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Message'
			},
			body: {
				type: book_types.BookPropertyType.LONG_TEXT,
				label: 'Body'
			},
			path: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Path'
			},
			ip: {
				type: book_types.BookPropertyType.TEXT,
				label: 'IP',
			},
			params: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Params'
			},
			query: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Query'
			}
		}
	},
	error: {
		connection: 'log',
		security: {
			type: book_types.BookSecurityType.UNIFORM,
			_r: null
		},
		api:{
			url: '/log-error'
		},
		properties: {
			msg: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Message'
			},
			body: {
				type: book_types.BookPropertyType.LONG_TEXT,
				label: 'Body'
			},
			path: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Path'
			},
			ip: {
				type: book_types.BookPropertyType.TEXT,
				label: 'IP',
			},
			params: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Params'
			},
			query: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Query'
			}
		}
	},
	superuser: {
		security: {
			type: book_types.BookSecurityType.UNIFORM,
			_r: null
		},
		api:{
			url: '/superusers'
		},
		properties: {
			email: {
				type: book_types.BookPropertyType.EMAIL,
				label: 'Email',
				unique: true,
				on_error: () => {
					return 'email@email.com';
				}
			},
			password: {
				type: book_types.BookPropertyType.ENCRYPTED,
				label: 'Password'
			}
		}
	},
	user: {
		securiy: {
			type: book_types.BookSecurityType.GRANULAR
		},
		api:{
			url: '/users'
		},
		properties: {
			email: {
				type: book_types.BookPropertyType.EMAIL,
				label: 'Email',
				unique: true,
			},
			password: {
				type: book_types.BookPropertyType.ENCRYPTED,
				label: 'Password'
			},
			groups: {
				type: book_types.BookPropertyType.ATOM_ARRAY,
				atom: 'group',
				label: 'Groups',
				optional: true
			}
		}
	},
	group: {
		api:{
			url: '/groups'
		},
		properties: {
			name: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Name'
			}
		}
	}
} as const;

export const atom_book = {
	...core_atoms_book,
	media: {
		api: {
			url: '/medias'
		},
		security: {
			type: book_types.BookSecurityType.GRANULAR
		},
		properties: {
			src: {
				type: book_types.BookPropertyType.TEXT,
				label: 'SRC'
			}
		}
	},
	product: {
		api: {
			url: '/products'
		},
		security: {
			type: book_types.BookSecurityType.GRANULAR
		},
		properties: {
			title: {
				type: book_types.BookPropertyType.TEXT,
				label: 'Title',
				optional: true
			},
			images: {
				type: book_types.BookPropertyType.ATOM_ARRAY,
				atom: 'media',
				optional: true
			}
		}
	}
} as const;
