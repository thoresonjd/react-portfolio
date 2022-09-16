import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useMusicStyles: Function = makeStyles(() => ({
  audioPlayer: {
    margin: '5vh auto'
  },
  title: {
    fontFamily: 'consolas !important',
    textAlign: 'center',
    color: colors.Lime
  }
}));