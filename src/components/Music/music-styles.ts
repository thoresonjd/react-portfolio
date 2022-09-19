import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useMusicStyles: Function = makeStyles(() => ({
  container: {
    margin: '5vh 0'
  },
  title: {
    fontFamily: 'press-start !important',
    fontSize: '2rem',
    textAlign: 'center',
    color: colors.Lime
  },
  audioPlayer: {
    margin: '5vh auto'
  }
}));
