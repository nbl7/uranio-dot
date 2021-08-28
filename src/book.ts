/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

import {some} from './server/s';

import {MYBLL} from './server/custom';

export const atom_book:uranio.types.Book = {
	mykart: {
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC
		},
		plural: 'mykarts',
		properties:{
			title:{
				type: uranio.types.BookPropertyType.TEXT,
				label: `${some}titless`
			}
		},
		dock: {
			url: '/mykarts',
			auth: '/myauthkart'
		},
		bll: () => {
			console.log(some + `s`);
			return new MYBLL();
		}
	},
	product: {
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title',
				validation: {
					alphanum: true,
					contain_digit: false,
					max: 8
				}
			},
			description: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: 'Description'
			},
			kart: {
				type: uranio.types.BookPropertyType.ATOM,
				label: 'Kart',
				atom: 'mykart'
			},
			users: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				label: 'Users',
				atom: 'user'
			},
			active: {
				type: uranio.types.BookPropertyType.BINARY,
				label: 'Active',
			},
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: 'Email',
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: 'Password',
			},
			type: {
				type: uranio.types.BookPropertyType.ENUM_NUMBER,
				label: 'Type Code',
				values: [1,2,3]
			},
			type_str: {
				type: uranio.types.BookPropertyType.ENUM_STRING,
				label: 'Type String',
				values: ['Red','Green','Blue']
			},
			price: {
				type: uranio.types.BookPropertyType.FLOAT,
				label: 'Price',
				validation: {
					min: 0
				}
			},
			unit: {
				type: uranio.types.BookPropertyType.INTEGER,
				label: 'Unit',
				validation: {
					min: 0,
					max: 10
				}
			},
			categories: {
				type: uranio.types.BookPropertyType.SET_NUMBER,
				label: 'Categories',
				validation: {
					length: 2
				}
			},
			categories_str: {
				type: uranio.types.BookPropertyType.SET_STRING,
				label: 'Categories string',
			},
			pub_date: {
				type: uranio.types.BookPropertyType.TIME,
				label: 'Pub date',
				validation: {
					min: new Date('2011-03-08')
				}
			},
		},
		dock: {
			url: '/products',
			auth: '/proauths'
		}
	}
};
