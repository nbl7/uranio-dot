
import * as book_types from './types';

import {web_atom_book} from 'urn_web/book';

// const default_routes = {};

// const my_validate_route = {};

// dev_atom_book.product.api.routes.validate.call(

import {urn_log} from 'urn-lib';

import urn_core from 'urn_core';

// import {Query, AtomShape, TokenObject} from 'urn_core/types';


// export const route_book = {
//   validate: {
//     method: 'GET',
//     // action: AuthAction.READ,
//     url: '/validate/:id/:region',
//     client_call: (id:string, region:string, options:Query.Options<'product'>, body:AtomShape<'product'>) => {
//       return {
//         params: {id: id, region: region},
//         query: {options: options},
//         body: body
//       };
//     },
//     server_call: async (params:RouteParams, query:RouteQuery, body:RouteBody, token_object:TokenObject) => {
//       const urn_bll = urn_core.bll.create('user', token_object);
//       console.log(body);
//       return await urn_bll.find_by_id(params.id, query.options);
//     }
//   }
// } as const;

// export type RouteName = keyof typeof route_book;

// export type RouteParams = {
	
// }

// export type ClientReturn = {
//   params: {
//     [k:string]: string
//   },
//   query: any,
//   body: any
// }


// export type RouteBook = {
//   [k:string]: {
//     method: 'GET' | 'POST' | 'DELETE',
//     url:string,
//     client_call: (...args:any) => ClientReturn,
//     server_call: (params: RouteParams, query: RouteQuery, body: RouteBody, token_object:TokenObject) => any
//   }
// }

export const dev_atom_book = {
	...web_atom_book,
	media: {
		api: {
			url: 'medias'
		},
		security: {
			type: book_types.BookSecurityType.UNIFORM
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
			url: 'products',
			routes: {
				find: {
					method: book_types.RouteMethod.GET,
					action: book_types.AuthAction.READ,
					url: '/',
					call: async (urn_request) => {
						
						urn_log.fn_debug(`Router GET / [${urn_request.atom_name}]`);
						
						// req_validator.only_valid_query_keys(urn_request.query, ['filter','options']);
						// req_validator.empty(urn_request.params, 'params');
						// req_validator.empty(urn_request.body, 'body');
						
						// const filter = req_validator.process_request_filter(urn_request.query.filter);
						// const options = req_validator.process_request_options(urn_request.query.options);
						
						const urn_bll = urn_core.bll.create(urn_request.atom_name, urn_request.token_object);
						
						const bll_res = await urn_bll.find(urn_request.query.filter, urn_request.query.options);
						
						return urn_core.atm.util.hide_hidden_properties(urn_request.atom_name, bll_res);
						
					}
				}
			}
		},
		security: {
			type: book_types.BookSecurityType.UNIFORM
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
	},
	// product2: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product3: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product4: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product5: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product6: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product7: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product8: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product9: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product10: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product11: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product12: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product13: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product14: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product15: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product16: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product17: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product18: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product19: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product20: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product21: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product22: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product23: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product24: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product25: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product26: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product27: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product28: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product29: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product30: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product31: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// },
	// product32: {
	//   api: {
	//     url: 'products'
	//   },
	//   security: {
	//     type: book_types.BookSecurityType.UNIFORM
	//   },
	//   properties: {
	//     title: {
	//       type: book_types.BookPropertyType.TEXT,
	//       label: 'Title',
	//       optional: true
	//     },
	//     images: {
	//       type: book_types.BookPropertyType.ATOM_ARRAY,
	//       atom: 'media',
	//       optional: true
	//     }
	//   }
	// }
} as const;

export const atom_book = {
	...dev_atom_book
} as const;
