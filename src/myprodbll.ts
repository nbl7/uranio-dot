
import uranio from 'uranio';
// import {BLL} from '../.urn/urn-core/bll/bll';

// @uranio.core.bll.extend_class('product')
// export class my_prod_bll {
//   constructor(_to?:uranio.types.TokenObject){
//     // super('product', to);
//   }
//   public async find<D extends uranio.types.Depth>(query:uranio.types.Query<'product'>, options?:uranio.types.Query.Options<'product',D>)
//       :Promise<uranio.types.Molecule<'product',D>[]>{
//     console.warn('kdajflkjdfAJFHDKSHFLKSDHFLKSDHFLKHSDLKFHDSKLHFLSDKHFLKSDHFLKSHDFKLSDH');
//     return await this._al.select(query, options);
//   }
// }

// export interface my_prod_bll extends uranio.core.bll.BLL<'product'> {}

// // const a = new my_prod_bll();
// // console.log(a.atom_name);

export function return_bll(token_object?:uranio.types.TokenObject)
		:uranio.core.bll.BLL<'product'>{
	class my_prod_bll extends uranio.core.bll.BLL<'product'>{
		constructor(to?:uranio.types.TokenObject){
			super('product', to);
		}
		public async find<D extends uranio.types.Depth>(query:uranio.types.Query<'product'>, options?:uranio.types.Query.Options<'product',D>)
				:Promise<uranio.types.Molecule<'product',D>[]>{
			console.warn('kdajflkjdfAJFHDKSHFLKSDHFLKSDHFLKHSDLKFHDSKLHFLSDKHFLKSDHFLKSHDFKLSDH');
			return await this._al.select(query, options);
		}
	}
	return new my_prod_bll(token_object);
}

// type bll_return = new (...args:any[]) => uranio.core.bll.BLL<'product'>;

// export const my_prod_bll = (): bll_return => {
//   return class extends uranio.core.bll.BLL<'product'> {
//     constructor(to?:uranio.types.TokenObject){
//       super('product', to);
//     }
//     public async find<D extends uranio.types.Depth>(query:uranio.types.Query<'product'>, options?:uranio.types.Query.Options<'product',D>)
//         :Promise<uranio.types.Molecule<'product',D>[]>{
//       console.warn('kdajflkjdfAJFHDKSHFLKSDHFLKSDHFLKHSDLKFHDSKLHFLSDKHFLKSDHFLKSHDFKLSDH');
//       return await this._al.select(query, options);
//     }
//   };
// };



// export class my_prod_bll extends uranio.core.bll.BLL<'product'> {
// export class my_prod_bll extends BLL<'product'> {
//   constructor(to?:uranio.types.TokenObject){
//     super('product', to);
//   }
//   public async find<D extends uranio.types.Depth>(query:uranio.types.Query<'product'>, options?:uranio.types.Query.Options<'product',D>)
//       :Promise<uranio.types.Molecule<'product',D>[]>{
//     console.warn('kdajflkjdfAJFHDKSHFLKSDHFLKSDHFLKHSDLKFHDSKLHFLSDKHFLKSDHFLKSHDFKLSDH');
//     return await this._al.select(query, options);
//   }
// }
