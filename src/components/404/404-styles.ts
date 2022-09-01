import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const use404Styles = makeStyles(() => ({
  notFoundBox: {
    textAlign: 'center'
  },
  errorMessage: {
    margin: '2.5vh auto',
    padding: '5vh 0',
    width: '50%',
    backdropFilter: 'invert()'
  },
  title: {
    fontFamily: 'consolas !important',
    color: colors.Black,
  },
  subtitle: {
    fontFamily: 'consolas !important',
    color: colors.Black,
  },
  image: {
    width: '75%',
    marginTop: '5vh'
  }
}));
