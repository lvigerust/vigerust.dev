/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#CCF381',
					secondary: '#2dd4bf',
					accent: '#d8b4fe',
					neutral: '#191D24',
					'base-100': '#4831D4',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#E26D5C'
				}
			},
			'dark',
			'light'
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
