import * as types_202516519 from "../uranio/cln/types";
export const dock_book = {
	superuser: {
		dock: {
			url: "/superusers",
		},
	},
	user: {
		dock: {
			url: "/users",
		},
	},
	group: {
		dock: {
			url: "/groups",
		},
	},
	error: {
		dock: {
			url: "/errors",
		},
	},
	request: {
		dock: {
			url: "/requests",
		},
	},
	customer: {
		plural: "customers",
		dock: {
			url: "/customers",
			routes: {
				pippi: {
					method: types_202516519.RouteMethod.GET,
					action: types_202516519.AuthAction.READ,
					url: "/pippo",
					return: Number,
				},
			},
		},
	},
	mykart: {
		plural: "mykarts",
		dock: {
			url: "/mykarts",
		},
		// bll: () => {
		//   console.log(some + `s`);
		//   return new MYBLL();
		// }
	},
	product: {
		dock: {
			url: "/products",
			routes: {
				myroute: {
					method: types_202516519.RouteMethod.GET,
					action: types_202516519.AuthAction.READ,
					url: "/myroute",
				},
			},
		},
	},
} as const;
