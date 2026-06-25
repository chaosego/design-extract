// React Theme — extracted from https://railway.app
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
    '20': string;
    '24': string;
    '36': string;
    '40': string;
    '54': string;
    '13.3333': string;
    '11.6667': string;
 *   };
 *   space: {
    '4': string;
    '60': string;
    '80': string;
    '96': string;
    '128': string;
    '159': string;
    '235': string;
    '262': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    lg: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
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
    "primary": "#59497a",
    "secondary": "#291839",
    "accent": "#1f132a",
    "background": "#13111c",
    "foreground": "#ffffff",
    "neutral50": "#33323e",
    "neutral100": "#f7f7f8",
    "neutral200": "#545260",
    "neutral300": "#a1a0ab",
    "neutral400": "#609f89",
    "neutral500": "#878593",
    "neutral600": "#dcdce0",
    "neutral700": "#000000"
  },
  "fonts": {
    "body": "'Helvetica', sans-serif",
    "mono": "'JetBrains Mono', monospace",
    "heading": "'IBM Plex Serif', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "36": "36px",
    "40": "40px",
    "54": "54px",
    "13.3333": "13.3333px",
    "11.6667": "11.6667px"
  },
  "space": {
    "4": "4px",
    "60": "60px",
    "80": "80px",
    "96": "96px",
    "128": "128px",
    "159": "159px",
    "235": "235px",
    "262": "262px"
  },
  "radii": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "full": "9999px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
    "xs": "rgb(204, 204, 204) 0px 0px 2px 2px",
    "xl": "rgba(65, 78, 166, 0.1) 0px -12px 127px 0px, rgba(65, 78, 166, 0.07) 0px -4.38px 46.357px 0px, rgba(65, 78, 166, 0.06) 0px -2.127px 22.506px 0px, rgba(65, 78, 166, 0.04) 0px -1.042px 11.033px 0px, rgba(65, 78, 166, 0.03) 0px -0.412px 4.362px 0px"
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
      "main": "#59497a",
      "light": "hsl(260, 25%, 53%)",
      "dark": "hsl(260, 25%, 23%)"
    },
    "secondary": {
      "main": "#291839",
      "light": "hsl(271, 41%, 31%)",
      "dark": "hsl(271, 41%, 10%)"
    },
    "background": {
      "default": "#13111c",
      "paper": "#000000"
    },
    "text": {
      "primary": "#ffffff",
      "secondary": "#13111c"
    }
  },
  "typography": {
    "fontFamily": "'Inter', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "400",
      "lineHeight": "48px",
      "fontFamily": "'IBM Plex Serif', sans-serif"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "32px",
      "fontFamily": "'IBM Plex Serif', sans-serif"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "700",
      "lineHeight": "30px",
      "fontFamily": "'IBM Plex Serif', sans-serif"
    },
    "body1": {
      "fontSize": "18px",
      "fontWeight": "400",
      "lineHeight": "27px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px 0px 1.5px inset",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(62, 45, 45, 0.24) 0px 100px 191px 0px, rgba(62, 45, 45, 0.165) 0px 36.5016px 69.7181px 0px, rgba(62, 45, 45, 0.133) 0px 17.7209px 33.8469px 0px, rgba(62, 45, 45, 0.106) 0px 8.6871px 16.5924px 0px, rgba(62, 45, 45, 0.075) 0px 3.43489px 6.56065px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
    "rgb(204, 204, 204) 0px 0px 2px 2px",
    "rgba(65, 78, 166, 0.1) 0px -12px 127px 0px, rgba(65, 78, 166, 0.07) 0px -4.38px 46.357px 0px, rgba(65, 78, 166, 0.06) 0px -2.127px 22.506px 0px, rgba(65, 78, 166, 0.04) 0px -1.042px 11.033px 0px, rgba(65, 78, 166, 0.03) 0px -0.412px 4.362px 0px"
  ]
};

export default theme;
