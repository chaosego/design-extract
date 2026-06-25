/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(272, 100%, 97%)',
            '100': 'hsl(272, 100%, 94%)',
            '200': 'hsl(272, 100%, 86%)',
            '300': 'hsl(272, 100%, 76%)',
            '400': 'hsl(272, 100%, 64%)',
            '500': 'hsl(272, 100%, 50%)',
            '600': 'hsl(272, 100%, 40%)',
            '700': 'hsl(272, 100%, 32%)',
            '800': 'hsl(272, 100%, 24%)',
            '900': 'hsl(272, 100%, 16%)',
            '950': 'hsl(272, 100%, 10%)',
            DEFAULT: '#8a05ff'
        },
        secondary: {
            '50': 'hsl(260, 100%, 97%)',
            '100': 'hsl(260, 100%, 94%)',
            '200': 'hsl(260, 100%, 86%)',
            '300': 'hsl(260, 100%, 76%)',
            '400': 'hsl(260, 100%, 64%)',
            '500': 'hsl(260, 100%, 50%)',
            '600': 'hsl(260, 100%, 40%)',
            '700': 'hsl(260, 100%, 32%)',
            '800': 'hsl(260, 100%, 24%)',
            '900': 'hsl(260, 100%, 16%)',
            '950': 'hsl(260, 100%, 10%)',
            DEFAULT: '#e7dbff'
        },
        accent: {
            '50': 'hsl(201, 100%, 97%)',
            '100': 'hsl(201, 100%, 94%)',
            '200': 'hsl(201, 100%, 86%)',
            '300': 'hsl(201, 100%, 76%)',
            '400': 'hsl(201, 100%, 64%)',
            '500': 'hsl(201, 100%, 50%)',
            '600': 'hsl(201, 100%, 40%)',
            '700': 'hsl(201, 100%, 32%)',
            '800': 'hsl(201, 100%, 24%)',
            '900': 'hsl(201, 100%, 16%)',
            '950': 'hsl(201, 100%, 10%)',
            DEFAULT: '#e0f4ff'
        },
        'neutral-50': '#e3e3e3',
        'neutral-100': '#0d0d0d',
        'neutral-200': '#ffffff',
        'neutral-300': '#000000',
        'neutral-400': '#6b6b6b',
        'neutral-500': '#4d4d4d',
        'neutral-600': '#fce9ea',
        'neutral-700': '#272727',
        'neutral-800': '#8f8f8f',
        'neutral-900': '#f4f0ff',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'PPNeueMontrealMono',
            'sans-serif'
        ],
        heading: [
            'Roobert',
            'sans-serif'
        ]
    },
    fontSize: {
        '11': [
            '11px',
            {
                lineHeight: '14px',
                letterSpacing: '0.275px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '15px',
                letterSpacing: '0.24px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '16.94px',
                letterSpacing: '-0.14px'
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
                lineHeight: '24.84px',
                letterSpacing: '0.18px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '30px',
                letterSpacing: '0.2px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '30px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '36.8px',
                letterSpacing: '-0.8px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '44px',
                letterSpacing: '-0.6px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '52px',
                letterSpacing: '-0.96px'
            }
        ],
        '56': [
            '56px',
            {
                lineHeight: '60px',
                letterSpacing: '-1.12px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '67.2px',
                letterSpacing: '-1.28px'
            }
        ],
        '80': [
            '80px',
            {
                lineHeight: '80px',
                letterSpacing: '-2.4px'
            }
        ]
    },
    spacing: {
        '0': '1px',
        '1': '48px',
        '2': '56px',
        '3': '72px',
        '4': '80px',
        '5': '86px',
        '6': '120px',
        '7': '160px',
        '8': '166px',
        '9': '201px',
        '10': '213px',
        '11': '270px',
        '12': '287px',
        '13': '295px',
        '14': '305px',
        '15': '312px',
        '16': '323px',
        '17': '460px',
        '18': '467px',
        '19': '481px'
    },
    borderRadius: {
        xs: '2px',
        full: '937px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px'
    },
    screens: {
        xs: '376px',
        '400px': '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        '1180px': '1180px',
        xl: '1300px',
        '1440px': '1440px',
        '2xl': '1600px',
        '1760px': '1760px',
        '1920px': '1920px'
    },
    transitionDuration: {
        '0': '0s',
        '100': '0.1s',
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '350': '0.35s',
        '400': '0.4s',
        '500': '0.5s',
        '700': '0.7s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.8, 0.01, 0.11, 0.98)',
        default: 'ease',
        linear: 'linear'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '480px'
    }
},
  },
};
