/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(16, 76%, 97%)',
            '100': 'hsl(16, 76%, 94%)',
            '200': 'hsl(16, 76%, 86%)',
            '300': 'hsl(16, 76%, 76%)',
            '400': 'hsl(16, 76%, 64%)',
            '500': 'hsl(16, 76%, 50%)',
            '600': 'hsl(16, 76%, 40%)',
            '700': 'hsl(16, 76%, 32%)',
            '800': 'hsl(16, 76%, 24%)',
            '900': 'hsl(16, 76%, 16%)',
            '950': 'hsl(16, 76%, 10%)',
            DEFAULT: '#e05320'
        },
        secondary: {
            '50': 'hsl(211, 100%, 97%)',
            '100': 'hsl(211, 100%, 94%)',
            '200': 'hsl(211, 100%, 86%)',
            '300': 'hsl(211, 100%, 76%)',
            '400': 'hsl(211, 100%, 64%)',
            '500': 'hsl(211, 100%, 50%)',
            '600': 'hsl(211, 100%, 40%)',
            '700': 'hsl(211, 100%, 32%)',
            '800': 'hsl(211, 100%, 24%)',
            '900': 'hsl(211, 100%, 16%)',
            '950': 'hsl(211, 100%, 10%)',
            DEFAULT: '#007bff'
        },
        accent: {
            '50': 'hsl(16, 100%, 97%)',
            '100': 'hsl(16, 100%, 94%)',
            '200': 'hsl(16, 100%, 86%)',
            '300': 'hsl(16, 100%, 76%)',
            '400': 'hsl(16, 100%, 64%)',
            '500': 'hsl(16, 100%, 50%)',
            '600': 'hsl(16, 100%, 40%)',
            '700': 'hsl(16, 100%, 32%)',
            '800': 'hsl(16, 100%, 24%)',
            '900': 'hsl(16, 100%, 16%)',
            '950': 'hsl(16, 100%, 10%)',
            DEFAULT: '#ff6c37'
        },
        'neutral-50': '#212121',
        'neutral-100': '#000000',
        'neutral-200': '#707070',
        'neutral-300': '#ffffff',
        'neutral-400': '#5c5c5c',
        'neutral-500': '#e6e6e6',
        'neutral-600': '#09070d',
        'neutral-700': '#8a8a8a',
        'neutral-800': '#cfcfcf',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'inter',
            'sans-serif'
        ],
        body: [
            'Times',
            'sans-serif'
        ],
        heading: [
            'degular',
            'sans-serif'
        ]
    },
    fontSize: {
        '10': [
            '10px',
            {
                lineHeight: '11.5px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '19.5px',
                letterSpacing: '-0.16px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '21px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '18.4px',
                letterSpacing: '-0.16px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '24px',
                letterSpacing: '-0.16px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '35.75px',
                letterSpacing: '-0.16px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '42.0001px',
                letterSpacing: '0.48px'
            }
        ],
        '55': [
            '55px',
            {
                lineHeight: '49.5px',
                letterSpacing: '0.6px'
            }
        ]
    },
    spacing: {
        '10': '20px',
        '12': '24px',
        '20': '40px',
        '25': '50px',
        '30': '60px',
        '32': '64px',
        '40': '80px',
        '60': '120px',
        '112': '224px',
        '126': '252px',
        '1px': '1px'
    },
    borderRadius: {
        sm: '3px',
        md: '10px',
        lg: '15px',
        xl: '20px',
        full: '9999px'
    },
    boxShadow: {
        sm: 'rgb(255, 108, 55) 0px 0px 0px 1px inset',
        lg: 'rgb(179, 135, 245) 0px 4px 24px 0px'
    },
    screens: {
        sm: '640px',
        md: '769px',
        lg: '1068px',
        '1199px': '1199px',
        '1200px': '1200px',
        '2000px': '2000px'
    },
    transitionDuration: {
        '100': '0.1s',
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.2, 1)',
        default: 'ease'
    },
    container: {
        center: true,
        padding: '1.1px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
