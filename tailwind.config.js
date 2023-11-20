import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('tailwindcss-opentype'),
		addDynamicIconSelectors()
	],
	daisyui: {
		themes: [
			{
				off: {
					primary: '#201a17',
					secondary: '#52443d',
					'base-100': '#faf7f5'
				}
			},
			{
				dark: {
					primary: '#faf7f5',
					secondary: '#ebc3a8',
					'base-100': '#201a17'
				}
			}
		]
	}
};
