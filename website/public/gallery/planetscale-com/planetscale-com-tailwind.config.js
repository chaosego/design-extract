/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(45, 100%, 97%)',
            '100': 'hsl(45, 100%, 94%)',
            '200': 'hsl(45, 100%, 86%)',
            '300': 'hsl(45, 100%, 76%)',
            '400': 'hsl(45, 100%, 64%)',
            '500': 'hsl(45, 100%, 50%)',
            '600': 'hsl(45, 100%, 40%)',
            '700': 'hsl(45, 100%, 32%)',
            '800': 'hsl(45, 100%, 24%)',
            '900': 'hsl(45, 100%, 16%)',
            '950': 'hsl(45, 100%, 10%)',
            DEFAULT: '#f2b600'
        },
        secondary: {
            '50': 'hsl(18, 90%, 97%)',
            '100': 'hsl(18, 90%, 94%)',
            '200': 'hsl(18, 90%, 86%)',
            '300': 'hsl(18, 90%, 76%)',
            '400': 'hsl(18, 90%, 64%)',
            '500': 'hsl(18, 90%, 50%)',
            '600': 'hsl(18, 90%, 40%)',
            '700': 'hsl(18, 90%, 32%)',
            '800': 'hsl(18, 90%, 24%)',
            '900': 'hsl(18, 90%, 16%)',
            '950': 'hsl(18, 90%, 10%)',
            DEFAULT: '#f35815'
        },
        accent: {
            '50': 'hsl(208, 89%, 97%)',
            '100': 'hsl(208, 89%, 94%)',
            '200': 'hsl(208, 89%, 86%)',
            '300': 'hsl(208, 89%, 76%)',
            '400': 'hsl(208, 89%, 64%)',
            '500': 'hsl(208, 89%, 50%)',
            '600': 'hsl(208, 89%, 40%)',
            '700': 'hsl(208, 89%, 32%)',
            '800': 'hsl(208, 89%, 24%)',
            '900': 'hsl(208, 89%, 16%)',
            '950': 'hsl(208, 89%, 10%)',
            DEFAULT: '#0b6ec5'
        },
        'neutral-50': '#414141',
        'neutral-100': '#c1c1c1',
        'neutral-200': '#737373',
        'neutral-300': '#ffffff',
        'neutral-400': '#000000',
        'neutral-500': '#111111',
        'neutral-600': '#ebebeb',
        background: '#fafafa',
        foreground: '#414141'
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '16px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ]
    },
    spacing: {
        '1': '4px',
        '20': '80px',
        '24': '96px'
    },
    borderRadius: {
        full: '9999px'
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    transitionDuration: {
        '150': '0.15s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    container: {
        center: true,
        padding: '96px'
    },
    maxWidth: {
        container: '1280px'
    }
},
  },
};
