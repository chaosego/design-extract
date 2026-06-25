// React Theme — extracted from https://loom.com
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
    '15': string;
    '16': string;
    '18': string;
    '24': string;
    '30': string;
    '56.5385': string;
    '40.3077': string;
    '25.3077': string;
    '23.5385': string;
    '18.4': string;
    '18.2462': string;
    '15.2308': string;
 *   };
 *   space: {
    '1': string;
    '15': string;
    '23': string;
    '30': string;
    '35': string;
    '40': string;
    '48': string;
    '56': string;
    '64': string;
    '80': string;
    '84': string;
    '103': string;
    '154': string;
    '192': string;
    '269': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    md: string;
    xl: string;
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
    "primary": "#1868db",
    "secondary": "#ffab00",
    "accent": "#e9f2fe",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#292a2e",
    "neutral100": "#000000",
    "neutral200": "#ffffff",
    "neutral300": "#696969",
    "neutral400": "#555555",
    "neutral500": "#f8f8f8",
    "neutral600": "#7d818a",
    "neutral700": "#d8d8d8",
    "neutral800": "#bbbbbb"
  },
  "fonts": {
    "body": "'Times', sans-serif"
  },
  "fontSizes": {
    "15": "15px",
    "16": "16px",
    "18": "18px",
    "24": "24px",
    "30": "30px",
    "56.5385": "56.5385px",
    "40.3077": "40.3077px",
    "25.3077": "25.3077px",
    "23.5385": "23.5385px",
    "18.4": "18.4px",
    "18.2462": "18.2462px",
    "15.2308": "15.2308px"
  },
  "space": {
    "1": "1px",
    "15": "15px",
    "23": "23px",
    "30": "30px",
    "35": "35px",
    "40": "40px",
    "48": "48px",
    "56": "56px",
    "64": "64px",
    "80": "80px",
    "84": "84px",
    "103": "103px",
    "154": "154px",
    "192": "192px",
    "269": "269px"
  },
  "radii": {
    "xs": "1px",
    "md": "6px",
    "lg": "16px",
    "xl": "24px",
    "full": "9999px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px",
    "md": "rgb(199, 197, 199) 0px 0px 12px 2px",
    "xl": "rgba(0, 0, 0, 0.25) 0px 15px 50px 0px"
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
      "main": "#1868db",
      "light": "hsl(215, 80%, 63%)",
      "dark": "hsl(215, 80%, 33%)"
    },
    "secondary": {
      "main": "#ffab00",
      "light": "hsl(40, 100%, 65%)",
      "dark": "hsl(40, 100%, 35%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#101214"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#292a2e"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "40.3077px",
      "fontWeight": "700",
      "lineHeight": "46.0717px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "normal"
    },
    "h3": {
      "fontSize": "23.5385px",
      "fontWeight": "700",
      "lineHeight": "31.3768px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 4.34077px",
    "rgba(255, 255, 255, 0.4) 0px 0px 0px 5px, rgba(0, 0, 0, 0.17) 0px 45.612px 86.879px 0px, rgba(0, 0, 0, 0.11) 0px 13.751px 26.192px 0px, rgba(0, 0, 0, 0.09) 0px 5.71104px 10.879px 0px, rgba(0, 0, 0, 0.06) 0px 2.06592px 3.93504px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px",
    "rgba(0, 0, 0, 0.25) 0px 3.24px 3.24px 0px",
    "rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px"
  ]
};

export default theme;
