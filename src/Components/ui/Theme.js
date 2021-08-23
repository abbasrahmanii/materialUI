import { createTheme } from "@material-ui/core/styles";

const ArcBlue = "#0B72B9";
const ArcOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      blue: `${ArcBlue}`,
      orange: `${ArcOrange}`,
    },
    primary: {
      main: `${ArcBlue}`,
    },
    secondary: {
      main: `${ArcOrange}`,
    },
  },
  typography: {
    tab: {
      fontSize: "1rem",
      textTransform: "none",
      fontWeight: 700,
      fontFamily: "Raleway",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
