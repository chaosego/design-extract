/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(235, 86%, 97%)',
            '100': 'hsl(235, 86%, 94%)',
            '200': 'hsl(235, 86%, 86%)',
            '300': 'hsl(235, 86%, 76%)',
            '400': 'hsl(235, 86%, 64%)',
            '500': 'hsl(235, 86%, 50%)',
            '600': 'hsl(235, 86%, 40%)',
            '700': 'hsl(235, 86%, 32%)',
            '800': 'hsl(235, 86%, 24%)',
            '900': 'hsl(235, 86%, 16%)',
            '950': 'hsl(235, 86%, 10%)',
            DEFAULT: '#5865f2'
        },
        secondary: {
            '50': 'hsl(144, 84%, 97%)',
            '100': 'hsl(144, 84%, 94%)',
            '200': 'hsl(144, 84%, 86%)',
            '300': 'hsl(144, 84%, 76%)',
            '400': 'hsl(144, 84%, 64%)',
            '500': 'hsl(144, 84%, 50%)',
            '600': 'hsl(144, 84%, 40%)',
            '700': 'hsl(144, 84%, 32%)',
            '800': 'hsl(144, 84%, 24%)',
            '900': 'hsl(144, 84%, 16%)',
            '950': 'hsl(144, 84%, 10%)',
            DEFAULT: '#35ed7e'
        },
        accent: {
            '50': 'hsl(237, 66%, 97%)',
            '100': 'hsl(237, 66%, 94%)',
            '200': 'hsl(237, 66%, 86%)',
            '300': 'hsl(237, 66%, 76%)',
            '400': 'hsl(237, 66%, 64%)',
            '500': 'hsl(237, 66%, 50%)',
            '600': 'hsl(237, 66%, 40%)',
            '700': 'hsl(237, 66%, 32%)',
            '800': 'hsl(237, 66%, 24%)',
            '900': 'hsl(237, 66%, 16%)',
            '950': 'hsl(237, 66%, 10%)',
            DEFAULT: '#1a2081'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#333333',
        'neutral-300': '#23272a',
        background: '#1a2081',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'Times',
            'sans-serif'
        ],
        heading: [
            'Abcgintodiscord',
            'sans-serif'
        ],
        font4: [
            'Abcgintodiscordnord',
            'sans-serif'
        ]
    },
    fontSize: {
        '14': [
            '14px',
            {
                lineHeight: '18.2px',
                letterSpacing: '0.25px'
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
                lineHeight: '24px',
                letterSpacing: '0.25px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '26px',
                letterSpacing: '0.32px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '17.6px',
                letterSpacing: '-0.66px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '33.48px',
                letterSpacing: '-0.36px'
            }
        ],
        '44': [
            '44px',
            {
                lineHeight: '37.7143px',
                letterSpacing: '-0.44px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '57.6px',
                letterSpacing: '-0.48px'
            }
        ],
        '61': [
            '61px',
            {
                lineHeight: '25px',
                letterSpacing: '-0.61px'
            }
        ],
        '17.6': [
            '17.6px',
            {
                lineHeight: '24px'
            }
        ]
    },
    spacing: {
        '0': '1px',
        '1': '24px',
        '2': '29px',
        '3': '35px',
        '4': '48px',
        '5': '52px',
        '6': '56px',
        '7': '60px',
        '8': '64px',
        '9': '73px',
        '10': '76px',
        '11': '80px',
        '12': '96px',
        '13': '106px',
        '14': '125px',
        '15': '128px',
        '16': '134px',
        '17': '143px',
        '18': '154px',
        '19': '157px',
        '20': '160px',
        '21': '174px',
        '22': '185px',
        '23': '194px',
        '24': '197px',
        '25': '221px',
        '26': '235px',
        '27': '256px',
        '28': '293px',
        '29': '413px',
        '30': '426px',
        '31': '432px',
        '32': '445px'
    },
    borderRadius: {
        lg: '16px',
        full: '88px'
    },
    screens: {
        '240px': '240px',
        xs: '350px',
        '400px': '400px',
        sm: '700px',
        '550px': '550px',
        md: '800px',
        '850px': '850px',
        '900px': '900px',
        '950px': '950px',
        lg: '1050px',
        '1100px': '1100px',
        '1150px': '1150px',
        '1200px': '1200px',
        xl: '1300px',
        '1350px': '1350px',
        '1400px': '1400px',
        '1440px': '1440px',
        '1441px': '1441px',
        '1450px': '1450px',
        '2xl': '1600px',
        '1650px': '1650px',
        '1680px': '1680px',
        '1700px': '1700px',
        '1750px': '1750px',
        '1800px': '1800px',
        '1920px': '1920px',
        '1991px': '1991px'
    },
    transitionDuration: {
        '200': '0.2s',
        '250': '0.25s',
        '300': '0.3s',
        '350': '0.35s',
        '400': '0.4s',
        '500': '0.5s'
    },
    transitionTimingFunction: {
        default: 'ease'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1080px'
    }
},
  },
};
