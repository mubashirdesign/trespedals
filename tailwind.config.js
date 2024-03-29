// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	corePlugins: {},
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./**/*.html',
			'./**/*.liquid'
		]
	},
	theme: {
		extend: {
			backgroundColors: colors,
			borderColor: {
				DEFAULT: colors.lightBorder,
			},
			borderRadius: {
				none: '0',
				xs: '0.1875rem',
				sm: '0.25rem',
				default: '0.2994791567325592rem',
				lg: '0.3125rem',
				xl: '0.375rem',
				'2xl': '0.5rem',
				'3xl': '0.5625rem',
				'4xl': '0.625rem',
				'5xl': '0.65450119972229rem',
				'6xl': '0.75rem',
				'7xl': '1rem',
				'8xl': '1.25rem',
				'9xl': '1.75rem',
				'10xl': '2.5rem',
				'11xl': '3.125rem',
				'12xl': '4.375rem'
			},
			outline: {
				pink: '2px solid #b46b7a',
			}
		},
		colors: {
			transparent: 'transparent',
			'current': 'currentColor',
			'primary': '#000',
			'primary2': '#000',
			'secondary': '#000',
			'secondary2': '#000',
			'tertiary': '#000',
			'tertiary2': '#000',
			'black': '#000',
			'blue': '#0066ff',
			'lightPrimaryBlue': '#0066ff',
			'white': '#fff',
			'brown': '#fefefe',
			'lightBorder': '#E3E3E3',
			'grey': '#F4F4F4',
			'success': '#2DCB48',
			'success2': '#28B440', 
			'warning': '#FFCC00',
			'primaryRed': '#cc0000',
			'warning2': '#E4B80B',
			'error': '#F43319',
			'error2': '#D12D17',
			gray: colors.gray,
			indigo: colors.indigo,
			'button': {
				'primary': '#000', 
				'hover': '#000',
				'active': '#000',
				'text-disabled': '#000',
				'bg-disabled': 'rgba(0, 0, 0, 0.1)',
				'light-border': '#000'
			}
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1rem',
				md: '2rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '2rem',
			},
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			mencken: ['mencken-std', 'sans-serif'],
			arimo: ['Arimo', 'sans-serif'],
			futura: ['futura-pt', 'sans-serif'],
		},
		fontSize: {
			'2xs': '0.625rem',
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.5rem',
			'2xl': '1.75rem',
			'3xl': '2rem',
			'4xl': '2.25rem',
			'5xl': '2.75rem',
			'6xl': '3.5rem',
			'7xl': '6rem'
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		},
		screens: {
			'xsm': '400px',
			'sm': '640px',
			'md': '768px',
			'lg': '1110px',
			'xl': '1440px',
			'2xl': '1440px',
		},
		spacing: {
			px: '1px',
			0: '0px',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem',
			100: '25rem',
			125: '30rem',
			130: '32rem',
			200: '50rem',
		},
		textColors: colors,
	},
	variants: {},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')
	]
}
