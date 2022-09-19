import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const use404Styles: Function = makeStyles(() => ({
  errorBox: {
    textAlign: 'center',
    margin: '2.5vh auto',
    padding: '5vh 0',
    width: '50vw',
    animation: '$upDown 5s ease-in-out infinite'
  },
  title: {
    fontFamily: 'press-start !important',
    color: colors.Lime,
  },
  subtitle: {
    fontFamily: 'press-start !important',
    color: colors.Lime,
  },
  image: {
    width: '75%',
    marginTop: '5vh'
  },
  '@keyframes upDown': {
    '0%': {
      transform: 'translateY(-2.5vh)'
    },
    '50%': {
      transform: 'translateY(2.5vh)'
    },
    '100%': {
      transform: 'translateY(-2.5vh)'
    }
  }
}));
