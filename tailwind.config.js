export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f5f7ff',
                    100: '#ebefff',
                    200: '#d6ddff',
                    300: '#b3bfff',
                    400: '#8a94ff',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    950: '#1e1b4b',
                },
                secondary: {
                    50: '#fdf4f3',
                    100: '#fbe8e6',
                    200: '#f9d5d1',
                    300: '#f4b6af',
                    400: '#ea8c7f',
                    500: '#e16b5c',
                    600: '#cf4b3a',
                    700: '#bd392a',
                    800: '#9a3226',
                    900: '#7e2e24',
                    950: '#44160f',
                },
                accent: {
                    50: '#edfcf5',
                    100: '#d3f8e5',
                    200: '#aaf0d0',
                    300: '#73e2b4',
                    400: '#3dcb93',
                    500: '#1fb079',
                    600: '#158f64',
                    700: '#137253',
                    800: '#125b44',
                    900: '#114b39',
                    950: '#082a21',
                },
                dark: {
                    DEFAULT: '#1a1a1a',
                    50: '#f7f7f7',
                    100: '#e3e3e3',
                    200: '#c8c8c8',
                    300: '#a4a4a4',
                    400: '#818181',
                    500: '#666666',
                    600: '#515151',
                    700: '#434343',
                    800: '#383838',
                    900: '#1a1a1a',
                    950: '#0f0f0f',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            boxShadow: {
                soft: '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
                'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url('/src/assets/images/hero-pattern.jpg')",
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
};