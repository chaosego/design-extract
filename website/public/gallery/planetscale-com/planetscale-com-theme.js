// React Theme — extracted from https://planetscale.com
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
 *   };
 *   fonts: {

 *   };
 *   fontSizes: {
    '12': string;
    '16': string;
 *   };
 *   space: {
    '4': string;
    '80': string;
    '96': string;
 *   };
 *   radii: {
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
    "primary": "#f2b600",
    "secondary": "#f35815",
    "accent": "#0b6ec5",
    "background": "#fafafa",
    "foreground": "#414141",
    "neutral50": "#414141",
    "neutral100": "#c1c1c1",
    "neutral200": "#737373",
    "neutral300": "#ffffff",
    "neutral400": "#000000",
    "neutral500": "#111111",
    "neutral600": "#ebebeb"
  },
  "fonts": {},
  "fontSizes": {
    "12": "12px",
    "16": "16px"
  },
  "space": {
    "4": "4px",
    "80": "80px",
    "96": "96px"
  },
  "radii": {
    "full": "9999px"
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
      "main": "#f2b600",
      "light": "hsl(45, 100%, 62%)",
      "dark": "hsl(45, 100%, 32%)"
    },
    "secondary": {
      "main": "#f35815",
      "light": "hsl(18, 90%, 67%)",
      "dark": "hsl(18, 90%, 37%)"
    },
    "background": {
      "default": "#fafafa",
      "paper": "#111111"
    },
    "text": {
      "primary": "#414141",
      "secondary": "#ffffff"
    }
  },
  "typography": {
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body2": {
      "fontSize": "12px",
      "fontWeight": "500",
      "lineHeight": "16px"
    }
  },
  "shape": {
    "borderRadius": 9999
  },
  "shadows": []
};

export default theme;
