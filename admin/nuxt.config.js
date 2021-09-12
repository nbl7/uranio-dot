import { resolve } from 'path';

export default {
	alias: {
		'uranio': resolve(__dirname, './src/uranio/client'),
		'uranio-api': resolve(__dirname, './src/uranio/api/'),
		'uranio-core': resolve(__dirname, './src/uranio/api/core/'),
		'uranio-client': resolve(__dirname, './src/uranio/client'),
		'uranio-books': resolve(__dirname, './src/books/'),
		'uranio-books-client': resolve(__dirname, './src/books/'),
	},
	components: [
		{
			path: '~/components/',
			extensions: ['vue']
		}
	],
	buildDir: './.nuxt',
	srcDir: './src',
	target: 'static',
	ssr: false,
	buildModules: [
		'@nuxt/typescript-build',
	],
	typescript: {
		typeCheck: true
	},
	generate: {
		fallback: '404.html',
		exclude: ['/urn-admin'],
	},
	router: {
		trailingSlash: false,
		linkActiveClass: 'urn-active-link',
		linkExactActiveClass: 'urn-exact-active-link'
	},
	loading: {
		color: '#2222FF',
		height: '2px',
		throttle: 200,
		duration: 2000,
		continuous: true
	},
	// watchers: {
	//   webpack: {
	//     ignored: [
	//       `${process.cwd()}/node_modules/**/*`,
	//       `${process.cwd()}/.uranio/server/**/*`,
	//       `${process.cwd()}/.uranio/.tmp/**/*`,
	//       `${process.cwd()}/src/**/*`,
	//       `${process.cwd()}/dist/**/*`,
	//     ]
	//   }
	// },
	hooks: {
		build: {
			before(){
				console.log('BEFORE BUILD');
			},
			compile(){
				console.log('BEFORE COMPILE');
			},
			compiled(){
				console.log('COMPILED');
			}
		}
	}
};
