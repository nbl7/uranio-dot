/**
 *
 * Autogenerated book from urn-cli
 *
 */
import { some } from "../s";
import { MYBLL } from "../custom";
export const bll_book = {
	superuser: {},
	user: {},
	group: {},
	error: {},
	request: {},
	mykart: {
		bll: () => {
			console.log(some + `s22`);
			return new MYBLL();
		},
	},
	product: {},
} as const;
