/**
 * URANIO auto-generated file for starting the server
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.DEBUG);

import uranio from 'uranio';
uranio.init();

const express_service = uranio.api.service.create();

express_service.listen(8888, () => {
	urn_log.debug(`Listening on port 8888...`);
});

// const bll = uranio.core.bll.basic.create('superuser');
// bll.insert_new({email: 'b@a.com', password: 'Password'}).then((data) => {
//   console.log(data);
// });
