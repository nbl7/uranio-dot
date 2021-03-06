
import uranio from 'uranio';

export class my_prod_bll extends uranio.core.bll.BLL<'product'>{
	constructor(to?:uranio.types.TokenObject){
		super('product', to);
	}
	public async find<D extends uranio.types.Depth>(query:uranio.types.Query<'product'>, options?:uranio.types.Query.Options<'product',D>)
			:Promise<uranio.types.Molecule<'product',D>[]>{
		console.warn('kdajflkjdfAJFHDKSHFLKSDHFLKSDHFLKHSDLKFHDSKLHFLSDKHFLKSDHFLKSHDFKLSDH');
		return await this._al.select(query, options);
	}
}

export function return_bll(token_object?:uranio.types.TokenObject)
		:uranio.core.bll.BLL<'product'>{
		
	return new my_prod_bll(token_object);
}
