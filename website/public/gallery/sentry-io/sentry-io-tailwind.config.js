/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(258, 40%, 97%)',
            '100': 'hsl(258, 40%, 94%)',
            '200': 'hsl(258, 40%, 86%)',
            '300': 'hsl(258, 40%, 76%)',
            '400': 'hsl(258, 40%, 64%)',
            '500': 'hsl(258, 40%, 50%)',
            '600': 'hsl(258, 40%, 40%)',
            '700': 'hsl(258, 40%, 32%)',
            '800': 'hsl(258, 40%, 24%)',
            '900': 'hsl(258, 40%, 16%)',
            '950': 'hsl(258, 40%, 10%)',
            DEFAULT: '#150f23'
        },
        secondary: {
            '50': 'hsl(212, 100%, 97%)',
            '100': 'hsl(212, 100%, 94%)',
            '200': 'hsl(212, 100%, 86%)',
            '300': 'hsl(212, 100%, 76%)',
            '400': 'hsl(212, 100%, 64%)',
            '500': 'hsl(212, 100%, 50%)',
            '600': 'hsl(212, 100%, 40%)',
            '700': 'hsl(212, 100%, 32%)',
            '800': 'hsl(212, 100%, 24%)',
            '900': 'hsl(212, 100%, 16%)',
            '950': 'hsl(212, 100%, 10%)',
            DEFAULT: '#9ecbff'
        },
        accent: {
            '50': 'hsl(261, 29%, 97%)',
            '100': 'hsl(261, 29%, 94%)',
            '200': 'hsl(261, 29%, 86%)',
            '300': 'hsl(261, 29%, 76%)',
            '400': 'hsl(261, 29%, 64%)',
            '500': 'hsl(261, 29%, 50%)',
            '600': 'hsl(261, 29%, 40%)',
            '700': 'hsl(261, 29%, 32%)',
            '800': 'hsl(261, 29%, 24%)',
            '900': 'hsl(261, 29%, 16%)',
            '950': 'hsl(261, 29%, 10%)',
            DEFAULT: '#2d2340'
        },
        'neutral-50': '#ffffff',
        'neutral-100': '#d4d4d4',
        'neutral-200': '#e1e4e8',
        'neutral-300': '#6a737d',
        'neutral-400': '#000000',
        'neutral-500': '#1a1a1a',
        'neutral-600': '#efefef',
        'neutral-700': '#584674',
        'neutral-800': '#c1c1c1',
        background: '#1f1633',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Rubik',
            'sans-serif'
        ],
        body: [
            'IBM Plex Mono',
            'sans-serif'
        ],
        font3: [
            'Dammit Sans',
            'sans-serif'
        ]
    },
    fontSize: {
        '10': [
            '10px',
            {
                lineHeight: '18px',
                letterSpacing: '0.25px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '24px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '18px',
                letterSpacing: '0.2px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '21px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '25px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '30px'
            }
        ],
        '27': [
            '27px',
            {
                lineHeight: '33.75px'
            }
        ],
        '30': [
            '30px',
            {
                lineHeight: '36px'
            }
        ],
        '60': [
            '60px',
            {
                lineHeight: '66px'
            }
        ],
        '88': [
            '88px',
            {
                lineHeight: '105.6px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '8': '16px',
        '10': '20px',
        '12': '24px',
        '16': '32px',
        '20': '40px',
        '22': '44px',
        '28': '56px',
        '32': '64px',
        '36': '72px',
        '80': '160px',
        '35px': '35px',
        '83px': '83px'
    },
    borderRadius: {
        xs: '2px',
        md: '10px',
        lg: '16px',
        full: '50px'
    },
    boxShadow: {
        sm: 'rgb(21, 15, 35) 0px 0px 8px 6px',
        md: 'rgba(0, 0, 0, 0.15) 0px 2px 10px 0px inset'
    },
    screens: {
        sm: '576px',
        md: '768px',
        lg: '1024px',
        '1152px': '1152px'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '600': '0.6s',
        '800': '0.8s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0, 0, 0.2, 1)',
        default: 'ease'
    },
    container: {
        center: true,
        padding: '32px'
    },
    maxWidth: {
        container: '1152px'
    }
},
  },
};
