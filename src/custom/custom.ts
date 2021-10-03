import uranio from 'uranio';

export class MYBLL extends uranio.core.bll.BLL<'mykart'>{
	constructor(){
		super('mykart');
	}
	public async find<D extends uranio.types.Depth>(
		query: uranio.types.Query<'mykart'>,
		options?: uranio.types.Query.Options<'mykart', D>
	):Promise<uranio.types.Molecule<'mykart', D>[]>{
		console.log('STOCC8');
		return  await super.find(query, options);
	}
}
