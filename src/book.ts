
import * as book_types from './types';

import {web_atom_book} from 'urn_web/book';

export const dev_atom_book = {
	...web_atom_book,
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

export const atom_book = {
	...dev_atom_book
} as const;
