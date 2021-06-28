import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor } from "./colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "black"
        },
        secondary: {
            main: secondaryColor,
            contrastText: "white"
        },
    },
})

export default theme