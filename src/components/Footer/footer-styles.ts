import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useFooterStyles: Function = makeStyles(() => ({
  footer: {
    bottom: 0,
    textAlign: 'center'
  },
  copyright: {
    color: colors.Lime,
    fontFamily: 'press-start !important',
    fontSize: '1rem',
    padding: '2.5vh 0'
  }
}));