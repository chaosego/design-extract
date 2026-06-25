// React Theme — extracted from https://render.com
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
 *   };
 *   fontSizes: {
    '12': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '24': string;
    '32': string;
    '40': string;
    '48': string;
    '56': string;
    '64': string;
    '80': string;
 *   };
 *   space: {
    '1': string;
    '48': string;
    '56': string;
    '72': string;
    '80': string;
    '86': string;
    '120': string;
    '160': string;
    '166': string;
    '201': string;
    '213': string;
    '270': string;
    '287': string;
    '295': string;
    '305': string;
    '312': string;
 *   };
 *   radii: {
    xs: string;
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
    "primary": "#8a05ff",
    "secondary": "#e7dbff",
    "accent": "#e0f4ff",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#e3e3e3",
    "neutral100": "#0d0d0d",
    "neutral200": "#ffffff",
    "neutral300": "#000000",
    "neutral400": "#6b6b6b",
    "neutral500": "#4d4d4d",
    "neutral600": "#fce9ea",
    "neutral700": "#272727",
    "neutral800": "#8f8f8f",
    "neutral900": "#f4f0ff"
  },
  "fonts": {
    "body": "'Helvetica', sans-serif",
    "mono": "'PPNeueMontrealMono', monospace"
  },
  "fontSizes": {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "32": "32px",
    "40": "40px",
    "48": "48px",
    "56": "56px",
    "64": "64px",
    "80": "80px"
  },
  "space": {
    "1": "1px",
    "48": "48px",
    "56": "56px",
    "72": "72px",
    "80": "80px",
    "86": "86px",
    "120": "120px",
    "160": "160px",
    "166": "166px",
    "201": "201px",
    "213": "213px",
    "270": "270px",
    "287": "287px",
    "295": "295px",
    "305": "305px",
    "312": "312px"
  },
  "radii": {
    "xs": "2px",
    "full": "937px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
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
      "main": "#8a05ff",
      "light": "hsl(272, 100%, 66%)",
      "dark": "hsl(272, 100%, 36%)"
    },
    "secondary": {
      "main": "#e7dbff",
      "light": "hsl(260, 100%, 95%)",
      "dark": "hsl(260, 100%, 78%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#000000"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#ffffff"
    }
  },
  "typography": {
    "fontFamily": "'PPNeueMontreal', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "36.8px"
    }
  },
  "shape": {
    "borderRadius": 2
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px"
  ]
};

export default theme;
