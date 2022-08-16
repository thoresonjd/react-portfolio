import { createTheme } from "@mui/material/styles";
import { colors } from './Colors'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.Lime
    },
    secondary: {
      main: colors.White
    },
    error: {
      main: colors.Red
    }
  },
  // typography: {
  //   fontFamily: 'consolas'
  // },  
});
