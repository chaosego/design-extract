/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(94, 100%, 97%)',
            '100': 'hsl(94, 100%, 94%)',
            '200': 'hsl(94, 100%, 86%)',
            '300': 'hsl(94, 100%, 76%)',
            '400': 'hsl(94, 100%, 64%)',
            '500': 'hsl(94, 100%, 50%)',
            '600': 'hsl(94, 100%, 40%)',
            '700': 'hsl(94, 100%, 32%)',
            '800': 'hsl(94, 100%, 24%)',
            '900': 'hsl(94, 100%, 16%)',
            '950': 'hsl(94, 100%, 10%)',
            DEFAULT: '#d7ffb8'
        },
        secondary: {
            '50': 'hsl(240, 100%, 97%)',
            '100': 'hsl(240, 100%, 94%)',
            '200': 'hsl(240, 100%, 86%)',
            '300': 'hsl(240, 100%, 76%)',
            '400': 'hsl(240, 100%, 64%)',
            '500': 'hsl(240, 100%, 50%)',
            '600': 'hsl(240, 100%, 40%)',
            '700': 'hsl(240, 100%, 32%)',
            '800': 'hsl(240, 100%, 24%)',
            '900': 'hsl(240, 100%, 16%)',
            '950': 'hsl(240, 100%, 10%)',
            DEFAULT: '#0000ee'
        },
        accent: {
            '50': 'hsl(199, 100%, 97%)',
            '100': 'hsl(199, 100%, 94%)',
            '200': 'hsl(199, 100%, 86%)',
            '300': 'hsl(199, 100%, 76%)',
            '400': 'hsl(199, 100%, 64%)',
            '500': 'hsl(199, 100%, 50%)',
            '600': 'hsl(199, 100%, 40%)',
            '700': 'hsl(199, 100%, 32%)',
            '800': 'hsl(199, 100%, 24%)',
            '900': 'hsl(199, 100%, 16%)',
            '950': 'hsl(199, 100%, 10%)',
            DEFAULT: '#ddf4ff'
        },
        'neutral-50': '#3c3c3c',
        'neutral-100': '#777777',
        'neutral-200': '#000000',
        'neutral-300': '#4b4b4b',
        'neutral-400': '#afafaf',
        'neutral-500': '#ffffff',
        'neutral-600': '#e5e5e5',
        'neutral-700': '#808080',
        'neutral-800': '#c1c1c1',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'duolingo-sans',
            'sans-serif'
        ]
    },
    fontSize: {
        '13': [
            '13px',
            {
                lineHeight: '16px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '17px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '17.25px',
                letterSpacing: '0.8px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '18.4px'
            }
        ],
        '17': [
            '17px',
            {
                lineHeight: '20px'
            }
        ],
        '19': [
            '19px',
            {
                lineHeight: '26.6px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: 'normal'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: 'normal'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: 'normal',
                letterSpacing: '-1.28px'
            }
        ]
    },
    spacing: {
        '2': '8px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '35': '140px',
        '1px': '1px',
        '23px': '23px',
        '185px': '185px'
    },
    borderRadius: {
        xs: '2px',
        lg: '12px'
    },
    boxShadow: {
        sm: 'rgb(128, 128, 128) 0px 0px 5px 0px'
    },
    screens: {
        '400px': '400px',
        sm: '426px',
        '550px': '550px'
    },
    transitionDuration: {
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.22, 1, 0.36, 1)',
        default: 'ease'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1728px'
    }
},
  },
};
