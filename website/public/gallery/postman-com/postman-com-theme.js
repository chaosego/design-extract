// React Theme — extracted from https://postman.com
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
    heading: string;
 *   };
 *   fontSizes: {
    '10': string;
    '12': string;
    '14': string;
    '16': string;
    '20': string;
    '22': string;
    '36': string;
    '55': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '24': string;
    '40': string;
    '50': string;
    '60': string;
    '64': string;
    '80': string;
    '120': string;
    '224': string;
    '252': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    lg: string;
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
    "primary": "#e05320",
    "secondary": "#007bff",
    "accent": "#ff6c37",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#212121",
    "neutral100": "#000000",
    "neutral200": "#707070",
    "neutral300": "#ffffff",
    "neutral400": "#5c5c5c",
    "neutral500": "#e6e6e6",
    "neutral600": "#09070d",
    "neutral700": "#8a8a8a",
    "neutral800": "#cfcfcf"
  },
  "fonts": {
    "body": "'Times', sans-serif",
    "mono": "'ibmPlexMono', monospace",
    "heading": "'degular', sans-serif"
  },
  "fontSizes": {
    "10": "10px",
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "20": "20px",
    "22": "22px",
    "36": "36px",
    "55": "55px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "24": "24px",
    "40": "40px",
    "50": "50px",
    "60": "60px",
    "64": "64px",
    "80": "80px",
    "120": "120px",
    "224": "224px",
    "252": "252px"
  },
  "radii": {
    "sm": "3px",
    "md": "10px",
    "lg": "15px",
    "xl": "20px",
    "full": "9999px"
  },
  "shadows": {
    "sm": "rgb(255, 108, 55) 0px 0px 0px 1px inset",
    "lg": "rgb(179, 135, 245) 0px 4px 24px 0px"
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
      "main": "#e05320",
      "light": "hsl(16, 76%, 65%)",
      "dark": "hsl(16, 76%, 35%)"
    },
    "secondary": {
      "main": "#007bff",
      "light": "hsl(211, 100%, 65%)",
      "dark": "hsl(211, 100%, 35%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#f9f8f7"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#212121"
    }
  },
  "typography": {
    "fontFamily": "'ibmPlexMono', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "600",
      "lineHeight": "42.0001px",
      "fontFamily": "'degular', sans-serif"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "400",
      "lineHeight": "24px",
      "fontFamily": "'degular', sans-serif"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "18.4px"
    },
    "body2": {
      "fontSize": "14px",
      "fontWeight": "600",
      "lineHeight": "21px"
    }
  },
  "shape": {
    "borderRadius": 10
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 2px 8px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "rgb(255, 108, 55) 0px 0px 0px 1px inset",
    "rgb(179, 135, 245) 0px 4px 24px 0px"
  ]
};

export default theme;
