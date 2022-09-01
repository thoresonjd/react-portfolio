import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useAboutStyles = makeStyles(() => ({
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
    '&:hover': {
      color: colors.Lime
    }
  }
}));
