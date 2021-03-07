/**
 * Project custom book
 *
 * @packageDocumentation
 */
// some comment
import {urn_log} from 'urn-lib';

import uranio from 'uranio';

import {return_bll} from './myprodbll';

import {find} from './r';
//some other comments
export const atom_book:uranio.types.Book = {
	media: {
		api: {
			url: 'medias' // here i did something
		},
		security: {
			type: uranio.types.BookSecurityType.UNIFORM
		},
		/**
		 * TODO
		 */
		properties: {
			src: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'SRC'
			}
		}
	},
	product: {
		bll: return_bll,
		api: {
			url: 'products',
			routes: {
				...find,
				find_id: {
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: '/:id',
					query: ['options'],
					call: async <D extends uranio.types.Depth>(
						urn_request:uranio.types.RouteRequest
					):Promise<uranio.types.Molecule<'product',D>> => {
						console.log('CUSTOOOOM ROUTE');
						urn_log.fn_debug(`CUSTOOOOM Router Call GET /:id [product]`);
						const urn_bll = uranio.core.bll.create('product', urn_request.token_object);
						const bll_res = await urn_bll.find_by_id(urn_request.params.id, urn_request.query.options) as uranio.types.Molecule<'product', D>;
						return uranio.core.atm.util.hide_hidden_properties('product', bll_res);
					}
				},
			}
		},
		security: {
			type: uranio.types.BookSecurityType.UNIFORM
		},
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title',
				optional: true
			},
			images: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				label: 'Images',
				atom: 'media',
				optional: true
			}
		}
	},
};



