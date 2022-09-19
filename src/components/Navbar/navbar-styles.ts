import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useNavbarStyles: Function = makeStyles(() => ({
  appbar: {
    boxShadow: 'none !important',
    height: '64px'
  },
  toolbar: {
    margin: 'auto',
    width: '90%',
    height: '64px',
    minHeight: '64px !important',
    justifyContent: 'space-evenly'
  },
  button: {
    textTransform: 'lowercase',
    fontFamily: 'press-start !important',
    fontSize: '1rem',
    color: colors.Lime,
    border: 'none',
    padding: '5px 10px',

    // Animation
    display: 'inline-block',
    backgroundColor: colors.Transparent,
    backgroundImage: `linear-gradient(${colors.Lime} 0 0)`,
    backgroundPosition: '0 50%',
    backgroundSize: '0 100%',
    backgroundRepeat: 'no-repeat',
    transition: 'color 0.3s, background-size 0.3s',
    '&:hover': {
      color: colors.Black,
      backgroundSize: '100% 100%',
      cursor: 'pointer'
    },
    '&:active': {
      color: colors.Black,
      backgroundSize: '100% 100%',
      backgroundImage: `linear-gradient(${colors.Green} 0 0)`
    }
  }
}));
