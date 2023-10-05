/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-blue': '#63c2ff',
				'custom-hover': '#59aee5'
			}
		},
	},
	plugins: [],
}
