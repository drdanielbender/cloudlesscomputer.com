// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			social: [],
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'About',
					link: '/about',
				},
				{
					label: 'Digital Garden',
					autogenerate: { directory: 'dg' },
				},
			],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				Header: './src/components/Header.astro',
				PageFrame: './src/components/PageFrame.astro',
				SiteTitle: './src/components/SiteTitle.astro',
			},
		}),
	],
});
