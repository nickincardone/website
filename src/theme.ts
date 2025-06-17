import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      main: string;
      light: string;
      dark: string;
      border: string;
      orange: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      main: string;
      light: string;
      dark: string;
      border: string;
      orange: string;
    };
  }
}

const WebsiteBlue = "#4e868e";
const WebsiteBlack = "#000000DE";
const WebsiteOrange = "#de7c79";

const theme = createTheme({
  palette: {
    text: {
      primary: WebsiteBlack,
      secondary: "#4d4d4d",
    },
    primary: {
      main: WebsiteBlue,
      light: "#6ba0a8",
      dark: "#3a6a71",
    },
    secondary: {
      main: "#2c3e50",
      light: "#34495e",
      dark: "#1a252f",
    },
    background: {
      default: WebsiteBlue,
      paper: "#ffffff",
    },
    custom: {
      main: WebsiteBlue,
      light: "#6ba0a8",
      dark: "#3a6a71",
      border: "#777",
      orange: WebsiteOrange,
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontWeight: 300,
      fontSize: "3.5rem",
      marginBottom: "0.2em",
    },
    h2: {
      fontWeight: 400,
      fontSize: "3rem",
      marginBottom: "0.2em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "2.5rem",
      marginBottom: "0.2em",
    },
    h4: {
      fontWeight: 500,
      fontSize: "2rem",
      marginBottom: "0.2em",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.5rem",
      color: WebsiteOrange,
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: "#fff",
          minHeight: "90vh",
          marginTop: "32px",
          borderRadius: "16px",
          boxShadow: "none",
          padding: 0,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: WebsiteBlack,
          fontWeight: 500,
          "& p": {
            fontWeight: 500,
          },
          "&.MuiTab-textColorPrimary": {
            color: "rgba(0, 0, 0, 0.54)",
          },
          "&.Mui-selected": {
            color: WebsiteBlue,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: WebsiteBlue,
        },
      },
    },
  },
});

export default theme;
