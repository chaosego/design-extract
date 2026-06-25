// React Theme — extracted from https://discord.com
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '22': string;
    '36': string;
    '44': string;
    '48': string;
    '61': string;
    '17.6': string;
 *   };
 *   space: {
    '1': string;
    '24': string;
    '29': string;
    '35': string;
    '48': string;
    '52': string;
    '56': string;
    '60': string;
    '64': string;
    '73': string;
    '76': string;
    '80': string;
    '96': string;
    '106': string;
    '125': string;
    '128': string;
 *   };
 *   radii: {
    lg: string;
    full: string;
 *   };
 *   shadows: {

 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#5865f2",
    "secondary": "#35ed7e",
    "accent": "#1a2081",
    "background": "#1a2081",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#333333",
    "neutral300": "#23272a"
  },
  "fonts": {
    "body": "'Abcgintodiscordnord', sans-serif"
  },
  "fontSizes": {
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "22": "22px",
    "36": "36px",
    "44": "44px",
    "48": "48px",
    "61": "61px",
    "17.6": "17.6px"
  },
  "space": {
    "1": "1px",
    "24": "24px",
    "29": "29px",
    "35": "35px",
    "48": "48px",
    "52": "52px",
    "56": "56px",
    "60": "60px",
    "64": "64px",
    "73": "73px",
    "76": "76px",
    "80": "80px",
    "96": "96px",
    "106": "106px",
    "125": "125px",
    "128": "128px"
  },
  "radii": {
    "lg": "16px",
    "full": "88px"
  },
  "shadows": {},
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#5865f2",
      "light": "hsl(235, 86%, 80%)",
      "dark": "hsl(235, 86%, 50%)"
    },
    "secondary": {
      "main": "#35ed7e",
      "light": "hsl(144, 84%, 72%)",
      "dark": "hsl(144, 84%, 42%)"
    },
    "background": {
      "default": "#1a2081",
      "paper": "#000000"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#333333"
    }
  },
  "typography": {
    "fontFamily": "'Ggsans', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "800",
      "lineHeight": "33.48px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "400",
      "lineHeight": "26px"
    }
  },
  "shape": {
    "borderRadius": 12
  },
  "shadows": []
};

export default theme;
