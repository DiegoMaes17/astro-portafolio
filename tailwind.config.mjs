/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				'white-prefer': '#f2f2f2',
				'deg-c': ' rgba(0,240,124,1)',
				'deg-m': 'rgba(0,190,155,1)',
				'deg-f': 'rgba(1,116,95,1)',
			},
		
		dropShadow:{
			'per': '0 0px 15px rgba(0,190,155,1)',

			'blue-shadow': '0px 0px 15px rgb(34, 211, 238)',

			'indigo-shadow': '0px 0px 5px rgb(125, 140, 248)',

			'blue-shadow-smooth': '0px 0px 5px rgb(96, 165, 250)',

			'indigo-shadow-smoth': '0px 0px 5px rgb(125, 140, 248)',

			'shadow-teal-500': ' 0px 0px 5px rgb(20 184 166)' 

		},
		fontFamily:{
			'Roboto': ['Roboto', 'sans-serif']
		}
		},
		variants: {
			borderWidth: ['responsive','hover','focus']
		}
	},
	plugins: [],
	mode:'jit'
}
