/**
 * Main module
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.DEBUG);

import uranio from 'uranio';
uranio.init();

// const superuser_bll = uranio.bll.basic.create(`superuser`);

// superuser_bll.count({}).then((count_number) => {
//   urn_log.debug('COUNT SUPERUSER: ', count_number);
// });

// superuser_bll.find({}).then((superusers) => {
//   urn_log.debug(superusers);
// });

// superuser_bll.insert_new({
//   email: 's@s.com',
//   password: 'dkljsflkasj'
// }).then((superusers) => {
//   urn_log.debug(superusers);
// });

// async function get_token(){
//   const auth_su_bll = uranio.bll.auth.create('superuser');
//   const token = await auth_su_bll.authenticate('s@s.com', 'dkljsflkasj');
//   console.log(token);
// }
// get_token();

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJjN2JlNTU4ZT';
token += 'cyYjczYWU5MTI0YzEiLCJhdXRoX2F0b21fbmFtZSI6InN1cGVydXNlciIsImdyb3Vwc';
token += 'yI6W10sImlhdCI6MTYzOTc1NDMwM30.8lQXqC7d5tohviJ1KJiBOICIfZ38pPvSQSijL7csE74';

async function get_passport(){
	const auth_su_bll = uranio.bll.auth.create('superuser');
	return await auth_su_bll.get_passport(token);
}

async function get_superuser(){
	const su_bll = uranio.bll.create('superuser', await get_passport());
	const sus = await su_bll.find({});
	urn_log.debug(sus);
}

get_superuser();


