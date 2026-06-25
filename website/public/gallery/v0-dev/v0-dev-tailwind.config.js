/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        'neutral-50': '#d2d2d2',
        'neutral-100': '#020202',
        'neutral-200': '#222222',
        'neutral-300': '#ffffff',
        'neutral-400': '#f4f4f4',
        'neutral-500': '#343434',
        'neutral-600': '#646464',
        'neutral-700': '#e2e2e2',
        'neutral-800': '#959595',
        background: '#f4f4f4',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'GeistSans',
            'sans-serif'
        ],
        body: [
            'Times',
            'sans-serif'
        ]
    },
    fontSize: {
        '10': [
            '10px',
            {
                lineHeight: '15px'
            }
        ],
        '13': [
            '13px',
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
                lineHeight: '28px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '26px',
                letterSpacing: '-0.4px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '32px',
                letterSpacing: '-0.96px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '40px',
                letterSpacing: '-1.28px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '56px',
                letterSpacing: '-2.88px'
            }
        ]
    },
    spacing: {
        '16': '64px',
        '24': '96px',
        '27': '108px',
        '32': '128px',
        '48': '192px',
        '52': '208px',
        '1px': '1px'
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '35px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
        xs: 'rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px -4px, rgba(0, 0, 0, 0.06) 0px 16px 24px -8px'
    },
    screens: {
        sm: '601px',
        lg: '961px',
        xl: '1280px'
    },
    transitionDuration: {
        '100': '0.1s',
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '350': '0.35s',
        '500': '0.5s',
        '600': '0.6s',
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
        container: '690px'
    }
},
  },
};
