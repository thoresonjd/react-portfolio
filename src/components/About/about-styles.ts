import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useAboutStyles: Function = makeStyles(() => ({
  aboutBox: {
    textAlign: 'center',
  },
  avatar: {
    height: '40vmin !important',
    width: '40vmin !important',
    margin: '2.5vh auto'
  },
  name: {
    marginTop: '2.5vh',
    height: '40px'
  },
  linksBox: {
    width: 'fit-content',
    margin: '2.5vh auto'
  },
  icon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit'
  },
  linksList: {
    overflowY: 'auto',
    maxHeight: '50vh'
  },
  linkText: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem',
    color: colors.White,
    
    // Animation
    display: 'inline-block',
    backgroundColor: colors.Transparent,
    backgroundImage: `linear-gradient(${colors.Lime} 0 0)`,
    backgroundPosition: '10px 100%',
    backgroundSize: '0 1px',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 0.3s',
    '&:hover': {
      color: colors.Lime,
      backgroundSize: '100% 1px',
      cursor: 'pointer'
    },
    '&:active': {
      color: colors.Green,
      backgroundSize: '100% 1px',
      backgroundImage: `linear-gradient(${colors.Green} 0 0)`
    }
  }
}));
