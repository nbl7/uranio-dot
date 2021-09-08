import * as bll_21212 from "./lib/api/core/bll";
import * as types_202516519 from "./lib/srv/types";
export class MYBLL extends bll_21212.BLL<"mykart"> {
	constructor() {
		super("mykart");
	}
	public async find<D extends types_202516519.Depth>(
		query: types_202516519.Query<"mykart">,
		options?: types_202516519.Query.Options<"mykart", D>
	): Promise<types_202516519.Molecule<"mykart", D>[]> {
		console.log("STOCC");
		return await super.find(query, options);
	}
}
