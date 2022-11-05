import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useBulletStyles: Function = makeStyles(() => ({
  bulletPoint: {
    display: 'flex'
  },
  bulletText: {
    fontFamily: 'press-start !important',
    fontSize: '0.66rem !important',
    color: colors.White,
  }
}));