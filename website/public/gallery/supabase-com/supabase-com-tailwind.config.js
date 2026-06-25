/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(151, 67%, 97%)',
            '100': 'hsl(151, 67%, 94%)',
            '200': 'hsl(151, 67%, 86%)',
            '300': 'hsl(151, 67%, 76%)',
            '400': 'hsl(151, 67%, 64%)',
            '500': 'hsl(151, 67%, 50%)',
            '600': 'hsl(151, 67%, 40%)',
            '700': 'hsl(151, 67%, 32%)',
            '800': 'hsl(151, 67%, 24%)',
            '900': 'hsl(151, 67%, 16%)',
            '950': 'hsl(151, 67%, 10%)',
            DEFAULT: '#72e3ad'
        },
        secondary: {
            '50': 'hsl(153, 100%, 97%)',
            '100': 'hsl(153, 100%, 94%)',
            '200': 'hsl(153, 100%, 86%)',
            '300': 'hsl(153, 100%, 76%)',
            '400': 'hsl(153, 100%, 64%)',
            '500': 'hsl(153, 100%, 50%)',
            '600': 'hsl(153, 100%, 40%)',
            '700': 'hsl(153, 100%, 32%)',
            '800': 'hsl(153, 100%, 24%)',
            '900': 'hsl(153, 100%, 16%)',
            '950': 'hsl(153, 100%, 10%)',
            DEFAULT: '#00bb68'
        },
        accent: {
            '50': 'hsl(147, 72%, 97%)',
            '100': 'hsl(147, 72%, 94%)',
            '200': 'hsl(147, 72%, 86%)',
            '300': 'hsl(147, 72%, 76%)',
            '400': 'hsl(147, 72%, 64%)',
            '500': 'hsl(147, 72%, 50%)',
            '600': 'hsl(147, 72%, 40%)',
            '700': 'hsl(147, 72%, 32%)',
            '800': 'hsl(147, 72%, 24%)',
            '900': 'hsl(147, 72%, 16%)',
            '950': 'hsl(147, 72%, 10%)',
            DEFAULT: '#a9f1ca'
        },
        'neutral-50': '#dfdfdf',
        'neutral-100': '#171717',
        'neutral-200': '#525252',
        'neutral-300': '#707070',
        'neutral-400': '#ffffff',
        'neutral-500': '#b2b2b2',
        'neutral-600': '#000000',
        'neutral-700': '#c7c7c7',
        'neutral-800': '#ededed',
        'neutral-900': '#d4d4d4',
        background: '#fcfcfc',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Circular',
            'sans-serif'
        ],
        body: [
            'Source Code Pro',
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
                lineHeight: '28px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '32px',
                letterSpacing: '-0.16px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '45px'
            }
        ],
        '72': [
            '72px',
            {
                lineHeight: '72px'
            }
        ]
    },
    spacing: {
        '20': '40px',
        '24': '48px',
        '32': '64px',
        '45': '90px',
        '56': '112px',
        '64': '128px',
        '104': '208px',
        '123': '246px',
        '152': '304px',
        '1px': '1px',
        '157px': '157px'
    },
    borderRadius: {
        md: '6px',
        lg: '16px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px'
    },
    screens: {
        sm: '640px',
        '560px': '560px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    transitionDuration: {
        '0': '0s',
        '75': '0.075s',
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '750': '0.75s',
        '1000': '1s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0, 0, 0.2, 1)',
        default: 'ease'
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
