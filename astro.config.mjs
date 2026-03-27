// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {
				src: './src/assets/logo-cloudlesscomputer.svg',
			},
			customCss: ['./src/styles/custom.css'],
			social: [],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				Header: './src/components/Header.astro',
			},
		}),
	],
});
