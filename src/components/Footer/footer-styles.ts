import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useFooterStyles = makeStyles(() => ({
  footer: {
    bottom: 0,
    textAlign: 'center'
  },
  copyright: {
    color: colors.Lime,
    fontFamily: 'consolas !important',
    paddingBottom: '30px'
  }
}));
