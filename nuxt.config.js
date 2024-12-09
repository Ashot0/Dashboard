import svgLoader from 'vite-svg-loader';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	typescript: {
		typeCheck: true,
		strict: true,
	},
	css: ['~/assets/styles/index.scss'],
	vite: {
		plugins: [
			svgLoader(),
			Components({
				resolvers: [
					AntDesignVueResolver({
						importStyle: false,
					}),
				],
			}),
		],
	},
	build: {
		transpile: ['lodash-es'],
	},
	nitro: {
		externals: {
			inline: ['lodash-es'],
		},
	},
});
