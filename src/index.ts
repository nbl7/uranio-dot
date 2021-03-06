/**
 * Index module for URANIO DOT
 *
 * @packageDocumentation
 */

// import uranio from 'uranio';

// uranio.web.service.express.create();

// export const a:uranio.types.AtomName = 'request';

// const pro_bll = uranio.core.bll.create('product');

// pro_bll.find({});

// uranio.core.atm.keys.get_bond('group');

import {urn_log} from 'urn-lib';

urn_log.defaults.log_level = urn_log.LogLevel.FUNCTION_DEBUG;

import uranio from 'uranio';

const express_service = uranio.web.service.express.create();

express_service.listen(3000, () => {
	urn_log.debug(`Listening on port 3000...`);
});
