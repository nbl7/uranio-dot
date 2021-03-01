
import uranio from 'uranio';

export class my_prod_bll extends uranio.core.bll.BLL<'product'>{
	constructor(to:uranio.types.TokenObject){
		super('product', to);
	}
}
