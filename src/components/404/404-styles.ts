import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const use404Styles = makeStyles(() => ({
  notFoundBox: {
    textAlign: 'center'
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
