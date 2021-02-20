
import * as book_types from './types';

import {web_atom_book} from 'urn_web/book';

const default_routes = {};

const my_validate_route = {};

dev_atom_book.product.api.routes.validate.call(

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
				...default_routes,
				validate: {
					method: 'GET',
					action: AuthAction.READ,
					url: '/validate/:id',
					call: (id:string, body:Atom<'user'>, options:Query.Options<'user'>) => {
						const urn_bll = urn_core.bll.create('user');
						return await urn_bll.validate(id, body, options);
					}
					// client_call: (id:string, body:Atom<'user'>, options:Query.Options<'user'>) => {
					//   axios.get('/${id}?=filter{options}', body, )
					// },
					// server_call: async (req, res) => {
					//   const urn_bll = urn_core.bll.create('user');
					//   return await urn_bll.validate(id, options);
					// }
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
