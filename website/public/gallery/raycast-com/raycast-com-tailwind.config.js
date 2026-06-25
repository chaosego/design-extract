/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(0, 100%, 97%)',
            '100': 'hsl(0, 100%, 94%)',
            '200': 'hsl(0, 100%, 86%)',
            '300': 'hsl(0, 100%, 76%)',
            '400': 'hsl(0, 100%, 64%)',
            '500': 'hsl(0, 100%, 50%)',
            '600': 'hsl(0, 100%, 40%)',
            '700': 'hsl(0, 100%, 32%)',
            '800': 'hsl(0, 100%, 24%)',
            '900': 'hsl(0, 100%, 16%)',
            '950': 'hsl(0, 100%, 10%)',
            DEFAULT: '#ff6363'
        },
        secondary: {
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
            DEFAULT: '#8cd6ff'
        },
        accent: {
            '50': 'hsl(202, 100%, 97%)',
            '100': 'hsl(202, 100%, 94%)',
            '200': 'hsl(202, 100%, 86%)',
            '300': 'hsl(202, 100%, 76%)',
            '400': 'hsl(202, 100%, 64%)',
            '500': 'hsl(202, 100%, 50%)',
            '600': 'hsl(202, 100%, 40%)',
            '700': 'hsl(202, 100%, 32%)',
            '800': 'hsl(202, 100%, 24%)',
            '900': 'hsl(202, 100%, 16%)',
            '950': 'hsl(202, 100%, 10%)',
            DEFAULT: '#56c2ff'
        },
        'neutral-50': '#ffffff',
        'neutral-100': '#6a6b6c',
        'neutral-200': '#9c9c9d',
        'neutral-300': '#434345',
        'neutral-400': '#e6e6e6',
        'neutral-500': '#2f3031',
        'neutral-600': '#1b1c1e',
        'neutral-700': '#8e8c90',
        'neutral-800': '#111214',
        background: '#07080a',
        foreground: '#ffffff'
    },
    fontFamily: {
        sans: [
            'Inter',
            'sans-serif'
        ],
        body: [
            'GeistMono',
            'sans-serif'
        ]
    },
    fontSize: {
        '10': [
            '10px',
            {
                lineHeight: 'normal',
                letterSpacing: '0.5px'
            }
        ],
        '11': [
            '11px',
            {
                lineHeight: '10px',
                letterSpacing: '0.8px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '19.2px',
                letterSpacing: '0.2px'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '16px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: 'normal',
                letterSpacing: '0.2px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '18.4px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: 'normal',
                letterSpacing: '0.2px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: 'normal',
                letterSpacing: '0.2px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '25.3px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '28px',
                letterSpacing: '-0.05px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '36.8px'
            }
        ],
        '56': [
            '56px',
            {
                lineHeight: '65.52px',
                letterSpacing: '0.2px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '70.4px'
            }
        ],
        '23.75': [
            '23.75px',
            {
                lineHeight: '27.3125px'
            }
        ]
    },
    spacing: {
        '28': '56px',
        '32': '64px',
        '36': '72px',
        '40': '80px',
        '48': '96px',
        '51': '102px',
        '60': '120px',
        '64': '128px',
        '74': '148px',
        '100': '200px',
        '106': '212px',
        '112': '224px',
        '185': '370px',
        '200': '400px',
        '208': '416px',
        '1px': '1px',
        '45px': '45px',
        '137px': '137px',
        '169px': '169px',
        '217px': '217px',
        '325px': '325px',
        '409px': '409px'
    },
    borderRadius: {
        xs: '2px',
        sm: '5px',
        md: '8px',
        lg: '16px',
        xl: '22px',
        full: '99999px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px',
        xs: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(154, 170, 255, 0.05) 0px 2px 40px 10px, rgba(154, 170, 255, 0.05) 0px 0px 16px -7px',
        md: 'rgba(0, 0, 0, 0.11) 0px -4px 10px 0px',
        lg: 'rgba(215, 201, 175, 0.05) 0px 0px 20px 5px, rgba(215, 201, 175, 0.05) 0px 0px 16px -7px',
        xl: 'rgba(215, 42, 42, 0.05) -72px -50px 40px -60px'
    },
    screens: {
        xs: '375px',
        '400px': '400px',
        sm: '640px',
        '548px': '548px',
        md: '800px',
        '840px': '840px',
        '880px': '880px',
        '900px': '900px',
        '920px': '920px',
        lg: '1080px',
        '1200px': '1200px',
        '1204px': '1204px'
    },
    transitionDuration: {
        '100': '0.1s',
        '150': '0.15s',
        '200': '0.2s',
        '250': '0.25s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '650': '0.65s',
        '850': '0.85s',
        '900': '0.9s',
        '1000': '1s',
        '1200': '1.2s',
        '1500': '1.5s',
        '2000': '2s'
    },
    transitionTimingFunction: {
        default: 'ease',
        custom: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
    },
    container: {
        center: true,
        padding: '16px'
    },
    maxWidth: {
        container: '818px'
    }
},
  },
};
