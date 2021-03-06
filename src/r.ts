import {urn_log} from 'urn-lib';

import uranio from '../.urn/urn-web/uranio';

export const find = {
	find: {
		method: uranio.types.RouteMethod.GET,
		action: uranio.types.AuthAction.READ,
		url: '/',
		query: ['filter', 'options'],
		call: async <D extends uranio.types.Depth>(urn_request: uranio.types.RouteRequest): Promise<uranio.types.Molecule<'product', D>[]> => {
			console.log('CUSTOOOOM ROUTE');
			urn_log.fn_debug(`CUSTOOOOOM Router Call GET / [product]`);
			const urn_bll = uranio.core.bll.create('product', urn_request.token_object);
			const bll_res = await urn_bll.find(urn_request.query.filter, urn_request.query.options) as uranio.types.Molecule<'product', D>[];
			return uranio.core.atm.util.hide_hidden_properties('product', bll_res);
		}
	}
};
