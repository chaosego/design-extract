// React Theme — extracted from https://framer.com
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
    '12': string;
    '13': string;
    '14': string;
    '15': string;
    '16': string;
    '17': string;
    '18': string;
    '20': string;
    '44': string;
    '54': string;
    '68': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '25': string;
    '30': string;
    '40': string;
    '45': string;
    '50': string;
    '55': string;
    '60': string;
    '64': string;
    '100': string;
    '120': string;
    '160': string;
    '200': string;
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
    "primary": "#0066ff",
    "secondary": "#0000ee",
    "accent": "#0099ff",
    "background": "#000000",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#999999",
    "neutral300": "#242424",
    "neutral400": "#666666",
    "neutral500": "#111111",
    "neutral600": "#cccccc",
    "neutral700": "#303030",
    "neutral800": "#878787",
    "neutral900": "#444444"
  },
  "fonts": {
    "body": "'Inter Framer SemiBold', sans-serif",
    "mono": "'JetBrains Mono', monospace"
  },
  "fontSizes": {
    "10": "10px",
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "17": "17px",
    "18": "18px",
    "20": "20px",
    "44": "44px",
    "54": "54px",
    "68": "68px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "25": "25px",
    "30": "30px",
    "40": "40px",
    "45": "45px",
    "50": "50px",
    "55": "55px",
    "60": "60px",
    "64": "64px",
    "100": "100px",
    "120": "120px",
    "160": "160px",
    "200": "200px"
  },
  "radii": {
    "xs": "1px",
    "sm": "4px",
    "md": "10px",
    "lg": "14px",
    "xl": "21px",
    "full": "100px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0.2) 0px 2px 6px 0px",
    "xs": "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    "md": "rgba(0, 0, 0, 0.25) 0px 4px 8px 0px",
    "lg": "rgba(0, 0, 0, 0.2) 0px 12px 19.2px 0px",
    "xl": "rgba(0, 0, 0, 0.2) 0px 40px 64px 0px"
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
      "main": "#0066ff",
      "light": "hsl(216, 100%, 65%)",
      "dark": "hsl(216, 100%, 35%)"
    },
    "secondary": {
      "main": "#0000ee",
      "light": "hsl(240, 100%, 62%)",
      "dark": "hsl(240, 100%, 32%)"
    },
    "background": {
      "default": "#000000",
      "paper": "#111111"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#0000ee"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "44px",
      "fontWeight": "500",
      "lineHeight": "48.4px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body1": {
      "fontSize": "17px",
      "fontWeight": "400",
      "lineHeight": "20.4px"
    }
  },
  "shape": {
    "borderRadius": 7
  },
  "shadows": [
    "rgb(17, 17, 17) 0px 0px 0px 2px",
    "rgb(17, 17, 17) 0px 0px 0px 1.5px",
    "rgba(0, 153, 255, 0.15) 0px 1px 2px 0px, rgba(0, 153, 255, 0.2) 0px 2px 4px 0px",
    "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
    "rgba(0, 0, 0, 0.25) 0px 2px 4px 0px"
  ]
};

export default theme;
