// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			favicon: '/favicon.svg',
			logo: {
				light: './src/assets/cloudless-computer-sun-logo-light.svg',
				dark: './src/assets/cloudless-computer-sun-logo-dark.svg',
			},
			customCss: ['./src/styles/custom.css'],
			social: [],
			sidebar: [
				{
					label: 'Digital Garden',
					autogenerate: { directory: 'dg' },
				},
			],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				Header: './src/components/Header.astro',
			},
		}),
	],
});
