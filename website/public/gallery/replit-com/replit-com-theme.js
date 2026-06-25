// React Theme — extracted from https://replit.com
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
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '13': string;
    '15': string;
    '16': string;
    '30': string;
    '60': string;
 *   };
 *   space: {
    '3': string;
    '23': string;
    '53': string;
    '160': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
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
    "primary": "#0051c3",
    "secondary": "#de5052",
    "accent": "#521010",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#404040",
    "neutral100": "#000000",
    "neutral200": "#595959",
    "neutral300": "#ffffff",
    "neutral400": "#ebebeb"
  },
  "fonts": {
    "body": "'Times', sans-serif"
  },
  "fontSizes": {
    "13": "13px",
    "15": "15px",
    "16": "16px",
    "30": "30px",
    "60": "60px"
  },
  "space": {
    "3": "3px",
    "23": "23px",
    "53": "53px",
    "160": "160px"
  },
  "radii": {
    "xs": "2px",
    "sm": "5px"
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
      "main": "#0051c3",
      "light": "hsl(215, 100%, 53%)",
      "dark": "hsl(215, 100%, 23%)"
    },
    "secondary": {
      "main": "#de5052",
      "light": "hsl(359, 68%, 74%)",
      "dark": "hsl(359, 68%, 44%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#ebebeb"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#404040"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "60px",
      "fontWeight": "300",
      "lineHeight": "72px"
    },
    "h2": {
      "fontSize": "30px",
      "fontWeight": "300",
      "lineHeight": "39px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    },
    "body2": {
      "fontSize": "13px",
      "fontWeight": "400",
      "lineHeight": "19.5px"
    }
  },
  "shape": {
    "borderRadius": 2
  },
  "shadows": []
};

export default theme;
