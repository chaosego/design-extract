// React Theme — extracted from https://webflow.com
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
    '20': string;
    '24': string;
    '74.8571': string;
    '52.5714': string;
    '42.0571': string;
    '38.2857': string;
    '30.8571': string;
    '30.5714': string;
    '28.1143': string;
    '23.4286': string;
    '19.7143': string;
    '19.6571': string;
 *   };
 *   space: {
    '1': string;
    '23': string;
    '31': string;
    '37': string;
    '40': string;
    '46': string;
    '56': string;
    '64': string;
    '73': string;
    '80': string;
    '88': string;
    '91': string;
    '99': string;
    '111': string;
    '184': string;
    '192': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    lg: string;
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
    "primary": "#146ef5",
    "secondary": "#6ca7ff",
    "accent": "#3b82f6",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#080808",
    "neutral100": "#ffffff",
    "neutral200": "#5a5a5a",
    "neutral300": "#d8d8d8",
    "neutral400": "#f0f0f0",
    "neutral500": "#1a1a1a",
    "neutral600": "#6b7280",
    "neutral700": "#292929",
    "neutral800": "#464646",
    "neutral900": "#808080"
  },
  "fonts": {
    "body": "'Times', sans-serif",
    "mono": "'WFVisualSans-Mono', monospace"
  },
  "fontSizes": {
    "20": "20px",
    "24": "24px",
    "74.8571": "74.8571px",
    "52.5714": "52.5714px",
    "42.0571": "42.0571px",
    "38.2857": "38.2857px",
    "30.8571": "30.8571px",
    "30.5714": "30.5714px",
    "28.1143": "28.1143px",
    "23.4286": "23.4286px",
    "19.7143": "19.7143px",
    "19.6571": "19.6571px"
  },
  "space": {
    "1": "1px",
    "23": "23px",
    "31": "31px",
    "37": "37px",
    "40": "40px",
    "46": "46px",
    "56": "56px",
    "64": "64px",
    "73": "73px",
    "80": "80px",
    "88": "88px",
    "91": "91px",
    "99": "99px",
    "111": "111px",
    "184": "184px",
    "192": "192px"
  },
  "radii": {
    "xs": "2px",
    "md": "6px",
    "full": "1280px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 100px inset",
    "lg": "rgba(0, 0, 0, 0.12) 0px 4px 24px 0px, rgba(0, 0, 0, 0.08) 0px 1px 4px 0px",
    "xl": "rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px"
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
      "main": "#146ef5",
      "light": "hsl(216, 92%, 67%)",
      "dark": "hsl(216, 92%, 37%)"
    },
    "secondary": {
      "main": "#6ca7ff",
      "light": "hsl(216, 100%, 86%)",
      "dark": "hsl(216, 100%, 56%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#146ef5"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#080808"
    }
  },
  "typography": {
    "fontFamily": "'WFVisualSans-Mono', sans-serif",
    "h1": {
      "fontSize": "38.2857px",
      "fontWeight": "600",
      "lineHeight": "45.9429px"
    },
    "h2": {
      "fontSize": "30.5714px",
      "fontWeight": "500",
      "lineHeight": "39.7429px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 100px inset",
    "rgba(0, 0, 0, 0.12) 0px 4px 24px 0px, rgba(0, 0, 0, 0.08) 0px 1px 4px 0px",
    "rgba(0, 0, 0, 0) 0px 84px 24px 0px, rgba(0, 0, 0, 0.01) 0px 54px 22px 0px, rgba(0, 0, 0, 0.04) 0px 30px 18px 0px, rgba(0, 0, 0, 0.08) 0px 13px 13px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px",
    "rgba(0, 0, 0, 0) 0px 105px 30px 0px, rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px",
    "rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px"
  ]
};

export default theme;
