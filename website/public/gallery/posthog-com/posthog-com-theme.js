// React Theme — extracted from https://posthog.com
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
    neutral900: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '12': string;
    '13': string;
    '14': string;
    '15': string;
    '16': string;
    '18': string;
    '20': string;
    '24': string;
    '36': string;
    '21.4286': string;
    '19.2857': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '32': string;
    '48': string;
    '64': string;
    '120': string;
    '144': string;
    '220': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
    md: string;
    full: string;
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
    "primary": "#e1d7c2",
    "secondary": "#eb9d2a",
    "accent": "#eeefe9",
    "background": "#e5e7e0",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#4d4f46",
    "neutral200": "#374151",
    "neutral300": "#23251d",
    "neutral400": "#9ea096",
    "neutral500": "#65675e",
    "neutral600": "#bfc1b7",
    "neutral700": "#ffffff",
    "neutral800": "#b6b7af",
    "neutral900": "#131316"
  },
  "fonts": {
    "body": "'Source Code Pro', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "36": "36px",
    "21.4286": "21.4286px",
    "19.2857": "19.2857px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "32": "32px",
    "48": "48px",
    "64": "64px",
    "120": "120px",
    "144": "144px",
    "220": "220px"
  },
  "radii": {
    "xs": "2px",
    "sm": "5px",
    "md": "8px",
    "full": "9999px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0px 6px 2px"
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
      "main": "#e1d7c2",
      "light": "hsl(41, 34%, 95%)",
      "dark": "hsl(41, 34%, 67%)"
    },
    "secondary": {
      "main": "#eb9d2a",
      "light": "hsl(36, 83%, 69%)",
      "dark": "hsl(36, 83%, 39%)"
    },
    "background": {
      "default": "#e5e7e0",
      "paper": "#e1d7c2"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#23251d"
    }
  },
  "typography": {
    "fontFamily": "'IBM Plex Sans Variable', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "700",
      "lineHeight": "54px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "800",
      "lineHeight": "32px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "700",
      "lineHeight": "28px"
    },
    "body1": {
      "fontSize": "18px",
      "fontWeight": "700",
      "lineHeight": "27px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0px 6px 2px"
  ]
};

export default theme;
