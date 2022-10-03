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
					secondary: '#D926A9',
					accent: '#1FB2A6',
					neutral: '#191D24',
					'base-100': '#4831D4',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			},
			'dark',
			'light'
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
