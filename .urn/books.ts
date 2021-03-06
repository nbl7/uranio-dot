/**
 * Project custom book
 *
 * @packageDocumentation
 */
import { urn_log } from 'urn-lib';
// import uranio from './urn-web/fake';
// import { return_bll } from '../src/myprodbll';
// import { my_prod_bll } from '../src/myprodbll';
// import urn_core from 'urn_core';

// import {atom, bll, api} from './urn-web/books';

import uranio from 'urn_web';
import urn_core from 'urn_core';

import {BLL} from './urn-core/bll/bll';

class my_prod_bll extends BLL<'product'>{
	constructor(to?:uranio.types.TokenObject){
		super('product', to);
	}
	public async find<D extends uranio.types.Depth>(query:uranio.types.Query<'product'>, options?:uranio.types.Query.Options<'product',D>)
			:Promise<uranio.types.Molecule<'product',D>[]>{
		console.warn('kdajflkjdfAJFHDKSHFLKSDHFLKSDHFLKHSDLKFHDSKLHFLSDKHFLKSDHFLKSHDFKLSDH');
		return await this._al.select(query, options);
	}
}

// import * as uranio.types from './uranio.types';

// console.log(atom);
// console.log(bll);

export const atom_book = {
superuser: {
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY
		},
		properties: {
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: 'Email',
				unique: true,
				on_error: () => {
					return 'email@email.com';
				}
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: 'Password',
				hidden: true
			},
			groups: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				atom: 'group',
				label: 'Groups',
				optional: true
			}
		}
	},
	user: {
		security: {
			type: uranio.types.BookSecurityType.GRANULAR
		},
		properties: {
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: 'Email',
				unique: true,
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: 'Password',
				hidden: true
			},
			groups: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				atom: 'group',
				label: 'Groups',
				optional: true
			}
		}
	},
	group: {
		properties: {
			name: {
				type: uranio.types.BookPropertyType.TEXT,
				unique: true,
				label: 'Name'
			}
		}
	},
    error: {
		connection: 'log',
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY
		},
		properties: {
			status: {
				type: uranio.types.BookPropertyType.INTEGER,
				label: 'Status'
			},
			msg: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Message'
			},
			error_code: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Error Code'
			},
			error_msg: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Error Message'
			},
			request: {
				type: uranio.types.BookPropertyType.ATOM,
				label: 'Request',
				atom: 'request',
				delete_cascade: true,
				optional: true
			},
			stack: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: 'Stack',
				optional: true
			}
		}
	},
	request: {
		connection: 'log',
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY
		},
		properties: {
			url: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'URL'
			},
			ip: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'IP'
			},
			params: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Params',
				optional: true
			},
			query: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Query',
				optional: true
			},
			body: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: 'Body',
				optional: true
			},
			atom_name: {
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Atom name',
				on_error: () => {return 'generic_atom';}
			},
			auth_action: {
				type: uranio.types.BookPropertyType.ENUM_STRING,
				label: 'Auth action',
				values: ['READ', 'WRITE'],
				on_error: () => {return 'READ';}
			}
		}
	},
    media: {
        security: {
            type: uranio.types.BookSecurityType.UNIFORM
        },
        properties: {
            src: {
                type: uranio.types.BookPropertyType.TEXT,
                label: 'SRC'
            }
        }
    },
    product: {
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
} as const;
export const bll_book = {
    superuser:{},
    user:{},
    group:{},
    request: {},
    error: {},
    media: {},
    product: {
				bll: my_prod_bll
				// bll: (token_object?:uranio.types.TokenObject) => {
				//   class my_prod_bll extends urn_core.bll.BLL<'product'>{
				//     constructor(to?:uranio.types.TokenObject){
				//       super('product', to);
				//     }
				//     public async find<D extends uranio.types.Depth>(query:uranio.types.Query<'product'>, options?:uranio.types.Query.Options<'product',D>)
				//         :Promise<uranio.types.Molecule<'product',D>[]>{
				//       console.warn('kdajflkjdfAJFHDKSHFLKSDHFLKSDHFLKHSDLKFHDSKLHFLSDKHFLKSDHFLKSHDFKLSDH');
				//       return await this._al.select(query, options);
				//     }
				//   }
				//   return new my_prod_bll(token_object);
				// }
    },
} as const;
export const api_book = {
    superuser:{
        api: {url: 'superusers'},
    },
    user:{
        api: {url: 'users'},
    },
    group:{
        api: {url: 'groups'},
    },
    request: {
        api: {url: 'requests'},
    },
    error: {
        api: {url: 'errors'},
    },
    media: {
        api: {
            url: 'medias',
        }
    },
    product: {
        api: {
            url: 'products',
						routes: {
								find: {
										method: uranio.types.RouteMethod.GET,
										action: uranio.types.AuthAction.READ,
										url: '/',
										query: ['filter', 'options'],
										call: async <D extends uranio.types.Depth>(urn_request: uranio.types.RouteRequest): Promise<uranio.types.Molecule<'product', D>[]> => {
												console.log('CUSTOOOOM ROUTE');
												urn_log.fn_debug(`CUSTOOOOOM Router Call GET / [product]`);
												const urn_bll = urn_core.bll.create('product', urn_request.token_object);
												const bll_res = await urn_bll.find(urn_request.query.filter, urn_request.query.options) as uranio.types.Molecule<'product', D>[];
												return urn_core.atm.util.hide_hidden_properties('product', bll_res);
										}
								},
								find_id: {
										method: uranio.types.RouteMethod.GET,
										action: uranio.types.AuthAction.READ,
										url: '/:id',
										query: ['options'],
										call: async <D extends uranio.types.Depth>(urn_request: uranio.types.RouteRequest): Promise<uranio.types.Molecule<'product', D>> => {
												console.log('CUSTOOOOM ROUTE');
												urn_log.fn_debug(`CUSTOOOOM Router Call GET /:id [product]`);
												const urn_bll = urn_core.bll.create('product', urn_request.token_object);
												const bll_res = await urn_bll.find_by_id(urn_request.params.id, urn_request.query.options) as uranio.types.Molecule<'product', D>;
												return urn_core.atm.util.hide_hidden_properties('product', bll_res);
										}
								},
						}
				}
    },
} as const;
