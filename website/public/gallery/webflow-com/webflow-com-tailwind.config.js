/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(216, 92%, 97%)',
            '100': 'hsl(216, 92%, 94%)',
            '200': 'hsl(216, 92%, 86%)',
            '300': 'hsl(216, 92%, 76%)',
            '400': 'hsl(216, 92%, 64%)',
            '500': 'hsl(216, 92%, 50%)',
            '600': 'hsl(216, 92%, 40%)',
            '700': 'hsl(216, 92%, 32%)',
            '800': 'hsl(216, 92%, 24%)',
            '900': 'hsl(216, 92%, 16%)',
            '950': 'hsl(216, 92%, 10%)',
            DEFAULT: '#146ef5'
        },
        secondary: {
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
            DEFAULT: '#6ca7ff'
        },
        accent: {
            '50': 'hsl(217, 91%, 97%)',
            '100': 'hsl(217, 91%, 94%)',
            '200': 'hsl(217, 91%, 86%)',
            '300': 'hsl(217, 91%, 76%)',
            '400': 'hsl(217, 91%, 64%)',
            '500': 'hsl(217, 91%, 50%)',
            '600': 'hsl(217, 91%, 40%)',
            '700': 'hsl(217, 91%, 32%)',
            '800': 'hsl(217, 91%, 24%)',
            '900': 'hsl(217, 91%, 16%)',
            '950': 'hsl(217, 91%, 10%)',
            DEFAULT: '#3b82f6'
        },
        'neutral-50': '#080808',
        'neutral-100': '#ffffff',
        'neutral-200': '#5a5a5a',
        'neutral-300': '#d8d8d8',
        'neutral-400': '#f0f0f0',
        'neutral-500': '#1a1a1a',
        'neutral-600': '#6b7280',
        'neutral-700': '#292929',
        'neutral-800': '#464646',
        'neutral-900': '#808080',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'WF Visual Sans Variable',
            'sans-serif'
        ],
        body: [
            'Times',
            'sans-serif'
        ]
    },
    fontSize: {
        '15': [
            '15px',
            {
                lineHeight: '19.5px',
                letterSpacing: '1.5px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '32px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '38.4px'
            }
        ],
        '74.8571': [
            '74.8571px',
            {
                lineHeight: '77.8514px',
                letterSpacing: '-0.748571px'
            }
        ],
        '52.5714': [
            '52.5714px',
            {
                lineHeight: '54.6743px'
            }
        ],
        '42.0571': [
            '42.0571px',
            {
                lineHeight: '43.7394px'
            }
        ],
        '38.2857': [
            '38.2857px',
            {
                lineHeight: '45.9429px'
            }
        ],
        '30.8571': [
            '30.8571px',
            {
                lineHeight: '43.2px'
            }
        ],
        '30.5714': [
            '30.5714px',
            {
                lineHeight: '39.7429px'
            }
        ],
        '28.1143': [
            '28.1143px',
            {
                lineHeight: '44.9829px',
                letterSpacing: '-0.281143px'
            }
        ],
        '23.4286': [
            '23.4286px',
            {
                lineHeight: '30.4571px'
            }
        ],
        '19.7143': [
            '19.7143px',
            {
                lineHeight: '27.6px'
            }
        ],
        '19.6571': [
            '19.6571px',
            {
                lineHeight: '29.4857px'
            }
        ],
        '19.4286': [
            '19.4286px',
            {
                lineHeight: '27.2px'
            }
        ]
    },
    spacing: {
        '0': '1px',
        '1': '23px',
        '2': '31px',
        '3': '37px',
        '4': '40px',
        '5': '46px',
        '6': '56px',
        '7': '64px',
        '8': '73px',
        '9': '80px',
        '10': '88px',
        '11': '91px',
        '12': '99px',
        '13': '111px',
        '14': '184px',
        '15': '192px',
        '16': '197px',
        '17': '215px',
        '18': '229px',
        '19': '248px',
        '20': '252px',
        '21': '380px'
    },
    borderRadius: {
        xs: '2px',
        md: '6px',
        full: '1280px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 100px inset',
        lg: 'rgba(0, 0, 0, 0.12) 0px 4px 24px 0px, rgba(0, 0, 0, 0.08) 0px 1px 4px 0px',
        xl: 'rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px'
    },
    screens: {
        md: '768px'
    },
    transitionDuration: {
        '150': '0.15s',
        '300': '0.3s',
        '450': '0.45s',
        '1200': '1.2s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
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
