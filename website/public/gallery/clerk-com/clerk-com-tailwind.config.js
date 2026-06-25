/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(252, 100%, 97%)',
            '100': 'hsl(252, 100%, 94%)',
            '200': 'hsl(252, 100%, 86%)',
            '300': 'hsl(252, 100%, 76%)',
            '400': 'hsl(252, 100%, 64%)',
            '500': 'hsl(252, 100%, 50%)',
            '600': 'hsl(252, 100%, 40%)',
            '700': 'hsl(252, 100%, 32%)',
            '800': 'hsl(252, 100%, 24%)',
            '900': 'hsl(252, 100%, 16%)',
            '950': 'hsl(252, 100%, 10%)',
            DEFAULT: '#6c47ff'
        },
        secondary: {
            '50': 'hsl(196, 100%, 97%)',
            '100': 'hsl(196, 100%, 94%)',
            '200': 'hsl(196, 100%, 86%)',
            '300': 'hsl(196, 100%, 76%)',
            '400': 'hsl(196, 100%, 64%)',
            '500': 'hsl(196, 100%, 50%)',
            '600': 'hsl(196, 100%, 40%)',
            '700': 'hsl(196, 100%, 32%)',
            '800': 'hsl(196, 100%, 24%)',
            '900': 'hsl(196, 100%, 16%)',
            '950': 'hsl(196, 100%, 10%)',
            DEFAULT: '#1cc4ff'
        },
        accent: {
            '50': 'hsl(190, 100%, 97%)',
            '100': 'hsl(190, 100%, 94%)',
            '200': 'hsl(190, 100%, 86%)',
            '300': 'hsl(190, 100%, 76%)',
            '400': 'hsl(190, 100%, 64%)',
            '500': 'hsl(190, 100%, 50%)',
            '600': 'hsl(190, 100%, 40%)',
            '700': 'hsl(190, 100%, 32%)',
            '800': 'hsl(190, 100%, 24%)',
            '900': 'hsl(190, 100%, 16%)',
            '950': 'hsl(190, 100%, 10%)',
            DEFAULT: '#5de3ff'
        },
        'neutral-50': '#d9d9de',
        'neutral-100': '#000000',
        'neutral-200': '#ffffff',
        'neutral-300': '#131316',
        'neutral-400': '#747686',
        'neutral-500': '#5e5f6e',
        'neutral-600': '#2f3037',
        'neutral-700': '#9394a1',
        'neutral-800': '#696a78',
        'neutral-900': '#eeeef0',
        background: '#f7f7f8',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'geistNumbers',
            'sans-serif'
        ],
        body: [
            'soehneMono',
            'sans-serif'
        ]
    },
    fontSize: {
        '9': [
            '9px',
            {
                lineHeight: '12px'
            }
        ],
        '10': [
            '10px',
            {
                lineHeight: '14px'
            }
        ],
        '11': [
            '11px',
            {
                lineHeight: '16px',
                letterSpacing: '-0.11px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '24px',
                letterSpacing: '1.2px'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '24px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '20px',
                letterSpacing: '-0.14px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '24px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '17': [
            '17px',
            {
                lineHeight: '24px',
                letterSpacing: '-0.17px'
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
                lineHeight: '32px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '40px',
                letterSpacing: '-0.48px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '72px',
                letterSpacing: '-1.6px'
            }
        ]
    },
    spacing: {
        '23': '46px',
        '28': '56px',
        '38': '76px',
        '47': '94px',
        '64': '128px',
        '70': '140px',
        '79': '158px',
        '86': '172px',
        '96': '192px',
        '110': '220px',
        '136': '272px',
        '151': '302px',
        '160': '320px',
        '1px': '1px',
        '151px': '151px',
        '167px': '167px',
        '259px': '259px'
    },
    borderRadius: {
        xs: '2px',
        sm: '5px',
        md: '8px',
        lg: '16px',
        full: '50px'
    },
    boxShadow: {
        sm: 'rgba(107, 231, 255, 0.3) 0px 0px 8px 1px, rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset',
        xs: 'rgba(0, 0, 0, 0.25) 0px 1px 2px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset',
        lg: 'rgba(0, 0, 0, 0.16) 0px 10px 19px 4px, rgba(255, 255, 255, 0.04) 0px -10px 16px -4px, rgba(255, 255, 255, 0.01) 0px 0px 0px 1px, rgba(255, 255, 255, 0.02) 0px 1px 0px 0px'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '450': '0.45s',
        '500': '0.5s',
        '1000': '1s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0, 0, 0.2, 1)'
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
