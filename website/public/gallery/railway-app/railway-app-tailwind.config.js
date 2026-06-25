/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(260, 25%, 97%)',
            '100': 'hsl(260, 25%, 94%)',
            '200': 'hsl(260, 25%, 86%)',
            '300': 'hsl(260, 25%, 76%)',
            '400': 'hsl(260, 25%, 64%)',
            '500': 'hsl(260, 25%, 50%)',
            '600': 'hsl(260, 25%, 40%)',
            '700': 'hsl(260, 25%, 32%)',
            '800': 'hsl(260, 25%, 24%)',
            '900': 'hsl(260, 25%, 16%)',
            '950': 'hsl(260, 25%, 10%)',
            DEFAULT: '#59497a'
        },
        secondary: {
            '50': 'hsl(271, 41%, 97%)',
            '100': 'hsl(271, 41%, 94%)',
            '200': 'hsl(271, 41%, 86%)',
            '300': 'hsl(271, 41%, 76%)',
            '400': 'hsl(271, 41%, 64%)',
            '500': 'hsl(271, 41%, 50%)',
            '600': 'hsl(271, 41%, 40%)',
            '700': 'hsl(271, 41%, 32%)',
            '800': 'hsl(271, 41%, 24%)',
            '900': 'hsl(271, 41%, 16%)',
            '950': 'hsl(271, 41%, 10%)',
            DEFAULT: '#291839'
        },
        accent: {
            '50': 'hsl(271, 38%, 97%)',
            '100': 'hsl(271, 38%, 94%)',
            '200': 'hsl(271, 38%, 86%)',
            '300': 'hsl(271, 38%, 76%)',
            '400': 'hsl(271, 38%, 64%)',
            '500': 'hsl(271, 38%, 50%)',
            '600': 'hsl(271, 38%, 40%)',
            '700': 'hsl(271, 38%, 32%)',
            '800': 'hsl(271, 38%, 24%)',
            '900': 'hsl(271, 38%, 16%)',
            '950': 'hsl(271, 38%, 10%)',
            DEFAULT: '#1f132a'
        },
        'neutral-50': '#33323e',
        'neutral-100': '#f7f7f8',
        'neutral-200': '#545260',
        'neutral-300': '#a1a0ab',
        'neutral-400': '#609f89',
        'neutral-500': '#878593',
        'neutral-600': '#dcdce0',
        'neutral-700': '#000000',
        background: '#13111c',
        foreground: '#ffffff'
    },
    fontFamily: {
        body: [
            'Helvetica',
            'sans-serif'
        ],
        heading: [
            'IBM Plex Serif',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '19.5px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '20px'
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
                lineHeight: '30px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '32px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '48px',
                letterSpacing: '-0.72px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '65px',
                letterSpacing: '-0.8px'
            }
        ],
        '54': [
            '54px',
            {
                lineHeight: '60.48px',
                letterSpacing: '-1.96px'
            }
        ],
        '13.3333': [
            '13.3333px',
            {
                lineHeight: '21.6666px'
            }
        ],
        '11.6667': [
            '11.6667px',
            {
                lineHeight: '18.9584px'
            }
        ]
    },
    spacing: {
        '2': '4px',
        '30': '60px',
        '40': '80px',
        '48': '96px',
        '64': '128px',
        '131': '262px',
        '159px': '159px',
        '235px': '235px'
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '9999px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
        xs: 'rgb(204, 204, 204) 0px 0px 2px 2px',
        xl: 'rgba(65, 78, 166, 0.1) 0px -12px 127px 0px, rgba(65, 78, 166, 0.07) 0px -4.38px 46.357px 0px, rgba(65, 78, 166, 0.06) 0px -2.127px 22.506px 0px, rgba(65, 78, 166, 0.04) 0px -1.042px 11.033px 0px, rgba(65, 78, 166, 0.03) 0px -0.412px 4.362px 0px'
    },
    screens: {
        xs: '376px',
        md: '768px'
    },
    transitionDuration: {
        '0': '0s',
        '50': '0.05s',
        '100': '0.1s',
        '150': '0.15s',
        '200': '0.2s',
        '400': '0.4s',
        '700': '0.7s'
    },
    transitionTimingFunction: {
        default: 'ease',
        linear: 'linear',
        custom: 'cubic-bezier(0, 0, 0.2, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '320px'
    }
},
  },
};
