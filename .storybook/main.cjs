const path = require('path');
const { mergeConfig } = require('vite');

module.exports = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss')
				}
			}
		}
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	core: {
		disableTelemetry: true,
		// update it based on your preferences
		enableCrashReports: false // update it based on your preferences
	},

	async viteFinal(config) {
		// Merge custom configuration into the default config
		return mergeConfig(config, {
			// Use the same "resolve" configuration as the app
			resolve: (await import('../vite.config.js')).default.resolve
		});
	},
	// Comment to use Component Story Format (CSF)
	features: {
		storyStoreV7: true
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			resolve: {
				fullySpecified: false,
				extensions: ['.js', '.ts', '.tsx', '.json']
			}
		});
		config.module.rules.push({
			test: [/\.stories\.js$/, /index\.js$/],
			use: [require.resolve('@storybook/source-loader')],
			include: [path.resolve(__dirname, '../src')],
			enforce: 'pre'
		});
		return config;
	},
	docs: {
		autodocs: true
	}
};
