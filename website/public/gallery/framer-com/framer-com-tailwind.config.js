/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(216, 100%, 97%)',
            '100': 'hsl(216, 100%, 94%)',
            '200': 'hsl(216, 100%, 86%)',
            '300': 'hsl(216, 100%, 76%)',
            '400': 'hsl(216, 100%, 64%)',
            '500': 'hsl(216, 100%, 50%)',
            '600': 'hsl(216, 100%, 40%)',
            '700': 'hsl(216, 100%, 32%)',
            '800': 'hsl(216, 100%, 24%)',
            '900': 'hsl(216, 100%, 16%)',
            '950': 'hsl(216, 100%, 10%)',
            DEFAULT: '#0066ff'
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
            '50': 'hsl(204, 100%, 97%)',
            '100': 'hsl(204, 100%, 94%)',
            '200': 'hsl(204, 100%, 86%)',
            '300': 'hsl(204, 100%, 76%)',
            '400': 'hsl(204, 100%, 64%)',
            '500': 'hsl(204, 100%, 50%)',
            '600': 'hsl(204, 100%, 40%)',
            '700': 'hsl(204, 100%, 32%)',
            '800': 'hsl(204, 100%, 24%)',
            '900': 'hsl(204, 100%, 16%)',
            '950': 'hsl(204, 100%, 10%)',
            DEFAULT: '#0099ff'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#999999',
        'neutral-300': '#242424',
        'neutral-400': '#666666',
        'neutral-500': '#111111',
        'neutral-600': '#cccccc',
        'neutral-700': '#303030',
        'neutral-800': '#878787',
        'neutral-900': '#444444',
        background: '#000000',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Inter',
            'sans-serif'
        ],
        heading: [
            'Inter Variable',
            'sans-serif'
        ],
        body: [
            'Inter Framer SemiBold',
            'sans-serif'
        ],
        font4: [
            'GT Walsheim Medium',
            'sans-serif'
        ]
    },
    fontSize: {
        '6': [
            '6px',
            {
                lineHeight: '6px'
            }
        ],
        '7': [
            '7px',
            {
                lineHeight: '7px',
                letterSpacing: '0.21px'
            }
        ],
        '9': [
            '9px',
            {
                lineHeight: '10.8px'
            }
        ],
        '10': [
            '10px',
            {
                lineHeight: '14px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: 'normal'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '20.8px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '14px',
                letterSpacing: '-0.01px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '19.5px',
                letterSpacing: '-0.01px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '17': [
            '17px',
            {
                lineHeight: '20.4px',
                letterSpacing: '-0.6px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '23.4px',
                letterSpacing: '-0.01px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '24px',
                letterSpacing: '-0.6px'
            }
        ],
        '44': [
            '44px',
            {
                lineHeight: '48.4px',
                letterSpacing: '-1.76px'
            }
        ],
        '54': [
            '54px',
            {
                lineHeight: '54px',
                letterSpacing: '-2.16px'
            }
        ],
        '68': [
            '68px',
            {
                lineHeight: '68px',
                letterSpacing: '-3.4px'
            }
        ]
    },
    spacing: {
        '4': '20px',
        '5': '25px',
        '6': '30px',
        '8': '40px',
        '9': '45px',
        '10': '50px',
        '11': '55px',
        '12': '60px',
        '20': '100px',
        '24': '120px',
        '32': '160px',
        '40': '200px',
        '1px': '1px',
        '64px': '64px'
    },
    borderRadius: {
        xs: '1px',
        sm: '4px',
        md: '10px',
        lg: '14px',
        xl: '21px',
        full: '100px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px',
        xs: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
        md: 'rgba(0, 0, 0, 0.25) 0px 4px 8px 0px',
        lg: 'rgba(0, 0, 0, 0.2) 0px 12px 19.2px 0px',
        xl: 'rgba(0, 0, 0, 0.2) 0px 40px 64px 0px'
    },
    transitionDuration: {
        '300': '0.3s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0, 0, 1, 1)',
        default: 'ease'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1200px'
    }
},
  },
};
