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

express_service.listen(() => {
	
	urn_log.debug(`Listening on port ${uranio.conf.get('service_port')}...`);
	
});

// setTimeout(() => {
//   uranio.trx.hooks.superusers.authenticate('uranio@uranio.xyz', 'kcXkaF3Ad7KC3G3t').then((data) => {
//     if(data.success === true){
//       return data.payload.token;
//     }
//   }).then((token) => {
//     // const atom_shapes:uranio.types.AtomShape<'mykart'>[] = [
//     //   {title: 'ciacco328'},
//     //   {title: 'porco43'}
//     // ];
//     const ids = ['61eef8b5afcaf058955a7c4d', '61eef8b5afcaf058955a7c4c'];
//     uranio.trx.hooks.mykarts.delete_multiple(ids, {}, token).then((data) => {
//       console.log(data);
//     });
//   });
// }, 6000);

// const auth_bll = uranio.core.bll.auth.create('superuser');
// auth_bll.authenticate('uranio@uranio.xyz', 'kcXkaF3Ad7KC3G3t').then((token) => {
//   return auth_bll.get_passport(token);
// }).then((passport) => {
//   const mykart_bll = uranio.core.bll.create('mykart', passport);
//   // const atom_shapes:uranio.types.AtomShape<'mykart'>[] = [
//   //   {title: 'ciacco3'},
//   //   {title: 'porco4'}
//   // ];
//   const ids = ['61eea7c24110520f1f9edc89', '61eea7b9a03dcb0ef4149c85'];
//   // return mykart_bll.update_multiple(ids, atom_shapes[0]);
//   // const atom_shape = {
//   //   title: 'ciacco2'
//   // };
//   // return mykart_bll.insert_new(atom_shape);
//   return mykart_bll.remove_multiple(ids);
// }).then((response) => {
//   console.log(response);
// });

