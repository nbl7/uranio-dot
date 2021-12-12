/**
 * URANIO auto-generated file for launching express server
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.DEBUG);

import uranio from 'uranio';

const express_service = uranio.api.service.create();

express_service.listen(3000, () => {
	urn_log.debug(`Listening on port 3000...`);
});
