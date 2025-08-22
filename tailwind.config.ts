import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				jarvis: {
					cyan: 'hsl(var(--jarvis-cyan))',
					'cyan-bright': 'hsl(var(--jarvis-cyan-bright))',
					'cyan-dim': 'hsl(var(--jarvis-cyan-dim))',
					dark: 'hsl(var(--jarvis-dark))',
					panel: 'hsl(var(--jarvis-panel))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						opacity: '1',
						filter: 'brightness(1) drop-shadow(0 0 10px hsl(var(--jarvis-cyan)))'
					},
					'20%, 24%, 55%': {
						opacity: '0.1',
						filter: 'brightness(0.3) drop-shadow(0 0 5px hsl(var(--jarvis-cyan) / 0.3))'
					}
				},
				'tech-pulse': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(1)',
						boxShadow: '0 0 5px hsl(var(--jarvis-cyan) / 0.3)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)',
						boxShadow: '0 0 25px hsl(var(--jarvis-cyan) / 0.8), 0 0 50px hsl(var(--jarvis-cyan) / 0.4)'
					}
				},
				'electric-arc': {
					'0%, 100%': {
						opacity: '0.2',
						filter: 'hue-rotate(0deg) brightness(1)'
					},
					'25%': {
						opacity: '0.8',
						filter: 'hue-rotate(10deg) brightness(1.3)'
					},
					'50%': {
						opacity: '1',
						filter: 'hue-rotate(-10deg) brightness(1.5)'
					},
					'75%': {
						opacity: '0.6',
						filter: 'hue-rotate(5deg) brightness(1.2)'
					}
				},
				'cyber-blink': {
					'0%, 90%, 100%': { opacity: '1' },
					'5%, 15%, 25%': { opacity: '0.1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'circuit-pulse': 'circuit-pulse 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'neon-breathe': 'neon-breathe 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.5s ease-out',
				'neon-flicker': 'neon-flicker 2.5s linear infinite',
				'tech-pulse': 'tech-pulse 2s ease-in-out infinite',
				'electric-arc': 'electric-arc 1.8s ease-in-out infinite',
				'cyber-blink': 'cyber-blink 3s linear infinite'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-panel': 'var(--gradient-panel)',
				'gradient-glow': 'var(--gradient-glow)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
