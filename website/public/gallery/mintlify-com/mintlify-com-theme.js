// React Theme — extracted from https://mintlify.com
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
    body: string;
    mono: string;
    heading: string;
 *   };
 *   fontSizes: {
    '12': string;
    '14': string;
    '16': string;
    '18': string;
    '24': string;
    '35': string;
    '36': string;
    '44': string;
    '50': string;
 *   };
 *   space: {
    '4': string;
    '40': string;
    '48': string;
    '64': string;
    '80': string;
    '93': string;
    '104': string;
    '128': string;
    '160': string;
    '266': string;
    '290': string;
    '298': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    lg: string;
    xl: string;
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
    "primary": "#faf8f5",
    "secondary": "#004cff",
    "accent": "#ff7a59",
    "background": "#f9f6f3",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#121715",
    "neutral300": "#969e9b",
    "neutral400": "#485450",
    "neutral500": "#717d79",
    "neutral600": "#cfcdca"
  },
  "fonts": {
    "body": "'inter', sans-serif",
    "mono": "'paperMono', monospace",
    "heading": "'arizonaFlare', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "24": "24px",
    "35": "35px",
    "36": "36px",
    "44": "44px",
    "50": "50px"
  },
  "space": {
    "4": "4px",
    "40": "40px",
    "48": "48px",
    "64": "64px",
    "80": "80px",
    "93": "93px",
    "104": "104px",
    "128": "128px",
    "160": "160px",
    "266": "266px",
    "290": "290px",
    "298": "298px"
  },
  "radii": {
    "xs": "2px",
    "md": "6px",
    "lg": "12px",
    "xl": "24px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 169px 47px 0px, rgba(0, 0, 0, 0.01) 0px 108px 43px 0px, rgba(0, 0, 0, 0.02) 0px 61px 37px 0px, rgba(0, 0, 0, 0.03) 0px 27px 27px 0px, rgba(0, 0, 0, 0.04) 0px 7px 15px 0px"
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
      "main": "#faf8f5",
      "light": "hsl(36, 33%, 95%)",
      "dark": "hsl(36, 33%, 82%)"
    },
    "secondary": {
      "main": "#004cff",
      "light": "hsl(222, 100%, 65%)",
      "dark": "hsl(222, 100%, 35%)"
    },
    "background": {
      "default": "#f9f6f3",
      "paper": "#ef6333"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#0c8c5e"
    }
  },
  "typography": {
    "fontFamily": "'paperMono', sans-serif",
    "h1": {
      "fontSize": "35px",
      "fontWeight": "500",
      "lineHeight": "40px",
      "fontFamily": "'arizonaFlare', sans-serif"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "500",
      "lineHeight": "28px",
      "fontFamily": "'arizonaFlare', sans-serif"
    },
    "body1": {
      "fontSize": "18px",
      "fontWeight": "400",
      "lineHeight": "24px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 169px 47px 0px, rgba(0, 0, 0, 0.01) 0px 108px 43px 0px, rgba(0, 0, 0, 0.02) 0px 61px 37px 0px, rgba(0, 0, 0, 0.03) 0px 27px 27px 0px, rgba(0, 0, 0, 0.04) 0px 7px 15px 0px"
  ]
};

export default theme;
