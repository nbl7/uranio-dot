/**
 *
 * Autogenerated books from urn-cli
 *
 */
import uranio from "uranio";
export const atom_book = {
	superuser: {
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY,
		},
		properties: {
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: "Email",
				unique: true,
				on_error: () => {
					return "email@email.com";
				},
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: "Password",
				hidden: true,
			},
			groups: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				atom: "group",
				label: "Groups",
				optional: true,
			},
		},
	},
	user: {
		security: {
			type: uranio.types.BookSecurityType.GRANULAR,
		},
		properties: {
			email: {
				type: uranio.types.BookPropertyType.EMAIL,
				label: "Email",
				unique: true,
			},
			password: {
				type: uranio.types.BookPropertyType.ENCRYPTED,
				label: "Password",
				hidden: true,
			},
			groups: {
				type: uranio.types.BookPropertyType.ATOM_ARRAY,
				atom: "group",
				label: "Groups",
				optional: true,
			},
		},
	},
	group: {
		properties: {
			name: {
				type: uranio.types.BookPropertyType.TEXT,
				unique: true,
				label: "Name",
			},
		},
	},
	error: {
		connection: "log",
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY,
		},
		properties: {
			status: {
				type: uranio.types.BookPropertyType.INTEGER,
				label: "Status",
			},
			msg: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Message",
			},
			error_code: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Error Code",
			},
			error_msg: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Error Message",
			},
			request: {
				type: uranio.types.BookPropertyType.ATOM,
				label: "Request",
				atom: "request",
				delete_cascade: true,
				optional: true,
			},
			stack: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: "Stack",
				optional: true,
			},
		},
	},
	request: {
		connection: "log",
		security: {
			type: uranio.types.BookSecurityType.UNIFORM,
			_r: uranio.types.BookPermissionType.NOBODY,
		},
		properties: {
			url: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "URL",
			},
			ip: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "IP",
			},
			params: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Params",
				optional: true,
			},
			query: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Query",
				optional: true,
			},
			body: {
				type: uranio.types.BookPropertyType.LONG_TEXT,
				label: "Body",
				optional: true,
			},
			atom_name: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Atom name",
				on_error: () => {
					return "generic_atom";
				},
			},
			auth_action: {
				type: uranio.types.BookPropertyType.ENUM_STRING,
				label: "Auth action",
				values: ["READ", "WRITE", "AUTH"],
				on_error: () => {
					return "READ";
				},
			},
		},
	},
	product: {
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Title",
			},
		},
	},
	media: {
		properties: {
			title: {
				type: uranio.types.BookPropertyType.TEXT,
				label: "Title",
			},
		},
	},
} as const;
export const bll_book = {
	superuser: {},
	user: {},
	group: {},
	error: {},
	request: {},
	product: {},
	media: {},
} as const;
export const api_book = {
	superuser: {
		api: {
			url: "superusers",
			auth: "superauth",
		},
	},
	user: {
		api: {
			url: "users",
			auth: "auth",
		},
	},
	group: {
		api: {
			url: "groups",
		},
	},
	error: {
		api: {
			url: "errors",
		},
	},
	request: {
		api: {
			url: "requests",
		},
	},
	product: {
		api: {
			url: "products",
		},
	},
	media: {
		api: {
			url: "medias",
		},
	},
} as const;
