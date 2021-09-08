/**
 *
 * Autogenerated book from urn-cli
 *
 */
import * as uranio_types from "../uranio/cln/types";

export const atom_book = {
	superuser: {
		properties: {
			email: {
				type: uranio_types.BookPropertyType.EMAIL,
				label: "Email",
				unique: true,
				on_error: () => {
					return "email@email.com";
				},
			},
			password: {
				type: uranio_types.BookPropertyType.ENCRYPTED,
				label: "Password",
				hidden: true,
			},
			groups: {
				type: uranio_types.BookPropertyType.ATOM_ARRAY,
				atom: "group",
				label: "Groups",
				optional: true,
			},
		},
	},
	user: {
		properties: {
			email: {
				type: uranio_types.BookPropertyType.EMAIL,
				label: "Email",
				unique: true,
			},
			password: {
				type: uranio_types.BookPropertyType.ENCRYPTED,
				label: "Password",
				hidden: true,
			},
			groups: {
				type: uranio_types.BookPropertyType.ATOM_ARRAY,
				atom: "group",
				label: "Groups",
				optional: true,
			},
		},
	},
	group: {
		properties: {
			name: {
				type: uranio_types.BookPropertyType.TEXT,
				unique: true,
				label: "Name",
			},
		},
	},
	error: {
		connection: "log",
		properties: {
			status: {
				type: uranio_types.BookPropertyType.INTEGER,
				label: "Status",
			},
			msg: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Message",
			},
			error_code: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Error Code",
			},
			error_msg: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Error Message",
			},
			request: {
				type: uranio_types.BookPropertyType.ATOM,
				label: "Request",
				atom: "request",
				delete_cascade: true,
				optional: true,
			},
			stack: {
				type: uranio_types.BookPropertyType.LONG_TEXT,
				label: "Stack",
				optional: true,
			},
		},
	},
	request: {
		connection: "log",
		properties: {
			full_path: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Full path",
			},
			route_path: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Route path",
				optional: true,
			},
			atom_path: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Atom path",
				optional: true,
			},
			connection_path: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Connection path",
				optional: true,
			},
			method: {
				type: uranio_types.BookPropertyType.ENUM_STRING,
				label: "Method",
				values: ["GET", "POST", "DELETE"],
				optional: true,
			},
			atom_name: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Atom name",
				optional: true,
				on_error: () => {
					return "generic_atom";
				},
			},
			route_name: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Route name",
				optional: true,
			},
			params: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Params",
				optional: true,
			},
			query: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Query",
				optional: true,
			},
			headers: {
				type: uranio_types.BookPropertyType.LONG_TEXT,
				label: "Headers",
				optional: true,
			},
			body: {
				type: uranio_types.BookPropertyType.LONG_TEXT,
				label: "Body",
				optional: true,
			},
			ip: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "IP",
				optional: true,
			},
			is_auth: {
				type: uranio_types.BookPropertyType.BINARY,
				label: "Is auth",
				optional: true,
			},
			auth_action: {
				type: uranio_types.BookPropertyType.ENUM_STRING,
				label: "Auth action",
				values: ["READ", "WRITE", "AUTH"],
				on_error: () => {
					return "READ";
				},
				optional: true,
			},
		},
	},
	mykart: {
		plural: "mykarts",
		properties: {
			title: {
				type: uranio_types.BookPropertyType.TEXT,
				label: `title`,
			},
			product: {
				type: uranio_types.BookPropertyType.ATOM,
				label: "Product",
				atom: "product",
				optional: true,
			},
			media: {
				type: uranio_types.BookPropertyType.ATOM_ARRAY,
				label: "Media",
				atom: "mykart",
				optional: true,
			},
		},
	},
	product: {
		properties: {
			title: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Title 5",
				// validation: {
				//   alphanum: true,
				//   contain_digit: false,
				//   contain_lowercase: true,
				//   contain_uppercase: false,
				//   length: 8,
				//   lowercase: false,
				//   max: 8,
				//   min: 2,
				//   only_letters: false,
				//   only_numbers: false,
				//   reg_ex: /[a-z]/,
				//   uppercase: false
				// },
				on_error: () => {
					return "aaaaaaaa";
				},
			},
			title_no: {
				type: uranio_types.BookPropertyType.TEXT,
				label: "Title No",
				default: "NO",
			},
			description: {
				type: uranio_types.BookPropertyType.LONG_TEXT,
				label: "Description",
			},
			kart: {
				type: uranio_types.BookPropertyType.ATOM,
				label: "Kart",
				optional: true,
				atom: "mykart",
			},
			users: {
				type: uranio_types.BookPropertyType.ATOM_ARRAY,
				label: "Users",
				optional: true,
				atom: "user",
			},
			active: {
				type: uranio_types.BookPropertyType.BINARY,
				label: "Active",
			},
			email: {
				type: uranio_types.BookPropertyType.EMAIL,
				label: "Email",
			},
			password: {
				type: uranio_types.BookPropertyType.ENCRYPTED,
				hidden: true,
				label: "Password",
			},
			type: {
				type: uranio_types.BookPropertyType.ENUM_NUMBER,
				label: "Type Code",
				values: [1, 2, 67.99, 3],
			},
			type_str: {
				type: uranio_types.BookPropertyType.ENUM_STRING,
				label: "Type String",
				values: ["Red", "Green", "Blue"],
			},
			price: {
				type: uranio_types.BookPropertyType.FLOAT,
				label: "Price",
				format: {
					decimal: 2,
				},
				// validation: {
				//   min: 0,
				//   max: 100.3
				// }
			},
			unit: {
				type: uranio_types.BookPropertyType.INTEGER,
				label: "Unit",
				// validation: {
				//   min: 0,
				//   max: 10,
				//   eq: 0
				// }
			},
			categories: {
				type: uranio_types.BookPropertyType.SET_NUMBER,
				label: "Categories",
				// validation: {
				//   length: 2
				// }
			},
			categories_str: {
				type: uranio_types.BookPropertyType.SET_STRING,
				label: "Categories string",
			},
			pub_date: {
				type: uranio_types.BookPropertyType.DAY,
				label: "Pub date",
				// validation: {
				//   min: new Date('2011-03-08')
				// },
			},
			pub_time: {
				type: uranio_types.BookPropertyType.TIME,
				label: "Pub time",
				// validation: {
				//   min: new Date('2011-03-08T00:00:00Z')
				// },
				on_error: () => {
					return new Date();
				},
			},
		},
	},
} as const;
