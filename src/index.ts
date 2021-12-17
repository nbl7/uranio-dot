/**
 * URANIO auto-generated file for start developing with uranio-core repo.
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.FUNCTION_DEBUG);

import uranio from 'uranio';
uranio.init();

const superuser_bll = uranio.bll.basic.create(`superuser`);

superuser_bll.count({}).then((count_number) => {
	urn_log.debug('COUNT SUPERUSER: ', count_number);
});

// superuser_bll.find({}).then((superusers) => {
//   urn_log.debug(superusers);
// });

// superuser_bll.insert_new({
//   email: 's@s.com',
//   password: 'dkljsflkasj'
// }).then((superusers) => {
//   urn_log.debug(superusers);
// });
