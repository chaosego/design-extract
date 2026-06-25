/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(215, 80%, 97%)',
            '100': 'hsl(215, 80%, 94%)',
            '200': 'hsl(215, 80%, 86%)',
            '300': 'hsl(215, 80%, 76%)',
            '400': 'hsl(215, 80%, 64%)',
            '500': 'hsl(215, 80%, 50%)',
            '600': 'hsl(215, 80%, 40%)',
            '700': 'hsl(215, 80%, 32%)',
            '800': 'hsl(215, 80%, 24%)',
            '900': 'hsl(215, 80%, 16%)',
            '950': 'hsl(215, 80%, 10%)',
            DEFAULT: '#1868db'
        },
        secondary: {
            '50': 'hsl(40, 100%, 97%)',
            '100': 'hsl(40, 100%, 94%)',
            '200': 'hsl(40, 100%, 86%)',
            '300': 'hsl(40, 100%, 76%)',
            '400': 'hsl(40, 100%, 64%)',
            '500': 'hsl(40, 100%, 50%)',
            '600': 'hsl(40, 100%, 40%)',
            '700': 'hsl(40, 100%, 32%)',
            '800': 'hsl(40, 100%, 24%)',
            '900': 'hsl(40, 100%, 16%)',
            '950': 'hsl(40, 100%, 10%)',
            DEFAULT: '#ffab00'
        },
        accent: {
            '50': 'hsl(214, 91%, 97%)',
            '100': 'hsl(214, 91%, 94%)',
            '200': 'hsl(214, 91%, 86%)',
            '300': 'hsl(214, 91%, 76%)',
            '400': 'hsl(214, 91%, 64%)',
            '500': 'hsl(214, 91%, 50%)',
            '600': 'hsl(214, 91%, 40%)',
            '700': 'hsl(214, 91%, 32%)',
            '800': 'hsl(214, 91%, 24%)',
            '900': 'hsl(214, 91%, 16%)',
            '950': 'hsl(214, 91%, 10%)',
            DEFAULT: '#e9f2fe'
        },
        'neutral-50': '#292a2e',
        'neutral-100': '#000000',
        'neutral-200': '#ffffff',
        'neutral-300': '#696969',
        'neutral-400': '#555555',
        'neutral-500': '#f8f8f8',
        'neutral-600': '#7d818a',
        'neutral-700': '#d8d8d8',
        'neutral-800': '#bbbbbb',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Charlie Text',
            'sans-serif'
        ],
        heading: [
            'Charlie Display',
            'sans-serif'
        ],
        body: [
            'Times',
            'sans-serif'
        ]
    },
    fontSize: {
        '14': [
            '14px',
            {
                lineHeight: '21px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '22.5px'
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
        '24': [
            '24px',
            {
                lineHeight: 'normal'
            }
        ],
        '30': [
            '30px',
            {
                lineHeight: '38.19px'
            }
        ],
        '56.5385': [
            '56.5385px',
            {
                lineHeight: '58.1781px'
            }
        ],
        '40.3077': [
            '40.3077px',
            {
                lineHeight: '46.0717px'
            }
        ],
        '25.3077': [
            '25.3077px',
            {
                lineHeight: '38.5689px'
            }
        ],
        '23.5385': [
            '23.5385px',
            {
                lineHeight: '31.3768px'
            }
        ],
        '18.4': [
            '18.4px',
            {
                lineHeight: '27.6px'
            }
        ],
        '18.2462': [
            '18.2462px',
            {
                lineHeight: '30.0514px'
            }
        ],
        '15.2308': [
            '15.2308px',
            {
                lineHeight: '26.1055px'
            }
        ],
        '14.4': [
            '14.4px',
            {
                lineHeight: '14.4px',
                letterSpacing: '0.144px'
            }
        ],
        '13.6': [
            '13.6px',
            {
                lineHeight: '27.2px'
            }
        ]
    },
    spacing: {
        '15': '30px',
        '20': '40px',
        '24': '48px',
        '28': '56px',
        '32': '64px',
        '40': '80px',
        '42': '84px',
        '77': '154px',
        '96': '192px',
        '1px': '1px',
        '15px': '15px',
        '23px': '23px',
        '35px': '35px',
        '103px': '103px',
        '269px': '269px'
    },
    borderRadius: {
        xs: '1px',
        md: '6px',
        lg: '16px',
        xl: '24px',
        full: '9999px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px',
        md: 'rgb(199, 197, 199) 0px 0px 12px 2px',
        xl: 'rgba(0, 0, 0, 0.25) 0px 15px 50px 0px'
    },
    screens: {
        xs: '375px',
        '400px': '400px',
        sm: '640px',
        md: '820px',
        '890px': '890px',
        '897px': '897px',
        lg: '1025px',
        xl: '1280px',
        '1358px': '1358px',
        '2xl': '1600px',
        '1650px': '1650px',
        '1920px': '1920px',
        '2384px': '2384px',
        '2884px': '2884px'
    },
    transitionDuration: {
        '100': '0.1s',
        '150': '0.15s',
        '200': '0.2s',
        '250': '0.25s',
        '300': '0.3s',
        '500': '0.5s',
        '1000': '1s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        default: 'ease'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1280px'
    }
},
  },
};
