/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(70, 23%, 97%)',
            '100': 'hsl(70, 23%, 94%)',
            '200': 'hsl(70, 23%, 86%)',
            '300': 'hsl(70, 23%, 76%)',
            '400': 'hsl(70, 23%, 64%)',
            '500': 'hsl(70, 23%, 50%)',
            '600': 'hsl(70, 23%, 40%)',
            '700': 'hsl(70, 23%, 32%)',
            '800': 'hsl(70, 23%, 24%)',
            '900': 'hsl(70, 23%, 16%)',
            '950': 'hsl(70, 23%, 10%)',
            DEFAULT: '#e9ebdf'
        },
        secondary: {
            '50': 'hsl(212, 59%, 97%)',
            '100': 'hsl(212, 59%, 94%)',
            '200': 'hsl(212, 59%, 86%)',
            '300': 'hsl(212, 59%, 76%)',
            '400': 'hsl(212, 59%, 64%)',
            '500': 'hsl(212, 59%, 50%)',
            '600': 'hsl(212, 59%, 40%)',
            '700': 'hsl(212, 59%, 32%)',
            '800': 'hsl(212, 59%, 24%)',
            '900': 'hsl(212, 59%, 16%)',
            '950': 'hsl(212, 59%, 10%)',
            DEFAULT: '#518dd2'
        },
        accent: {
            '50': 'hsl(75, 22%, 97%)',
            '100': 'hsl(75, 22%, 94%)',
            '200': 'hsl(75, 22%, 86%)',
            '300': 'hsl(75, 22%, 76%)',
            '400': 'hsl(75, 22%, 64%)',
            '500': 'hsl(75, 22%, 50%)',
            '600': 'hsl(75, 22%, 40%)',
            '700': 'hsl(75, 22%, 32%)',
            '800': 'hsl(75, 22%, 24%)',
            '900': 'hsl(75, 22%, 16%)',
            '950': 'hsl(75, 22%, 10%)',
            DEFAULT: '#f7f8f4'
        },
        'neutral-50': '#151515',
        'neutral-100': '#ffffff',
        'neutral-200': '#cbccc4',
        'neutral-300': '#242424',
        'neutral-400': '#8b867f',
        'neutral-500': '#b6b8af',
        'neutral-600': '#000000',
        'neutral-700': '#d9d9d9',
        'neutral-800': '#433e38',
        background: '#151515',
        foreground: '#ffffff'
    },
    fontFamily: {
        sans: [
            'saansFont',
            'sans-serif'
        ],
        body: [
            'pxGroteskFont',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '14.4px',
                letterSpacing: '0.12px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '21px',
                letterSpacing: '0.14px'
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
                lineHeight: '27px',
                letterSpacing: '0.18px'
            }
        ],
        '68.9231': [
            '68.9231px',
            {
                lineHeight: '72.3693px',
                letterSpacing: '-1.51631px'
            }
        ],
        '56.9231': [
            '56.9231px',
            {
                lineHeight: '59.7693px',
                letterSpacing: '-1.13846px'
            }
        ],
        '44.9231': [
            '44.9231px',
            {
                lineHeight: '47.1693px',
                letterSpacing: '-0.449231px'
            }
        ],
        '28.9231': [
            '28.9231px',
            {
                lineHeight: '30.3693px',
                letterSpacing: '-0.289231px'
            }
        ],
        '22.4615': [
            '22.4615px',
            {
                lineHeight: '26.9538px',
                letterSpacing: '-0.224615px'
            }
        ],
        '13.2308': [
            '13.2308px',
            {
                lineHeight: '13.2308px',
                letterSpacing: '0.132308px'
            }
        ],
        '11.3846': [
            '11.3846px',
            {
                lineHeight: '13.6615px',
                letterSpacing: '0.113846px'
            }
        ]
    },
    spacing: {
        '10': '20px',
        '12': '24px',
        '14': '28px',
        '16': '32px',
        '20': '40px',
        '28': '56px',
        '32': '64px',
        '40': '80px',
        '60': '120px',
        '79': '158px',
        '192': '384px',
        '1px': '1px',
        '71px': '71px'
    },
    borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        full: '9999px'
    },
    boxShadow: {
        sm: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgb(233, 234, 231) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px',
        xs: 'rgba(0, 0, 0, 0.12) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 0.5px'
    },
    screens: {
        '400px': '400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '1440px': '1440px',
        '1441px': '1441px',
        '1920px': '1920px',
        '2240px': '2240px'
    },
    transitionDuration: {
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '600': '0.6s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.12, 1, 0.72, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '2240px'
    }
},
  },
};
