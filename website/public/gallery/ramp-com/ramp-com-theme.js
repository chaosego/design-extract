// React Theme — extracted from https://ramp.com
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    foreground: string;
    neutral50: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '13': string;
    '16': string;
 *   };
 *   space: {
    '8': string;
    '13': string;
 *   };
 *   radii: {

 *   };
 *   shadows: {

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
    "foreground": "#000000",
    "neutral50": "#000000"
  },
  "fonts": {
    "body": "'Times', sans-serif"
  },
  "fontSizes": {
    "13": "13px",
    "16": "16px"
  },
  "space": {
    "8": "8px",
    "13": "13px"
  },
  "radii": {},
  "shadows": {},
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
    "background": {},
    "text": {
      "primary": "#000000"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    },
    "body2": {
      "fontSize": "13px",
      "fontWeight": "400",
      "lineHeight": "normal"
    }
  },
  "shape": {},
  "shadows": []
};

export default theme;
