/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

export const atom_book:uranio.types.Book = {
	customer:{
		plural: 'customers',
		security:{
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC
		},
		properties: {
			first_name: {
				sortable: false,
				type: uranio.types.BookPropertyType.TEXT,
				label: 'First name'
			},
			last_name: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Last name',
				is_title: true
			}
		},
		dock:{
			url: '/customers',
			routes:{
				pippi:{
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: '/pippo',
					return: Number,
					call: async (req:uranio.types.Api.Request<'customer', 'pippi'>):Promise<number> => {
						console.log(req.route_name);
						return 899;
					}
				}
			}
		}
	},
	mykart: {
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC
		},
		plural: 'mykarts',
		properties:{
			title:{
				is_title: true,
				type: uranio.types.BookPropertyType.TEXT,
				// label: `${some}-titless`
				label: `titless`,
				style: {
					full_width: true,
					classes: 'custom-class-name'
				}
			}
		},
		dock: {
			url: '/mykarts',
			auth_url: '/myauthkart'
		},
	},
	product: {
		security:{
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC
		},
		properties: {
			title: {
				is_title: true,
				primary: true,
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title',
				style:{
					full_width: true
				},
				validation: {
					alphanum: true,
					contain_digit: false,
					max: 7
				},
				on_error: () => 'TITLE'
			},
			description: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: 'Description',
				style:{
					full_width: true
				}
			},
			kart: {
				type: uranio.types.BookPropertyType.ATOM,
				label: 'Kart',
				atom: 'mykart',
				optional: true
			},
			users: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				label: 'Users',
				atom: 'user',
				optional: true
			},
			active: {
				type: uranio.types.BookPropertyType.BINARY,
				label: 'Active',
			},
			email: {
				primary: true,
				type: uranio.types.BookPropertyType.EMAIL,
				label: 'Email',
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: 'Password',
			},
			type: {
				primary: true,
				type: uranio.types.BookPropertyType.ENUM_NUMBER,
				label: 'Type Code',
				values: [1,2,3],
				optional: true,
				default: 1
			},
			type_str: {
				primary: true,
				type: uranio.types.BookPropertyType.ENUM_STRING,
				label: 'Type String',
				values: ['Red','Green','Blue'],
				optional: true
			},
			price: {
				type: uranio.types.BookPropertyType.FLOAT,
				label: 'Price',
				validation: {
					min: 10
				}
			},
			unit: {
				type: uranio.types.BookPropertyType.INTEGER,
				label: 'Unit',
				// validation: {
				//   min: 0,
				//   max: 10
				// }
			},
			categories: {
				type: uranio.types.BookPropertyType.SET_NUMBER,
				label: 'Categories',
				// validation: {
				//   length: 2
				// },
				default: [1,2],
				optional: true
			},
			categories_str: {
				type: uranio.types.BookPropertyType.SET_STRING,
				label: 'Categories string',
				optional: true
			},
			pub_date: {
				type: uranio.types.BookPropertyType.TIME,
				label: 'Pub date',
				// validation: {
				//   min: new Date('2011-03-08')
				// }
			},
		},
		dock: {
			url: '/products',
			auth_url: '/proauths',
			routes: {
				myroute: {
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: '/myroute',
					call: async (api_request:uranio.types.Api.Request<'product','myroute'>):Promise<number> => {
						console.log(api_request);
						return 8;
					}
				}
			}
		}
	}
};
