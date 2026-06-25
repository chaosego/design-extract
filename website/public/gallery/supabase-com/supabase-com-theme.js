// React Theme — extracted from https://supabase.com
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
    '14': string;
    '16': string;
    '18': string;
    '24': string;
    '36': string;
    '72': string;
 *   };
 *   space: {
    '1': string;
    '40': string;
    '48': string;
    '64': string;
    '90': string;
    '112': string;
    '128': string;
    '157': string;
    '208': string;
    '246': string;
    '304': string;
 *   };
 *   radii: {
    md: string;
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
    "primary": "#72e3ad",
    "secondary": "#00bb68",
    "accent": "#a9f1ca",
    "background": "#fcfcfc",
    "foreground": "#000000",
    "neutral50": "#dfdfdf",
    "neutral100": "#171717",
    "neutral200": "#525252",
    "neutral300": "#707070",
    "neutral400": "#ffffff",
    "neutral500": "#b2b2b2",
    "neutral600": "#000000",
    "neutral700": "#c7c7c7",
    "neutral800": "#ededed",
    "neutral900": "#d4d4d4"
  },
  "fonts": {
    "body": "'Source Code Pro', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "24": "24px",
    "36": "36px",
    "72": "72px"
  },
  "space": {
    "1": "1px",
    "40": "40px",
    "48": "48px",
    "64": "64px",
    "90": "90px",
    "112": "112px",
    "128": "128px",
    "157": "157px",
    "208": "208px",
    "246": "246px",
    "304": "304px"
  },
  "radii": {
    "md": "6px",
    "lg": "16px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
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
      "main": "#72e3ad",
      "light": "hsl(151, 67%, 82%)",
      "dark": "hsl(151, 67%, 52%)"
    },
    "secondary": {
      "main": "#00bb68",
      "light": "hsl(153, 100%, 52%)",
      "dark": "hsl(153, 100%, 22%)"
    },
    "background": {
      "default": "#fcfcfc",
      "paper": "#f8f8f8"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#171717"
    }
  },
  "typography": {
    "fontFamily": "'Source Code Pro', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "400",
      "lineHeight": "45px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "32px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body2": {
      "fontSize": "14px",
      "fontWeight": "500",
      "lineHeight": "20px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
  ]
};

export default theme;
