/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(41, 34%, 97%)',
            '100': 'hsl(41, 34%, 94%)',
            '200': 'hsl(41, 34%, 86%)',
            '300': 'hsl(41, 34%, 76%)',
            '400': 'hsl(41, 34%, 64%)',
            '500': 'hsl(41, 34%, 50%)',
            '600': 'hsl(41, 34%, 40%)',
            '700': 'hsl(41, 34%, 32%)',
            '800': 'hsl(41, 34%, 24%)',
            '900': 'hsl(41, 34%, 16%)',
            '950': 'hsl(41, 34%, 10%)',
            DEFAULT: '#e1d7c2'
        },
        secondary: {
            '50': 'hsl(36, 83%, 97%)',
            '100': 'hsl(36, 83%, 94%)',
            '200': 'hsl(36, 83%, 86%)',
            '300': 'hsl(36, 83%, 76%)',
            '400': 'hsl(36, 83%, 64%)',
            '500': 'hsl(36, 83%, 50%)',
            '600': 'hsl(36, 83%, 40%)',
            '700': 'hsl(36, 83%, 32%)',
            '800': 'hsl(36, 83%, 24%)',
            '900': 'hsl(36, 83%, 16%)',
            '950': 'hsl(36, 83%, 10%)',
            DEFAULT: '#eb9d2a'
        },
        accent: {
            '50': 'hsl(70, 16%, 97%)',
            '100': 'hsl(70, 16%, 94%)',
            '200': 'hsl(70, 16%, 86%)',
            '300': 'hsl(70, 16%, 76%)',
            '400': 'hsl(70, 16%, 64%)',
            '500': 'hsl(70, 16%, 50%)',
            '600': 'hsl(70, 16%, 40%)',
            '700': 'hsl(70, 16%, 32%)',
            '800': 'hsl(70, 16%, 24%)',
            '900': 'hsl(70, 16%, 16%)',
            '950': 'hsl(70, 16%, 10%)',
            DEFAULT: '#eeefe9'
        },
        'neutral-50': '#000000',
        'neutral-100': '#4d4f46',
        'neutral-200': '#374151',
        'neutral-300': '#23251d',
        'neutral-400': '#9ea096',
        'neutral-500': '#65675e',
        'neutral-600': '#bfc1b7',
        'neutral-700': '#ffffff',
        'neutral-800': '#b6b7af',
        'neutral-900': '#131316',
        background: '#e5e7e0',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'Source Code Pro',
            'sans-serif'
        ],
        heading: [
            'Open Runde',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '16px'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '13px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '20px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '25.7143px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '27px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '28px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '32px',
                letterSpacing: '-0.6px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '54px'
            }
        ],
        '21.4286': [
            '21.4286px',
            {
                lineHeight: '30px',
                letterSpacing: '-0.535714px'
            }
        ],
        '19.2857': [
            '19.2857px',
            {
                lineHeight: '30px',
                letterSpacing: '-0.482143px'
            }
        ]
    },
    spacing: {
        '5': '20px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '30': '120px',
        '36': '144px',
        '55': '220px',
        '1px': '1px'
    },
    borderRadius: {
        xs: '2px',
        sm: '5px',
        md: '8px',
        full: '9999px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0px 6px 2px'
    },
    screens: {
        '1px': '1px',
        sm: '640px',
        md: '768px',
        '900px': '900px',
        lg: '1024px',
        '1160px': '1160px',
        xl: '1280px',
        '2xl': '1536px'
    },
    transitionDuration: {
        '150': '0.15s',
        '300': '0.3s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
