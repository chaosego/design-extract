/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(36, 33%, 97%)',
            '100': 'hsl(36, 33%, 94%)',
            '200': 'hsl(36, 33%, 86%)',
            '300': 'hsl(36, 33%, 76%)',
            '400': 'hsl(36, 33%, 64%)',
            '500': 'hsl(36, 33%, 50%)',
            '600': 'hsl(36, 33%, 40%)',
            '700': 'hsl(36, 33%, 32%)',
            '800': 'hsl(36, 33%, 24%)',
            '900': 'hsl(36, 33%, 16%)',
            '950': 'hsl(36, 33%, 10%)',
            DEFAULT: '#faf8f5'
        },
        secondary: {
            '50': 'hsl(222, 100%, 97%)',
            '100': 'hsl(222, 100%, 94%)',
            '200': 'hsl(222, 100%, 86%)',
            '300': 'hsl(222, 100%, 76%)',
            '400': 'hsl(222, 100%, 64%)',
            '500': 'hsl(222, 100%, 50%)',
            '600': 'hsl(222, 100%, 40%)',
            '700': 'hsl(222, 100%, 32%)',
            '800': 'hsl(222, 100%, 24%)',
            '900': 'hsl(222, 100%, 16%)',
            '950': 'hsl(222, 100%, 10%)',
            DEFAULT: '#004cff'
        },
        accent: {
            '50': 'hsl(12, 100%, 97%)',
            '100': 'hsl(12, 100%, 94%)',
            '200': 'hsl(12, 100%, 86%)',
            '300': 'hsl(12, 100%, 76%)',
            '400': 'hsl(12, 100%, 64%)',
            '500': 'hsl(12, 100%, 50%)',
            '600': 'hsl(12, 100%, 40%)',
            '700': 'hsl(12, 100%, 32%)',
            '800': 'hsl(12, 100%, 24%)',
            '900': 'hsl(12, 100%, 16%)',
            '950': 'hsl(12, 100%, 10%)',
            DEFAULT: '#ff7a59'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#121715',
        'neutral-300': '#969e9b',
        'neutral-400': '#485450',
        'neutral-500': '#717d79',
        'neutral-600': '#cfcdca',
        background: '#f9f6f3',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'inter',
            'sans-serif'
        ],
        body: [
            'paperMono',
            'sans-serif'
        ],
        heading: [
            'arizonaFlare',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '16px',
                letterSpacing: '0.24px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '16px'
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
                lineHeight: '24px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '28px',
                letterSpacing: '-0.24px'
            }
        ],
        '35': [
            '35px',
            {
                lineHeight: '40px',
                letterSpacing: '-0.35px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '40px',
                letterSpacing: '-0.72px'
            }
        ],
        '44': [
            '44px',
            {
                lineHeight: '48px',
                letterSpacing: '-0.88px'
            }
        ],
        '50': [
            '50px',
            {
                lineHeight: '52px',
                letterSpacing: '-2px'
            }
        ]
    },
    spacing: {
        '2': '4px',
        '20': '40px',
        '24': '48px',
        '32': '64px',
        '40': '80px',
        '52': '104px',
        '64': '128px',
        '80': '160px',
        '133': '266px',
        '145': '290px',
        '149': '298px',
        '93px': '93px'
    },
    borderRadius: {
        xs: '2px',
        md: '6px',
        lg: '12px',
        xl: '24px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 169px 47px 0px, rgba(0, 0, 0, 0.01) 0px 108px 43px 0px, rgba(0, 0, 0, 0.02) 0px 61px 37px 0px, rgba(0, 0, 0, 0.03) 0px 27px 27px 0px, rgba(0, 0, 0, 0.04) 0px 7px 15px 0px'
    },
    screens: {
        md: '768px',
        lg: '1024px'
    },
    transitionDuration: {
        '55': '0.055s',
        '100': '0.1s',
        '110': '0.11s',
        '150': '0.15s',
        '165': '0.165s',
        '200': '0.2s',
        '220': '0.22s',
        '280': '0.28s',
        '300': '0.3s',
        '500': '0.5s',
        '700': '0.7s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1920px'
    }
},
  },
};
