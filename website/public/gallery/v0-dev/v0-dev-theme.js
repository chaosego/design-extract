// React Theme — extracted from https://v0.dev
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
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
    '13': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '24': string;
    '32': string;
    '48': string;
 *   };
 *   space: {
    '1': string;
    '64': string;
    '96': string;
    '108': string;
    '128': string;
    '192': string;
    '208': string;
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
    "background": "#f4f4f4",
    "foreground": "#000000",
    "neutral50": "#d2d2d2",
    "neutral100": "#020202",
    "neutral200": "#222222",
    "neutral300": "#ffffff",
    "neutral400": "#f4f4f4",
    "neutral500": "#343434",
    "neutral600": "#646464",
    "neutral700": "#e2e2e2",
    "neutral800": "#959595"
  },
  "fonts": {
    "body": "'Times', sans-serif",
    "mono": "'GeistMono', monospace"
  },
  "fontSizes": {
    "10": "10px",
    "13": "13px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "32": "32px",
    "48": "48px"
  },
  "space": {
    "1": "1px",
    "64": "64px",
    "96": "96px",
    "108": "108px",
    "128": "128px",
    "192": "192px",
    "208": "208px"
  },
  "radii": {
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "full": "35px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    "xs": "rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px -4px, rgba(0, 0, 0, 0.06) 0px 16px 24px -8px"
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
    "background": {
      "default": "#f4f4f4",
      "paper": "#ffffff"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#020202"
    }
  },
  "typography": {
    "fontFamily": "'GeistMono', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "600",
      "lineHeight": "40px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "600",
      "lineHeight": "32px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "600",
      "lineHeight": "26px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "24px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 1px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    "rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px -4px, rgba(0, 0, 0, 0.06) 0px 16px 24px -8px"
  ]
};

export default theme;
