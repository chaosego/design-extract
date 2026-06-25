// React Theme — extracted from https://duolingo.com
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
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '13': string;
    '14': string;
    '15': string;
    '16': string;
    '17': string;
    '19': string;
    '32': string;
    '48': string;
    '64': string;
 *   };
 *   space: {
    '1': string;
    '8': string;
    '23': string;
    '40': string;
    '48': string;
    '64': string;
    '80': string;
    '96': string;
    '140': string;
    '185': string;
 *   };
 *   radii: {
    xs: string;
    lg: string;
 *   };
 *   shadows: {
    sm: string;
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
    "primary": "#d7ffb8",
    "secondary": "#0000ee",
    "accent": "#ddf4ff",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#3c3c3c",
    "neutral100": "#777777",
    "neutral200": "#000000",
    "neutral300": "#4b4b4b",
    "neutral400": "#afafaf",
    "neutral500": "#ffffff",
    "neutral600": "#e5e5e5",
    "neutral700": "#808080",
    "neutral800": "#c1c1c1"
  },
  "fonts": {
    "body": "'duolingo-sans', sans-serif"
  },
  "fontSizes": {
    "13": "13px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "17": "17px",
    "19": "19px",
    "32": "32px",
    "48": "48px",
    "64": "64px"
  },
  "space": {
    "1": "1px",
    "8": "8px",
    "23": "23px",
    "40": "40px",
    "48": "48px",
    "64": "64px",
    "80": "80px",
    "96": "96px",
    "140": "140px",
    "185": "185px"
  },
  "radii": {
    "xs": "2px",
    "lg": "12px"
  },
  "shadows": {
    "sm": "rgb(128, 128, 128) 0px 0px 5px 0px"
  },
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
      "main": "#d7ffb8",
      "light": "hsl(94, 100%, 95%)",
      "dark": "hsl(94, 100%, 71%)"
    },
    "secondary": {
      "main": "#0000ee",
      "light": "hsl(240, 100%, 62%)",
      "dark": "hsl(240, 100%, 32%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#ddf4ff"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#3c3c3c"
    }
  },
  "typography": {
    "h1": {
      "fontSize": "32px",
      "fontWeight": "700",
      "lineHeight": "normal"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "18.4px"
    }
  },
  "shape": {
    "borderRadius": 2
  },
  "shadows": [
    "rgb(128, 128, 128) 0px 0px 5px 0px"
  ]
};

export default theme;
