/** @type {import('tailwindcss').Config} */
module.exports = {
	// Enable dark mode with class strategy
	darkMode: "class", // Use the 'dark' class for dark mode
	content: [
	  './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Update this path to match your project structure
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx}', // Ensure these paths match where your components are located
	  './pages/**/*.{js,ts,jsx,tsx}',
	  './components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		animation: {
			move: "move 5s linear infinite",
		  },
		  keyframes: {
			move: {
			  "0%": { transform: "translateX(-200px)" },
			  "100%": { transform: "translateX(200px)" },
			},
		  },
		// Extending colors with your custom variables
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  }
		},
		// Custom border-radius values
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		}
	  }
	},
	plugins: [
	  require("tailwindcss-animate") // Adding the tailwindcss-animate plugin
	],
  };
  