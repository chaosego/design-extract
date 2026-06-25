// React Theme — extracted from https://resend.com
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
    '56': string;
    '96': string;
    '76.8': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '24': string;
    '28': string;
    '40': string;
    '48': string;
    '62': string;
    '80': string;
    '96': string;
    '104': string;
    '144': string;
    '150': string;
    '221': string;
    '380': string;
 *   };
 *   radii: {
    sm: string;
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
    "primary": "#d6ebfd",
    "secondary": "#00a3ff",
    "accent": "#44ffa4",
    "background": "#000000",
    "foreground": "#ffffff",
    "neutral50": "#f0f0f0",
    "neutral100": "#a1a4a5",
    "neutral200": "#ffffff",
    "neutral300": "#f1f7fe",
    "neutral400": "#464a4d",
    "neutral500": "#6c6c6c",
    "neutral600": "#000000",
    "neutral700": "#e5edfd",
    "neutral800": "#70757e",
    "neutral900": "#262a2d"
  },
  "fonts": {
    "body": "'Arial', sans-serif",
    "mono": "'commitMono', monospace",
    "heading": "'domaine', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "56": "56px",
    "96": "96px",
    "76.8": "76.8px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "24": "24px",
    "28": "28px",
    "40": "40px",
    "48": "48px",
    "62": "62px",
    "80": "80px",
    "96": "96px",
    "104": "104px",
    "144": "144px",
    "150": "150px",
    "221": "221px",
    "380": "380px"
  },
  "radii": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "xl": "24px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 1px 1px 0px inset"
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
      "main": "#d6ebfd",
      "light": "hsl(208, 91%, 95%)",
      "dark": "hsl(208, 91%, 77%)"
    },
    "secondary": {
      "main": "#00a3ff",
      "light": "hsl(202, 100%, 65%)",
      "dark": "hsl(202, 100%, 35%)"
    },
    "background": {
      "default": "#000000",
      "paper": "#ffffff"
    },
    "text": {
      "primary": "#ffffff",
      "secondary": "#f0f0f0"
    }
  },
  "typography": {
    "fontFamily": "'inter', sans-serif",
    "h1": {
      "fontSize": "56px",
      "fontWeight": "400",
      "lineHeight": "67.2px",
      "fontFamily": "'domaine', sans-serif"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "33.6px",
      "fontFamily": "'domaine', sans-serif"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "400",
      "lineHeight": "26px",
      "fontFamily": "'domaine', sans-serif"
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
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
    "rgb(0, 0, 0) 0px 0px 0px 8px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(176, 199, 217, 0.145) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 1px 1px 0px inset"
  ]
};

export default theme;
