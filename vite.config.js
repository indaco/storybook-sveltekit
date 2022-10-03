import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib/'),
			$components: path.resolve('./src/lib/components')
		}
	},
	test: {
		// ...
		globals: true,
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom'
	}
};

export default config;
