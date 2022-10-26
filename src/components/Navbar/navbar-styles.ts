import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useNavbarStyles: Function = makeStyles(() => ({
  navbar: {
    boxShadow: 'none !important',
    transition: 'all 0.3s ease-out 0s !important',
    padding: '1rem 2rem !important'
  },
  toolbar: {
    margin: 'auto'
  },
  image: {
    height: '3em !important'
  },
  navbarToggler: {
    position: 'relative',
    margin: 'auto 0',
    borderColor: colors.Transparent,
    backgroundColor: colors.Transparent,
    '&:focus, &:active': {
      outline: '0 !important'
    },
    '& span': {
      display: 'block !important',
      backgroundColor: 'lime !important',
      height: '4px !important',
      width: '27px !important',
      marginTop: '5px !important',
      marginBottom: '5px !important',
      transform: 'rotate(0deg) !important',
      transition: 'transform 0.35s ease-in-out !important',
      left: '0 !important',
      opacity: '1 !important'
    },
    '&:not(.collapsed) span': {
      '&:nth-child(1)': {
        transform: 'translateY(4.5px) rotate(135deg) !important',
      },
      '&:nth-child(2)': {
        transform: 'translateY(-4.5px) rotate(-135deg) !important'
      }
    }
  },
  navItem: {
    margin: 'auto'
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
