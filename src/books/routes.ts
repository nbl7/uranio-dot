/**
 *
 * Autogenerated book from urn-cli
 *
 */
import uranio from "uranio";
export const routes_book = {
	superuser: {
		dock: {
			url: "/superusers",
			auth: "/superauth",
		},
	},
	user: {
		dock: {
			url: "/users",
			auth: "/auth",
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
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
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
			auth: "/myauthkart",
		},
		// bll: () => {
		//   console.log(some + `s`);
		//   return new MYBLL();
		// }
	},
	product: {
		dock: {
			url: "/products",
			auth: "/proauths",
			routes: {
				myroute: {
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.READ,
					url: "/myroute",
				},
			},
		},
	},
} as const;
