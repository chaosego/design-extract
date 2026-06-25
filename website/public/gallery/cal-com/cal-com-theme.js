// React Theme — extracted from https://cal.com
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
    heading: string;
    mono: string;
 *   };
 *   fontSizes: {
    '8': string;
    '10': string;
    '12': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '24': string;
    '48': string;
    '64': string;
    '9.71': string;
 *   };
 *   space: {
    '1': string;
    '40': string;
    '48': string;
    '80': string;
    '96': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    lg: string;
    full: string;
 *   };
 *   shadows: {
    xs: string;
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
    "primary": "#0000ee",
    "secondary": "#0099ff",
    "accent": "#d6ecfe",
    "background": "#f4f4f4",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#242424",
    "neutral200": "#898989",
    "neutral300": "#e5e7eb",
    "neutral400": "#ffffff",
    "neutral500": "#111111",
    "neutral600": "#f4f4f4",
    "neutral700": "#374151",
    "neutral800": "#d3d3d3",
    "neutral900": "#808080"
  },
  "fonts": {
    "body": "'CUSTOMV2;Cal Sans UI Regular', sans-serif",
    "heading": "'Matter SemiBold', sans-serif",
    "mono": "'Roboto Mono', monospace"
  },
  "fontSizes": {
    "8": "8px",
    "10": "10px",
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "48": "48px",
    "64": "64px",
    "9.71": "9.71px"
  },
  "space": {
    "1": "1px",
    "40": "40px",
    "48": "48px",
    "80": "80px",
    "96": "96px"
  },
  "radii": {
    "xs": "2px",
    "md": "10px",
    "lg": "16px",
    "full": "9999px"
  },
  "shadows": {
    "xs": "rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset",
    "sm": "rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px",
    "md": "rgba(0, 0, 0, 0.15) 0px 4px 12px 0px"
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
      "main": "#0000ee",
      "light": "hsl(240, 100%, 62%)",
      "dark": "hsl(240, 100%, 32%)"
    },
    "secondary": {
      "main": "#0099ff",
      "light": "hsl(204, 100%, 65%)",
      "dark": "hsl(204, 100%, 35%)"
    },
    "background": {
      "default": "#f4f4f4",
      "paper": "#ffffff"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#ffffff"
    }
  },
  "typography": {
    "fontFamily": "'Inter', sans-serif",
    "h1": {
      "fontSize": "48px",
      "fontWeight": "600",
      "lineHeight": "52.8px",
      "fontFamily": "'Matter SemiBold', sans-serif"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "600",
      "lineHeight": "31.2px",
      "fontFamily": "'Matter SemiBold', sans-serif"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "600",
      "lineHeight": "20px",
      "fontFamily": "'Matter SemiBold', sans-serif"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset",
    "rgb(255, 255, 255) 0px 2px 0px 0px inset",
    "rgba(0, 0, 0, 0.1) 0px 0.693878px 2.08163px 0px, rgba(0, 0, 0, 0.06) 0px 0px 1.38776px 0px",
    "rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset",
    "rgba(0, 0, 0, 0) 0px 1px 3px 0px, rgba(0, 0, 0, 0) 0px 0px 2px 0px"
  ]
};

export default theme;
