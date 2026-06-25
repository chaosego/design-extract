/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        'neutral-50': '#000000',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'Times',
            'sans-serif'
        ]
    },
    fontSize: {
        '13': [
            '13px',
            {
                lineHeight: 'normal'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ]
    },
    spacing: {
        '0': '8px',
        '1': '13px'
    }
},
  },
};
