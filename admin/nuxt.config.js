import { resolve } from 'path';

export default {
	alias: {
		'uranio': resolve(__dirname, '../../.uranio/lib/client'),
		'uranio-book': resolve(__dirname, '../../.uranio/client/books/atom'),
		'uranio-client': resolve(__dirname, '../../.uranio/lib/client'),
	},
	components: [
		{
			path: '~/components/',
			extensions: ['vue']
		}
	],
	buildDir: '.uranio/client/.nuxt',
	srcDir: '.uranio/client/src',
	target: 'static',
	ssr: false,
	buildModules: [
		'@nuxt/typescript-build',
		'~/modules/mym/index'
	],
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
		color: '#FC2222',
		height: '2px',
		throttle: 200,
		duration: 2000,
		continuous: true
	},
	watchers: {
		// chokidar: {
		//   ignored: [
		//     `${process.cwd()}/.uranio/server/**/*`,
		//     `${process.cwd()}/src/server/**/*`,
		//     `${process.cwd()}/node_modules`,
		//   ]
		// },
		webpack: {
			ignored: [
				`${process.cwd()}/node_modules/**/*`,
				`${process.cwd()}/.uranio/server/**/*`,
				`${process.cwd()}/.uranio/.tmp/**/*`,
				`${process.cwd()}/src/server/**/*`,
				`${process.cwd()}/src/book.ts`,
				`${process.cwd()}/dist/**/*`,
			]
		}
	},
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
