// React Theme — extracted from https://sentry.io
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
    mono: string;
 *   };
 *   fontSizes: {
    '10': string;
    '12': string;
    '14': string;
    '15': string;
    '16': string;
    '20': string;
    '24': string;
    '27': string;
    '30': string;
    '60': string;
    '88': string;
 *   };
 *   space: {
    '2': string;
    '16': string;
    '20': string;
    '24': string;
    '32': string;
    '35': string;
    '40': string;
    '44': string;
    '56': string;
    '64': string;
    '72': string;
    '83': string;
    '160': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    lg: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    md: string;
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
    "primary": "#150f23",
    "secondary": "#9ecbff",
    "accent": "#2d2340",
    "background": "#1f1633",
    "foreground": "#000000",
    "neutral50": "#ffffff",
    "neutral100": "#d4d4d4",
    "neutral200": "#e1e4e8",
    "neutral300": "#6a737d",
    "neutral400": "#000000",
    "neutral500": "#1a1a1a",
    "neutral600": "#efefef",
    "neutral700": "#584674",
    "neutral800": "#c1c1c1"
  },
  "fonts": {
    "body": "'Dammit Sans', sans-serif",
    "mono": "'IBM Plex Mono', monospace"
  },
  "fontSizes": {
    "10": "10px",
    "12": "12px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "20": "20px",
    "24": "24px",
    "27": "27px",
    "30": "30px",
    "60": "60px",
    "88": "88px"
  },
  "space": {
    "2": "2px",
    "16": "16px",
    "20": "20px",
    "24": "24px",
    "32": "32px",
    "35": "35px",
    "40": "40px",
    "44": "44px",
    "56": "56px",
    "64": "64px",
    "72": "72px",
    "83": "83px",
    "160": "160px"
  },
  "radii": {
    "xs": "2px",
    "md": "10px",
    "lg": "16px",
    "full": "50px"
  },
  "shadows": {
    "sm": "rgb(21, 15, 35) 0px 0px 8px 6px",
    "md": "rgba(0, 0, 0, 0.15) 0px 2px 10px 0px inset"
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
      "main": "#150f23",
      "light": "hsl(258, 40%, 25%)",
      "dark": "hsl(258, 40%, 10%)"
    },
    "secondary": {
      "main": "#9ecbff",
      "light": "hsl(212, 100%, 95%)",
      "dark": "hsl(212, 100%, 66%)"
    },
    "background": {
      "default": "#1f1633",
      "paper": "#150f23"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#ffffff"
    }
  },
  "typography": {
    "fontFamily": "'Monaco', sans-serif",
    "h1": {
      "fontSize": "60px",
      "fontWeight": "500",
      "lineHeight": "66px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "500",
      "lineHeight": "30px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "600",
      "lineHeight": "25px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset",
    "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px",
    "rgb(128, 128, 128) 0px 0px 5px 0px",
    "rgb(21, 15, 35) 0px 0px 8px 6px"
  ]
};

export default theme;
