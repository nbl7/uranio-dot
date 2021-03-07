/**
 * Index module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';

urn_log.defaults.log_level = urn_log.LogLevel.FUNCTION_DEBUG;

import uranio from 'uranio';

const express_service = uranio.service.express.create();

express_service.listen(3000, () => {
	urn_log.debug(`Listening on port 3000...`);
});
