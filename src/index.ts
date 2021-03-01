/**
 * Index module for URANIO DOT
 *
 * @packageDocumentation
 */

import { Project, Node, ts, VariableDeclaration } from 'ts-morph';

const project = new Project({tsConfigFilePath: `/home/nbl7/repos/uranio/urn-dot/tsconfig.json`});
const sourceFile = project.addSourceFileAtPath(`/home/nbl7/repos/uranio/urn-dot/src/book.ts`);

sourceFile.forEachChild((node:Node) => {
	switch(node.getKind()){
		case ts.SyntaxKind.ImportDeclaration:{
			_change_realtive_import(node);
			break;
		}
		case ts.SyntaxKind.VariableStatement:{
			let var_decl = _find_atom_book_declaration(node);
			if(var_decl){
				var_decl = _remove_type_reference(var_decl);
				var_decl = _remove_bll_property_assignment(var_decl);
				return false;
			}
			break;
		}
		case ts.SyntaxKind.EndOfFileToken:{
			break;
		}
		default:{
			console.log(node.getKindName());
		}
	}
});

console.log(sourceFile.print());

function _change_realtive_import(node:Node)
		:Node{
	const str_lit = node.getFirstChildByKind(ts.SyntaxKind.StringLiteral);
	if(str_lit){
		const text = str_lit.getText();
		if(text.includes('./')){
			str_lit.replaceWithText(text.replace('./','../src/'));
		}
	}
	return node;
}

function _remove_bll_property_assignment(var_decl:VariableDeclaration){
	const obj_lit_exp = var_decl.getFirstChildByKind(ts.SyntaxKind.ObjectLiteralExpression);
	if(obj_lit_exp){
		const prop_assi = obj_lit_exp.getChildrenOfKind(ts.SyntaxKind.PropertyAssignment);
		for(const p of prop_assi){
			const p_obj_lit_exp = p.getFirstChildByKind(ts.SyntaxKind.ObjectLiteralExpression);
			if(p_obj_lit_exp){
				const prop_prop = p_obj_lit_exp.getChildrenOfKind(ts.SyntaxKind.PropertyAssignment);
				for(const pp of prop_prop){
					if(pp.getName() === 'bll'){
						pp.remove();
					}
				}
			}
		}
	}
	return var_decl;
}

function _remove_type_reference(var_decl:VariableDeclaration){
	const type_ref = var_decl.getFirstChildByKind(ts.SyntaxKind.TypeReference);
	if(type_ref){
		var_decl.removeType();
	}
	return var_decl;
}

function _find_atom_book_declaration(node:Node){
	const var_decl_list = node.getFirstChildByKind(ts.SyntaxKind.VariableDeclarationList);
	if(var_decl_list){
		const var_decl = var_decl_list.getFirstChildByKind(ts.SyntaxKind.VariableDeclaration);
		if(var_decl){
			const name = var_decl.getName();
			if(name === 'atom_book'){
				return var_decl;
			}
		}
	}
	return undefined;
}

