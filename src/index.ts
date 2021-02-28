/**
 * Index module for URANIO DOT
 *
 * @packageDocumentation
 */

// import fs from 'fs';

// import {atom_book} from './book';

// const stringified = JSON.stringify(atom_book, (_, v) => {
//   return (typeof v === 'function' ) ? v.toString() : v;
// }, '\t');

// fs.writeFileSync(`${__dirname}/../.urn/nbook.ts`, stringified);

// console.log(__dirname);

// const read = fs.readFileSync(`${__dirname}/book.js`, 'utf8');

// const splitted = read.split('exports.atom_book = {');
// const part = splitted[1];

// let count_brackets = 0;
// let i = 0;
// for(i = 0; i < part.length; i++){
//   const char = part[i];
//   if(char !== '{' && char !== '}'){
//     continue;
//   }
//   if(char === '{'){
//     count_brackets++;
//   }
//   if(char === '}'){
//     count_brackets--;
//   }
//   if(count_brackets === -1){
//     break;
//   }
// }

// const atom_book = `{${part.slice(0,i+1)}`;
// console.log(atom_book);



// import ts from "typescript";

// const source = "let x: string  = 'string'";

// const result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS }});

// console.log(JSON.stringify(result));


// import {BLL} from './urn-core/bll/bll';

// import {
//   TokenObject,
//   Depth,
//   Molecule
// } from './urn-core/types';

// export class my_class extends BLL<'product'> {
//   constructor(token_object?:TokenObject){
//     super('product', token_object);
//   }
//   public async find_by_id<D extends Depth>(id:string,options:unknown)
//       :Promise<Molecule<'product', D>>{
//     console.log('AAAAAAAAAAAAAAAAAAAAA',id, options);
//     return await super.find_by_id(id) as Molecule<'product',D>;
//   }
// }

// export function my_bll(token_object:TokenObject)
//       :BLL<'product'>{
//   return new my_class(token_object);
// }
