// React Theme — extracted from https://clerk.com
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
    '10': string;
    '11': string;
    '12': string;
    '13': string;
    '14': string;
    '15': string;
    '16': string;
    '17': string;
    '18': string;
    '24': string;
    '32': string;
    '64': string;
 *   };
 *   space: {
    '1': string;
    '46': string;
    '56': string;
    '76': string;
    '94': string;
    '128': string;
    '140': string;
    '151': string;
    '158': string;
    '167': string;
    '172': string;
    '192': string;
    '220': string;
    '259': string;
    '272': string;
    '302': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
    lg: string;
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
    "primary": "#6c47ff",
    "secondary": "#1cc4ff",
    "accent": "#5de3ff",
    "background": "#f7f7f8",
    "foreground": "#000000",
    "neutral50": "#d9d9de",
    "neutral100": "#000000",
    "neutral200": "#ffffff",
    "neutral300": "#131316",
    "neutral400": "#747686",
    "neutral500": "#5e5f6e",
    "neutral600": "#2f3037",
    "neutral700": "#9394a1",
    "neutral800": "#696a78",
    "neutral900": "#eeeef0"
  },
  "fonts": {
    "body": "'geistNumbers', sans-serif",
    "mono": "'soehneMono', monospace"
  },
  "fontSizes": {
    "10": "10px",
    "11": "11px",
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "17": "17px",
    "18": "18px",
    "24": "24px",
    "32": "32px",
    "64": "64px"
  },
  "space": {
    "1": "1px",
    "46": "46px",
    "56": "56px",
    "76": "76px",
    "94": "94px",
    "128": "128px",
    "140": "140px",
    "151": "151px",
    "158": "158px",
    "167": "167px",
    "172": "172px",
    "192": "192px",
    "220": "220px",
    "259": "259px",
    "272": "272px",
    "302": "302px"
  },
  "radii": {
    "xs": "2px",
    "sm": "5px",
    "md": "8px",
    "lg": "16px",
    "full": "50px"
  },
  "shadows": {
    "sm": "rgba(107, 231, 255, 0.3) 0px 0px 8px 1px, rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset",
    "xs": "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset",
    "lg": "rgba(0, 0, 0, 0.16) 0px 10px 19px 4px, rgba(255, 255, 255, 0.04) 0px -10px 16px -4px, rgba(255, 255, 255, 0.01) 0px 0px 0px 1px, rgba(255, 255, 255, 0.02) 0px 1px 0px 0px"
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
      "main": "#6c47ff",
      "light": "hsl(252, 100%, 79%)",
      "dark": "hsl(252, 100%, 49%)"
    },
    "secondary": {
      "main": "#1cc4ff",
      "light": "hsl(196, 100%, 70%)",
      "dark": "hsl(196, 100%, 40%)"
    },
    "background": {
      "default": "#f7f7f8",
      "paper": "#f8f8f8"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#ffffff"
    }
  },
  "typography": {
    "fontFamily": "'soehneMono', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "600",
      "lineHeight": "40px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "700",
      "lineHeight": "32px"
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
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(66, 67, 77) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.07) 0px 1px 0px 0px inset, oklab(0.249859 0.00254738 -0.00901626 / 0.2) 0px 1px 3px 0px",
    "rgba(255, 255, 255, 0.9) 0px 0px 0px 0.5px inset, rgba(19, 19, 22, 0.15) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 2px 3px 0px, rgba(34, 42, 53, 0.04) 0px 4px 6px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.08) 0px 2px 3px -1px, oklab(0.188081 0.0016512 -0.00579907 / 0.18) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 1px 0px 0px inset",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(108, 71, 255) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.07) 0px 1px 0px 0px inset, oklab(0.249859 0.00254738 -0.00901626 / 0.2) 0px 1px 3px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.08) 0px 2px 3px -1px, oklab(0.188081 0.0016512 -0.00579907 / 0.1) 0px 0px 0px 0.5px, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 1px 0px 0px inset"
  ]
};

export default theme;
