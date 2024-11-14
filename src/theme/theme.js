import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#162427",
    },
    secondary: {
      main: "#001EB9",
    },
    textfield: {
      main: "#F7F7F7",
    },
  },
  typography: {
    fontFamily: '"Satoshi", "Arial", sans-serif',
    h1: {
      fontFamily: '"Satoshi", "Arial", sans-serif',
      fontSize: "36px",
      fontWeight: 900,
      lineHeight: "48.6px",
      letterSpacing: "0.15em",
      textAlign: "left",
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none",
    },
    h2: {
      fontFamily: '"Satoshi", "Arial", sans-serif',
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "32.4px",
      letterSpacing: "0.08em",
      textAlign: "left",
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none",
    },
    h3: {
      fontFamily: '"Satoshi", "Arial", sans-serif',
      fontSize: "19px",
      fontWeight: 500,
      lineHeight: "25.65px",
      textAlign: "left",
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none",
    },
    secTextMed: {
      fontFamily: '"Satoshi", "Arial", sans-serif',
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "18.9px",
      textAlign: "left",
      textUnderlinePosition: "from-font",
      textDecorationSkipInk: "none",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Removes the border
            },
            "&:hover fieldset": {
              border: "none", // Removes the border on hover
            },
            "&.Mui-focused fieldset": {
              border: "none", // Removes the border when focused
            },
          },
        },
      },
    },
  },
});

export default theme;
