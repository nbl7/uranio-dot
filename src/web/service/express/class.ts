/**
 * Express class module
 *
 * @packageDocumentation
 */

import {atom_book} from 'urn_book';

import express from 'express';

import cors from 'cors';

import {urn_log} from 'urn-lib';

import {
	AtomName,
	Book
} from '../../types';

import {Service} from '../types';

const express_app = express();

express_app.use(cors());

express_app.use(express.json());

express_app.use(express.urlencoded({extended: true}));

class ExpressWebService implements Service {
	
	constructor(){
		let atom_name:AtomName;
		for(atom_name in atom_book){
			const atom_api = atom_book[atom_name]['api'] as Book.Definition.Api;
			const router = _create_atom_route();
			express_app.use(atom_api.url, router);
		}
	}
	
	listen(ws_port: number, callback:() => void): void {
		express_app.listen(ws_port, callback);
	}
	
}

function _create_atom_route():express.Router{
	
	const router = express.Router();
	
	router.get('/', async (_, res) => {
		res.status(200).send('SUCCESS');
	});
	
	return router;
	
}

export function create():ExpressWebService{
	urn_log.fn_debug(`Create ExpressWebService`);
	return new ExpressWebService();
}
