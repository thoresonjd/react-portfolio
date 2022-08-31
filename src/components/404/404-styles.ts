import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const use404Styles = makeStyles(() => ({
  notFoundBox: {
    height: '100%',
    textAlign: 'center'
  },
  errorMessage: {
    position: 'relative',
    top: '25%'
  },
  title: {
    fontFamily: 'consolas !important',
    color: colors.Lime,
  },
  subtitle: {
    fontFamily: 'consolas !important',
    color: colors.Green,
  }
}));
