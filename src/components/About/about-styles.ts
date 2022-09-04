import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useAboutStyles: Function = makeStyles(() => ({
  aboutBox: {
    textAlign: 'center',
  },
  image: {
    height: '30vmin !important',
    width: '30vmin !important',
    margin: '2.5vh auto'
  },
  title: {
    fontFamily: 'consolas !important',
    color: colors.Lime
  },
  linksBox: {
    width: '20%',
    margin: '2.5vh  auto',
    padding: '1vh',
    borderRadius: '15px !important'
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
    color: colors.White,
    
    // Animation
    display: 'inline-block',
    backgroundColor: colors.Transparent,
    backgroundImage: `linear-gradient(${colors.Lime} 0 0)`,
    backgroundPosition: '5px 100%',
    backgroundSize: '0 2px',
    backgroundRepeat: 'no-repeat',
    transition: 'color 0.3s, background-size 0.3s',
    '&:hover': {
      color: colors.Lime,
      backgroundSize: '100% 2px',
      cursor: 'pointer'
    },
    '&:active': {
      color: colors.Lime,
      backgroundSize: '100% 2px',
      backgroundImage: `linear-gradient(${colors.Green} 0 0)`
    }
  }
}));
