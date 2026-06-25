// React Theme — extracted from https://raycast.com
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
    mono: string;
 *   };
 *   fontSizes: {
    '12': string;
    '13': string;
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '22': string;
    '24': string;
    '32': string;
    '56': string;
    '64': string;
    '23.75': string;
 *   };
 *   space: {
    '1': string;
    '45': string;
    '56': string;
    '64': string;
    '72': string;
    '80': string;
    '96': string;
    '102': string;
    '120': string;
    '128': string;
    '137': string;
    '148': string;
    '169': string;
    '200': string;
    '212': string;
    '217': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
    md: string;
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
    "primary": "#ff6363",
    "secondary": "#8cd6ff",
    "accent": "#56c2ff",
    "background": "#07080a",
    "foreground": "#ffffff",
    "neutral50": "#ffffff",
    "neutral100": "#6a6b6c",
    "neutral200": "#9c9c9d",
    "neutral300": "#434345",
    "neutral400": "#e6e6e6",
    "neutral500": "#2f3031",
    "neutral600": "#1b1c1e",
    "neutral700": "#8e8c90",
    "neutral800": "#111214"
  },
  "fonts": {
    "body": "'SF Pro', sans-serif",
    "mono": "'GeistMono', monospace"
  },
  "fontSizes": {
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "22": "22px",
    "24": "24px",
    "32": "32px",
    "56": "56px",
    "64": "64px",
    "23.75": "23.75px"
  },
  "space": {
    "1": "1px",
    "45": "45px",
    "56": "56px",
    "64": "64px",
    "72": "72px",
    "80": "80px",
    "96": "96px",
    "102": "102px",
    "120": "120px",
    "128": "128px",
    "137": "137px",
    "148": "148px",
    "169": "169px",
    "200": "200px",
    "212": "212px",
    "217": "217px"
  },
  "radii": {
    "xs": "2px",
    "sm": "5px",
    "md": "8px",
    "lg": "16px",
    "xl": "22px",
    "full": "99999px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
    "xs": "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(154, 170, 255, 0.05) 0px 2px 40px 10px, rgba(154, 170, 255, 0.05) 0px 0px 16px -7px",
    "md": "rgba(0, 0, 0, 0.11) 0px -4px 10px 0px",
    "lg": "rgba(215, 201, 175, 0.05) 0px 0px 20px 5px, rgba(215, 201, 175, 0.05) 0px 0px 16px -7px",
    "xl": "rgba(215, 42, 42, 0.05) -72px -50px 40px -60px"
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
      "main": "#ff6363",
      "light": "hsl(0, 100%, 84%)",
      "dark": "hsl(0, 100%, 54%)"
    },
    "secondary": {
      "main": "#8cd6ff",
      "light": "hsl(201, 100%, 92%)",
      "dark": "hsl(201, 100%, 62%)"
    },
    "background": {
      "default": "#07080a",
      "paper": "#000000"
    },
    "text": {
      "primary": "#ffffff",
      "secondary": "#9c9c9d"
    }
  },
  "typography": {
    "fontFamily": "'SF Pro Text', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "36.8px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "600",
      "lineHeight": "28px"
    },
    "h3": {
      "fontSize": "22px",
      "fontWeight": "400",
      "lineHeight": "25.3px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(0, 0, 0, 0.5) 0px 0px 0px 2px, rgba(255, 255, 255, 0.19) 0px 0px 14px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0.4px 0px inset, rgb(255, 255, 255) 0px 1px 0.4px 0px inset",
    "rgb(27, 28, 30) 0px 0px 0px 1px, rgb(7, 8, 10) 0px 0px 0px 1px inset",
    "rgba(0, 0, 0, 0.2) 0px 0px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 4px 3px 0px, rgba(0, 0, 0, 0.03) 0px 7px 3px 0px, rgba(0, 0, 0, 0) 0px 12px 3px 0px, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px",
    "rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset",
    "rgba(255, 255, 255, 0.1) 0px 1px 0px 0px inset, rgba(7, 13, 79, 0.05) 0px 0px 20px 3px, rgba(7, 13, 79, 0.05) 0px 0px 40px 20px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px inset"
  ]
};

export default theme;
