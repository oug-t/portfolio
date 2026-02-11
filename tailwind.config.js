/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				navy: {
					DEFAULT: '#0a192f',
					light: '#112240',
					lightest: '#233554'
				},
				slate: {
					DEFAULT: '#8892b0',
					light: '#a8b2d1',
					lightest: '#ccd6f6' // Main text
				},
				green: '#64ffda' // The "Neon" accent
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['"Fira Code"', 'monospace']
			}
		}
	},
	plugins: []
};
