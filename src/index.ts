/**
 * URANIO auto-generated file for starting the server
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.DEBUG);

import uranio from 'uranio';

const express_service = uranio.api.service.create();

express_service.listen(8888, () => {
	urn_log.debug(`Listening on port 8888...`);
});

uranio.hooks.superusers.count({}).then((trx_response) => {
	if(trx_response.success === true){
		const count_superuser = trx_response.payload;
		urn_log.debug(`Superuser count: ${count_superuser}`);
	}else{
		urn_log.debug(trx_response.err_code);
	}
});
