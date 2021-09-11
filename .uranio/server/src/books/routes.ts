/**
 *
 * Autogenerated book from urn-cli
 *
 */
import * as uranio_types from "../uranio/types";
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
	mykart: {
		dock: {
			url: "/mykarts",
			auth: "/myauthkart",
		},
	},
	product: {
		dock: {
			url: "/products",
			auth: "/proauths",
			routes: {
				pippo: {
					method: uranio_types.RouteMethod.GET,
					action: uranio_types.AuthAction.READ,
					url: "/pippos",
					return: Number,
				},
				pippi2: {
					method: uranio_types.RouteMethod.GET,
					action: uranio_types.AuthAction.READ,
					url: "/pippi",
					return: Number,
				},
			},
		},
	},
} as const;
