/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(208, 91%, 97%)',
            '100': 'hsl(208, 91%, 94%)',
            '200': 'hsl(208, 91%, 86%)',
            '300': 'hsl(208, 91%, 76%)',
            '400': 'hsl(208, 91%, 64%)',
            '500': 'hsl(208, 91%, 50%)',
            '600': 'hsl(208, 91%, 40%)',
            '700': 'hsl(208, 91%, 32%)',
            '800': 'hsl(208, 91%, 24%)',
            '900': 'hsl(208, 91%, 16%)',
            '950': 'hsl(208, 91%, 10%)',
            DEFAULT: '#d6ebfd'
        },
        secondary: {
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
            DEFAULT: '#00a3ff'
        },
        accent: {
            '50': 'hsl(151, 100%, 97%)',
            '100': 'hsl(151, 100%, 94%)',
            '200': 'hsl(151, 100%, 86%)',
            '300': 'hsl(151, 100%, 76%)',
            '400': 'hsl(151, 100%, 64%)',
            '500': 'hsl(151, 100%, 50%)',
            '600': 'hsl(151, 100%, 40%)',
            '700': 'hsl(151, 100%, 32%)',
            '800': 'hsl(151, 100%, 24%)',
            '900': 'hsl(151, 100%, 16%)',
            '950': 'hsl(151, 100%, 10%)',
            DEFAULT: '#44ffa4'
        },
        'neutral-50': '#f0f0f0',
        'neutral-100': '#a1a4a5',
        'neutral-200': '#ffffff',
        'neutral-300': '#f1f7fe',
        'neutral-400': '#464a4d',
        'neutral-500': '#6c6c6c',
        'neutral-600': '#000000',
        'neutral-700': '#e5edfd',
        'neutral-800': '#70757e',
        'neutral-900': '#262a2d',
        background: '#000000',
        foreground: '#ffffff'
    },
    fontFamily: {
        body: [
            'Arial',
            'sans-serif'
        ],
        font2: [
            'aBCFavorit',
            'sans-serif'
        ],
        font3: [
            'Helvetica',
            'sans-serif'
        ],
        heading: [
            'domaine',
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
                lineHeight: '27px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '26px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '33.6px'
            }
        ],
        '56': [
            '56px',
            {
                lineHeight: '67.2px',
                letterSpacing: '-2.8px'
            }
        ],
        '96': [
            '96px',
            {
                lineHeight: '96px',
                letterSpacing: '-0.96px'
            }
        ],
        '76.8': [
            '76.8px',
            {
                lineHeight: '76.8px',
                letterSpacing: '-0.768px'
            }
        ]
    },
    spacing: {
        '10': '20px',
        '12': '24px',
        '14': '28px',
        '20': '40px',
        '24': '48px',
        '31': '62px',
        '40': '80px',
        '48': '96px',
        '52': '104px',
        '72': '144px',
        '75': '150px',
        '190': '380px',
        '1px': '1px',
        '221px': '221px'
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 1px 1px 0px inset'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '500': '0.5s',
        '600': '0.6s',
        '1000': '1s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0, 0, 0.2, 1)',
        default: 'ease',
        linear: 'linear'
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
