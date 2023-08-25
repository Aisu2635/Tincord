// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#191919",
    1000: "#e8eef3",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
  red: {
    0: "#FFFFFF",
    10: "#FFF0F0",
    50: "#FFC2C2",
    100: "#FF8585",
    200: "#FF4D4D",
    300: "#FF3333",
    400: "#FF1A1A",
    500: "#F14646", 
    600: "#E60000",
    700: "#B30000",
    800: "#8000003b",
    900: "#4D0000",
    1000: "#330000",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            dark: colorTokens.red[200],
            main: colorTokens.red[500],
            light: colorTokens.red[800],
          },
          neutral: {
            dark: colorTokens.grey[100],
            main: colorTokens.grey[200],
            mediumMain: colorTokens.grey[300],
            medium: colorTokens.grey[400],
            light: colorTokens.grey[700],
          },
          background: {
            default: colorTokens.grey[900],
            alt: colorTokens.grey[800],
          },
        }
      : {
          // palette values for light mode
          primary: {
            dark: colorTokens.red[700],
            main: colorTokens.red[500],
            light: colorTokens.red[50],
          },
          neutral: {
            dark: colorTokens.grey[700],
            main: colorTokens.grey[500],
            mediumMain: colorTokens.grey[400],
            medium: colorTokens.grey[300],
            light: colorTokens.grey[50],
          },
          background: {
            default: colorTokens.grey[10],
            alt: colorTokens.grey[0],
          },
        }),
  },
    typography: {
      fontFamily: ["Khand", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Khand", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Khand", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Khand", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Khand", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Khand", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Khand", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};