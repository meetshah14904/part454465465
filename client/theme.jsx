import { createTheme } from '@material-ui/core/styles';
import { teal, deepPurple, pink } from '@material-ui/core/colors';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
      contrastText: '#fff',
    },
    secondary: {
      light: deepPurple[200],
      main: deepPurple[400],
      dark: deepPurple[600],
      contrastText: '#000',
    },
    openTitle: teal[500],
    protectedTitle: pink['400'],
    type: 'light',
  },
});

export default theme;
