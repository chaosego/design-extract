// React Theme — extracted from https://retool.com
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
    '12': string;
    '14': string;
    '16': string;
    '18': string;
    '68.9231': string;
    '56.9231': string;
    '44.9231': string;
    '28.9231': string;
    '22.4615': string;
    '13.2308': string;
    '11.3846': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '24': string;
    '28': string;
    '32': string;
    '40': string;
    '56': string;
    '64': string;
    '71': string;
    '80': string;
    '120': string;
    '158': string;
    '384': string;
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
    xs: string;
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
    "primary": "#e9ebdf",
    "secondary": "#518dd2",
    "accent": "#f7f8f4",
    "background": "#151515",
    "foreground": "#ffffff",
    "neutral50": "#151515",
    "neutral100": "#ffffff",
    "neutral200": "#cbccc4",
    "neutral300": "#242424",
    "neutral400": "#8b867f",
    "neutral500": "#b6b8af",
    "neutral600": "#000000",
    "neutral700": "#d9d9d9",
    "neutral800": "#433e38"
  },
  "fonts": {
    "body": "'pxGroteskFont', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "68.9231": "68.9231px",
    "56.9231": "56.9231px",
    "44.9231": "44.9231px",
    "28.9231": "28.9231px",
    "22.4615": "22.4615px",
    "13.2308": "13.2308px",
    "11.3846": "11.3846px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "24": "24px",
    "28": "28px",
    "32": "32px",
    "40": "40px",
    "56": "56px",
    "64": "64px",
    "71": "71px",
    "80": "80px",
    "120": "120px",
    "158": "158px",
    "384": "384px"
  },
  "radii": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "xl": "24px",
    "full": "9999px"
  },
  "shadows": {
    "sm": "rgb(255, 255, 255) 0px 0px 0px 0px, rgb(233, 234, 231) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "xs": "rgba(0, 0, 0, 0.12) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 0.5px"
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
      "main": "#e9ebdf",
      "light": "hsl(70, 23%, 95%)",
      "dark": "hsl(70, 23%, 75%)"
    },
    "secondary": {
      "main": "#518dd2",
      "light": "hsl(212, 59%, 72%)",
      "dark": "hsl(212, 59%, 42%)"
    },
    "background": {
      "default": "#151515",
      "paper": "#000000"
    },
    "text": {
      "primary": "#ffffff",
      "secondary": "#e9ebdf"
    }
  },
  "typography": {
    "fontFamily": "'pxGroteskFont', sans-serif",
    "h1": {
      "fontSize": "44.9231px",
      "fontWeight": "300",
      "lineHeight": "47.1693px"
    },
    "h2": {
      "fontSize": "28.9231px",
      "fontWeight": "300",
      "lineHeight": "30.3693px"
    },
    "h3": {
      "fontSize": "22.4615px",
      "fontWeight": "380",
      "lineHeight": "26.9538px"
    },
    "body1": {
      "fontSize": "18px",
      "fontWeight": "300",
      "lineHeight": "27px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.35) 0px 68px 116px 0px",
    "rgb(255, 255, 255) 0px 0px 0px 0px, rgb(233, 234, 231) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "rgba(0, 0, 0, 0.12) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 0.5px"
  ]
};

export default theme;
