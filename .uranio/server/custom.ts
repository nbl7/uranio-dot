import uranio from "../lib";
import { BLL } from "../lib/api/core/bll/bll";
export class MYBLL extends BLL<"mykart"> {
	constructor() {
		super("mykart");
	}
	public async find<D extends uranio.types.Depth>(
		query: uranio.types.Query<"mykart">,
		options?: uranio.types.Query.Options<"mykart", D>
	): Promise<uranio.types.Molecule<"mykart", D>[]> {
		console.log("STOCC");
		return await super.find(query, options);
	}
}
