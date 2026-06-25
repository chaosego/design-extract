/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
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
        secondary: {
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
        accent: {
            '50': 'hsl(207, 95%, 97%)',
            '100': 'hsl(207, 95%, 94%)',
            '200': 'hsl(207, 95%, 86%)',
            '300': 'hsl(207, 95%, 76%)',
            '400': 'hsl(207, 95%, 64%)',
            '500': 'hsl(207, 95%, 50%)',
            '600': 'hsl(207, 95%, 40%)',
            '700': 'hsl(207, 95%, 32%)',
            '800': 'hsl(207, 95%, 24%)',
            '900': 'hsl(207, 95%, 16%)',
            '950': 'hsl(207, 95%, 10%)',
            DEFAULT: '#d6ecfe'
        },
        'neutral-50': '#000000',
        'neutral-100': '#242424',
        'neutral-200': '#898989',
        'neutral-300': '#e5e7eb',
        'neutral-400': '#ffffff',
        'neutral-500': '#111111',
        'neutral-600': '#f4f4f4',
        'neutral-700': '#374151',
        'neutral-800': '#d3d3d3',
        'neutral-900': '#808080',
        background: '#f4f4f4',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'CUSTOMV2;Cal Sans UI Regular',
            'sans-serif'
        ],
        heading: [
            'Matter SemiBold',
            'sans-serif'
        ],
        font3: [
            'Cal Sans',
            'sans-serif'
        ]
    },
    fontSize: {
        '8': [
            '8px',
            {
                lineHeight: '11.2px'
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
        '14': [
            '14px',
            {
                lineHeight: '19.6px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '23.4px',
                letterSpacing: '-0.2px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '20px',
                letterSpacing: '0.2px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '31.2px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '52.8px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '70.4px'
            }
        ],
        '9.71': [
            '9.71px',
            {
                lineHeight: '11.1px'
            }
        ]
    },
    spacing: {
        '10': '40px',
        '12': '48px',
        '20': '80px',
        '24': '96px',
        '1px': '1px'
    },
    borderRadius: {
        xs: '2px',
        md: '10px',
        lg: '16px',
        full: '9999px'
    },
    boxShadow: {
        xs: 'rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset',
        sm: 'rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px',
        md: 'rgba(0, 0, 0, 0.15) 0px 4px 12px 0px'
    },
    screens: {
        sm: '640px',
        md: '810px',
        lg: '1024px'
    },
    transitionDuration: {
        '300': '0.3s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    container: {
        center: true,
        padding: '12px'
    },
    maxWidth: {
        container: '1200px'
    }
},
  },
};
